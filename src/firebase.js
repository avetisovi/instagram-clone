// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAvwQTwEBwvvKe_pZjAAvPbT01XrB29XY",
  authDomain: "instagram-clone-bffad.firebaseapp.com",
  projectId: "instagram-clone-bffad",
  storageBucket: "instagram-clone-bffad.appspot.com",
  messagingSenderId: "396897856208",
  appId: "1:396897856208:web:936258d93ab153de1f0cd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

