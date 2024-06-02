// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSPYQUF902pQ1CUndZEHFJgcPQm4BUC_s",
  authDomain: "exmae-12.firebaseapp.com",
  projectId: "exmae-12",
  storageBucket: "exmae-12.appspot.com",
  messagingSenderId: "1027382884536",
  appId: "1:1027382884536:web:0c3473112c419d7624dc4d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;