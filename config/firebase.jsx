// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT1ZZJcVy4N0zUIKL2pZVihgCKrfANVqA",
  authDomain: "quaint-c9b34.firebaseapp.com",
  projectId: "quaint-c9b34",
  storageBucket: "quaint-c9b34.firebasestorage.app",
  messagingSenderId: "353736071696",
  appId: "1:353736071696:web:27b0ec4f043ff603d68895",
  measurementId: "G-WHNY5VG96Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
