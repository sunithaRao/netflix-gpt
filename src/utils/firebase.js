// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt6pXiTA2dSroyUaAG_Bl-WoDw2eOi0uY",
  authDomain: "netflixgpt-7d499.firebaseapp.com",
  projectId: "netflixgpt-7d499",
  storageBucket: "netflixgpt-7d499.firebasestorage.app",
  messagingSenderId: "866411837056",
  appId: "1:866411837056:web:c97a015594fd2d47865865",
  measurementId: "G-SQGP0C7E4G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
