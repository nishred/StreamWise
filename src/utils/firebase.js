// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDygWor7UPVMX-0raaxdRq03_Cu447gYlg",
  authDomain: "streamwise-d62bd.firebaseapp.com",
  projectId: "streamwise-d62bd",
  storageBucket: "streamwise-d62bd.firebasestorage.app",
  messagingSenderId: "227422429271",
  appId: "1:227422429271:web:a44a764c53b2c24df1c312",
  measurementId: "G-WWCCEK3W28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
