// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, getDocs, collection} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCEyxsvKYFEkzJjQd6MpKXBgI9dXOaVvl8",
  authDomain: "proyect1-d8b7f.firebaseapp.com",
  projectId: "proyect1-d8b7f",
  storageBucket: "proyect1-d8b7f.appspot.com",
  messagingSenderId: "124504801948",
  appId: "1:124504801948:web:ca21af2dff20edd0a4e359",
  measurementId: "G-V7ZYJ6LQWY"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);
const analytics = getAnalytics(appFirestore);

export default appFirestore;