from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained model
try:
    with open('model.pkl', 'rb') as f:
        model = pickle.load(f)
    print("✅ Model loaded successfully!")
except Exception as e:
    print(f"❌ Error loading model: {e}")
    model = None

@app.route('/api/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({'error': 'Model not loaded'}), 500
    
    data = request.get_json()
    
    try:
        # Extract features from request
        features = [
            float(data['nitrogen']),
            float(data['phosphorus']),
            float(data['potassium']),
            float(data['temperature']),
            float(data['humidity']),
            float(data['ph']),
            float(data['rainfall'])
        ]
        
        # Make prediction
        prediction = model.predict([features])
        crop = prediction[0]
        
        # Get prediction probability
        probabilities = model.predict_proba([features])[0]
        confidence = round(np.max(probabilities) * 100, 2)
        
        # Generate fertilizer recommendation based on NPK values
        n, p, k = features[0], features[1], features[2]
        fertilizer_recommendation = generate_fertilizer_recommendation(n, p, k, crop)
        
        # Generate water saving tips
        water_tips = generate_water_tips(crop, features[3], features[6])  # temp and rainfall
        
        return jsonify({
            'crop': crop,
            'confidence': confidence,
            'fertilizer': fertilizer_recommendation,
            'waterSaving': water_tips,
            'additionalTips': generate_additional_tips(crop)
        })
    
    except KeyError as e:
        return jsonify({'error': f'Missing field: {str(e)}'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def generate_fertilizer_recommendation(n, p, k, crop):
    """Generate fertilizer recommendation based on NPK values and crop"""
    # This is a simplified recommendation system
    # In a real application, you would have more detailed recommendations
    
    if n < 50:
        n_status = "low"
    elif n < 100:
        n_status = "medium"
    else:
        n_status = "high"
        
    if p < 40:
        p_status = "low"
    elif p < 80:
        p_status = "medium"
    else:
        p_status = "high"
        
    if k < 40:
        k_status = "low"
    elif k < 80:
        k_status = "medium"
    else:
        k_status = "high"
    
    recommendation = f"NPK {n}-{p}-{k}: "
    
    if n_status == "low":
        recommendation += "Increase nitrogen with urea or ammonium sulfate. "
    if p_status == "low":
        recommendation += "Add phosphorus with superphosphate. "
    if k_status == "low":
        recommendation += "Supplement potassium with potash. "
    
    if n_status == "high" and p_status == "high" and k_status == "high":
        recommendation += "Reduce overall fertilizer application to prevent nutrient runoff."
    
    return recommendation

def generate_water_tips(crop, temperature, rainfall):
    """Generate water saving tips based on crop, temperature and rainfall"""
    
    # Crop-specific water recommendations
    crop_water_needs = {
        "rice": "high",
        "wheat": "medium",
        "maize": "medium",
        "chickpea": "low",
        "kidneybeans": "medium",
        "pigeonpeas": "low",
        "mothbeans": "low",
        "mungbean": "low",
        "blackgram": "low",
        "lentil": "low",
        "pomegranate": "medium",
        "banana": "high",
        "mango": "medium",
        "grapes": "medium",
        "watermelon": "high",
        "muskmelon": "medium",
        "apple": "medium",
        "orange": "medium",
        "papaya": "medium",
        "coconut": "high",
        "cotton": "medium",
        "jute": "high",
        "coffee": "medium"
    }
    
    water_need = crop_water_needs.get(crop.lower(), "medium")
    
    if temperature > 30 and rainfall < 100:
        if water_need == "high":
            return "Use drip irrigation and mulching to conserve water. Water deeply in the early morning."
        elif water_need == "medium":
            return "Implement drip irrigation and consider rainwater harvesting. Water every 2-3 days."
        else:
            return "Minimal irrigation needed. Use mulch to retain soil moisture."
    elif temperature > 25:
        if water_need == "high":
            return "Regular irrigation recommended. Consider drip systems for efficiency."
        elif water_need == "medium":
            return "Moderate irrigation needed. Water in the early morning to reduce evaporation."
        else:
            return "Light irrigation sufficient. Monitor soil moisture before watering."
    else:
        return "Standard irrigation practices should be sufficient. Adjust based on rainfall."

def generate_additional_tips(crop):
    """Generate additional cultivation tips based on crop"""
    
    tips = {
        "rice": "Consider SRI (System of Rice Intensification) for water conservation.",
        "wheat": "Rotate with legumes to improve soil nitrogen content.",
        "maize": "Intercrop with beans or peas for better land utilization.",
        "chickpea": "Good crop for improving soil health through nitrogen fixation.",
        "kidneybeans": "Ensure good drainage to prevent root diseases.",
        "pigeonpeas": "Drought-resistant crop, good for water-scarce regions.",
        "mothbeans": "Excellent cover crop that prevents soil erosion.",
        "mungbean": "Short duration crop, good for crop rotation.",
        "blackgram": "Requires well-drained soil and moderate sunlight.",
        "lentil": "Good winter crop, improves soil fertility.",
        "pomegranate": "Prune regularly for better fruit production.",
        "banana": "Provide wind protection to prevent damage to plants.",
        "mango": "Regular pruning helps in better fruit yield.",
        "grapes": "Trellising and proper pruning essential for good yield.",
        "watermelon": "Plant in well-drained soil with plenty of organic matter.",
        "muskmelon": "Provide support for vines and fruits for better quality.",
        "apple": "Requires chilling hours for proper fruit development.",
        "orange": "Protect from frost during winter months.",
        "papaya": "Sensitive to waterlogging, ensure good drainage.",
        "coconut": "Salt-tolerant crop, good for coastal areas.",
        "cotton": "Implement IPM (Integrated Pest Management) for pest control.",
        "jute": "Requires high humidity and temperature for optimal growth.",
        "coffee": "Shade-grown coffee has better quality and environmental benefits."
    }
    
    return tips.get(crop.lower(), "Practice crop rotation and maintain soil health with organic matter.")

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'model_loaded': model is not None})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
