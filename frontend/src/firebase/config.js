// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC8UOPEhAyus6lrEJyhHo1p0ue1vAgfCf4",
  authDomain: "krishidoot-c1888.firebaseapp.com",
  projectId: "krishidoot-c1888",
  storageBucket: "krishidoot-c1888.firebasestorage.app",
  messagingSenderId: "657742304485",
  appId: "1:657742304485:web:bf5c172c0239ba25f7f00c",
  measurementId: "G-PDXRQ5W66T",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
