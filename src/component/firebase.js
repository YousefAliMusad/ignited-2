import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyDbyAexDAyumddnRcdf80YmH_qO8of72_c",
  authDomain: "ignited-2.firebaseapp.com",
  projectId: "ignited-2",
  storageBucket: "ignited-2.firebasestorage.app",
  messagingSenderId: "417555769620",
  appId: "1:417555769620:web:8ecb1b592ea3513b7b7a01",
  measurementId: "G-Y4JZPC9VS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };