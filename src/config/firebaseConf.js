// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDkvpd8RMxsjP1s86u4cqM8DDiov2CxjAE",
  authDomain: "project-planner-7bc26.firebaseapp.com",
  projectId: "project-planner-7bc26",
  storageBucket: "project-planner-7bc26.appspot.com",
  messagingSenderId: "255003934136",
  appId: "1:255003934136:web:adf843db605c096a55e34d",
  measurementId: "G-F169WG07VB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
