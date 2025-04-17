# app.py
from flask import Flask, request, jsonify
import pickle
import numpy as np

#app = Flask(_name_)
app = Flask(__name__)

# Load the trained model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    try:
        features = [data['N'], data['P'], data['K'],
                    data['temperature'], data['humidity'],
                    data['ph'], data['rainfall']]
        prediction = model.predict([features])
        return jsonify({'recommended_crop': prediction[0]})
    except KeyError as e:
        return jsonify({'error': f'Missing field {str(e)}'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)