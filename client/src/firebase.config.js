// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp9mZGCAQW-idCB9l4Ldf30ej0RE5jamk",
  authDomain: "educational-software-75918.firebaseapp.com",
  projectId: "educational-software-75918",
  storageBucket: "educational-software-75918.appspot.com",
  messagingSenderId: "868235333144",
  appId: "1:868235333144:web:e30854d61d0761db63bd6d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
