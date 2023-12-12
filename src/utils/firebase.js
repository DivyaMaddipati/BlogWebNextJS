// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-ab8c0.firebaseapp.com",
  projectId: "blog-ab8c0",
  storageBucket: "blog-ab8c0.appspot.com",
  messagingSenderId: "263202904333",
  appId: "1:263202904333:web:1b9fe68c3df4936445f844",
  measurementId: "G-SZ692DHQJC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
