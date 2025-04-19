npm install

npm start

```
crop-recommendation-system/
├── backend/
│   ├── app.py                  # Flask API server
│   ├── model.pkl               # Your trained model
│   └── requirements.txt        # Python dependencies
│
└── frontend/
    ├── public/
    │   ├── index.html
    │   └── assets/
    │       └── images/
    │           └── hero-bg.jpg
    │
    ├── src/
    │   ├── App.js              # Updated with reorganized auth routes
    │   ├── index.js            # React entry point
    │   ├── firebase/
    │   │   └── config.js       # Firebase configuration
    │   │
    │   ├── context/
    │   │   └── auth-context.js # Authentication context
    │   │
    │   ├── components/         # Reusable components
    │   │   ├── Navbar.js       # Updated with auth UI
    │   │   ├── Footer.js
    │   │   ├── Charts.js
    │   │   └── PrivateRoute.js # For protected routes
    │   │
    │   ├── pages/              # Page components
    │   │   ├── Home.js
    │   │   ├── Predict.js
    │   │   ├── Dashboard.js
    │   │   ├── About.js
    │   │   └── auth/           # Authentication pages folder
    │   │       ├── Login.js
    │   │       ├── Register.js
    │   │       ├── Profile.js
    │   │       └── ForgotPassword.js
    │   │
    │   └── styles/             # CSS styles
    │       └── index.css
    │
    └── package.json            # With Firebase dependency
```