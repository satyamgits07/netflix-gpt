
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmvXIE4V_4kqm9LNNRyzx31oyEwpBVJ04",
  authDomain: "satyamnetflixgpt.firebaseapp.com",
  projectId: "satyamnetflixgpt",
  storageBucket: "satyamnetflixgpt.appspot.com",
  messagingSenderId: "921708028203",
  appId: "1:921708028203:web:3dad4a905a926e48a0a56e",
  measurementId: "G-GJ3KTZWYP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();