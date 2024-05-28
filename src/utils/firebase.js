// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjTjCSk95-5LVlYY9lYRflf1A4FNozlnM",
  authDomain: "netflixgpt-ab3c8.firebaseapp.com",
  projectId: "netflixgpt-ab3c8",
  storageBucket: "netflixgpt-ab3c8.appspot.com",
  messagingSenderId: "570176823206",
  appId: "1:570176823206:web:4285726d6ab406f53d3967",
  measurementId: "G-2XTGHQK6RK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();