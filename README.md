# 🌾 KrishiDoot – Smart Farming Solutions

**KrishiDoot** is a smart farming web app that recommends crops using machine learning based on soil and weather conditions. It helps farmers make informed decisions for better yields and sustainable agriculture.

🔗 [Watch it live](https://krishi-doot-one.vercel.app/)

---

## ✨ Features

- ✅ **Crop Recommendations** based on soil nutrients (N, P, K, pH) and local weather.
- 📊 **Farm Analytics Dashboard** to monitor soil health and predict yields.
- 🌦️ **Weather Forecast** for better planning and alerts.
- 💧 **Water Management Tips** for irrigation efficiency.

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- React Router
- Chart.js

**Backend**
- Python + Flask
- scikit-learn
- NumPy
- Flask-CORS

---

## 📸 Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/c466e947-f800-4b18-9b4f-6d224f01d01d" width="600"/><br>
  <em>Login Page</em>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/7e7163ad-04d1-4a1e-991f-378a9d1cbce4" width="600"/><br>
  <em>Homepage</em>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/435260e0-3e22-4234-9e5e-6f29485c1f02" width="600"/><br>
  <em>Crop Recommendation</em>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/ed356ec8-5d53-419a-8cca-639a21146bcf" width="600"/><br>
  <em>Farm Dashboard</em>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/69af0829-b103-4879-a9de-f64c3a56cf4b" width="600"/><br>
  <em>About Us</em>
</p>

---

## 🚀 Getting Started

### Prerequisites
- Node.js and npm
- Python 3.7+
- Trained ML model (`model.pkl`)

### Setup Instructions

```bash
# Clone the repo
git clone https://github.com/Vaibhav0120/krishi-doot.git
cd krishidoot

# Install frontend dependencies -- Terminal 1
cd frontend
npm install

# Install backend dependencies -- Terminal 2
cd backend
pip install flask numpy scikit-learn flask-cors

# Run backend -- Terminal 2
python app.py

# Run frontend -- Terminal 1
npm start

