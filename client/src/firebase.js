// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ef349.firebaseapp.com",
  projectId: "mern-estate-ef349",
  storageBucket: "mern-estate-ef349.appspot.com",
  messagingSenderId: "285732400811",
  appId: "1:285732400811:web:199af55d37afd20c3291ee",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
