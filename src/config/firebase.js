// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDdqCOB2u119EzLqeVid2-UomTfjAybbGQ",
  authDomain: "quizer-10bb1.firebaseapp.com",
  projectId: "quizer-10bb1",
  storageBucket: "quizer-10bb1.appspot.com",
  messagingSenderId: "802692993338",
  appId: "1:802692993338:web:27a6c923556f0b21f30003"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
