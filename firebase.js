// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh-ORvdxZ158mu60v20X1PzZrhMBoKB18",
  authDomain: "pantryapp-7e679.firebaseapp.com",
  projectId: "pantryapp-7e679",
  storageBucket: "pantryapp-7e679.appspot.com",
  messagingSenderId: "1091609597363",
  appId: "1:1091609597363:web:0f4cdd3370eae91eaee7c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


export {firestore}