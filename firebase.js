// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdj4sZt-aCTdqVu1lQHK-qr8yn_QyzPVQ",
  authDomain: "inventoryapp-75049.firebaseapp.com",
  projectId: "inventoryapp-75049",
  storageBucket: "inventoryapp-75049.appspot.com",
  messagingSenderId: "992309283052",
  appId: "1:992309283052:web:1314d7388fbf517cd03dc9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp()
// const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const firestore = getFirestore(app);


export {firestore, app, auth}