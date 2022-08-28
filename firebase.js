// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvB_FPb84e0f0lG1GyOHBn5Vl7Q21cIxE",
  authDomain: "leetcodeflashcard.firebaseapp.com",
  projectId: "leetcodeflashcard",
  storageBucket: "leetcodeflashcard.appspot.com",
  messagingSenderId: "878608814560",
  appId: "1:878608814560:web:5cba9151dde52612c9db85",
  measurementId: "G-7H0FNE26SX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);