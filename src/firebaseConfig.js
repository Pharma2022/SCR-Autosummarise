
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKXECYk76igB05Bhjlg6uXG3tiLiWJJho",
  authDomain: "gps-list-36798.firebaseapp.com",
  projectId: "gps-list-36798",
  storageBucket: "gps-list-36798.appspot.com",
  messagingSenderId: "68856135481",
  appId: "1:68856135481:web:cf586973b75d8f8a4b32e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)