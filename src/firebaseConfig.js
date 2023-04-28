// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtFZOsHTpACexvgFcr29vwKcuYblW56bw",
  authDomain: "linkedin-clone-b52d7.firebaseapp.com",
  projectId: "linkedin-clone-b52d7",
  storageBucket: "linkedin-clone-b52d7.appspot.com",
  messagingSenderId: "725213605954",
  appId: "1:725213605954:web:42dbd4eac9b45e47453ddb",
  measurementId: "G-PB2Q4MQ5GN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)

export { app, auth, firestore }