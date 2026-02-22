// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// ... then your app initialization ...
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtFf98qDDWa4-DqdZKl95GGQoFTVOC60g",
  authDomain: "netflixgpt-68df8.firebaseapp.com",
  projectId: "netflixgpt-68df8",
  storageBucket: "netflixgpt-68df8.firebasestorage.app",
  messagingSenderId: "38006401015",
  appId: "1:38006401015:web:2d71fb68ffaecbd6a430f2",
  measurementId: "G-FF81JH5MZY"
};

// Initialize Firebase
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
 export const auth = getAuth();