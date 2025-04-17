import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import pickle

# Load data
#data = pd.read_csv('C:/Users/hp/Documents/CROP/Crop_recommendation.csv')
data = pd.read_csv('Crop_recommendation.csv')

# Prepare data
X = data.drop('label', axis=1)
y = data['label']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=0)

# Train model
model = RandomForestClassifier(n_estimators=10, criterion="entropy")
model.fit(X_train, y_train)

# Save to pickle
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)

print("✅ Model saved as model.pkl")
