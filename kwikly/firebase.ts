// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1A9imjwBRCY0R6dltXX-XlKoTl-iA7CY",
  authDomain: "kwiklyauth.firebaseapp.com",
  projectId: "kwiklyauth",
  storageBucket: "kwiklyauth.firebasestorage.app",
  messagingSenderId: "61091154738",
  appId: "1:61091154738:web:d47964b4ae7aa2db75252b",
  measurementId: "G-0MY416CHE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
