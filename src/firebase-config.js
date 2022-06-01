// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuUpu4wRZ-aJ794Z2ew70iCWGyPn7LQ50",
  authDomain: "e-commerce-1e3cf.firebaseapp.com",
  projectId: "e-commerce-1e3cf",
  storageBucket: "e-commerce-1e3cf.appspot.com",
  messagingSenderId: "652876548797",
  appId: "1:652876548797:web:828f76061fb8ecd7e245d4",
  measurementId: "G-LZ9MCB8TGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);