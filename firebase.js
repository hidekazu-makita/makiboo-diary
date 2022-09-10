// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCJhVfsfhNR9DFnt43_t6cqTyqdOO-us4",
  authDomain: "makiboo-diary.firebaseapp.com",
  projectId: "makiboo-diary",
  storageBucket: "makiboo-diary.appspot.com",
  messagingSenderId: "772406904772",
  appId: "1:772406904772:web:1df9f399bd54b0dd330691",
  measurementId: "G-84SGCD48FH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if(typeof window !== 'undefined'){
  const analytics = getAnalytics(app);
}

export const db = getFirestore();