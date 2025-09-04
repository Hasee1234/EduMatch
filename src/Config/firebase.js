import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7VfPutcwXyYFl3ogUt33GPpN6QLossC8",
  authDomain: "edumatch-c064e.firebaseapp.com",
  projectId: "edumatch-c064e",
  storageBucket: "edumatch-c064e.firebasestorage.app",
  messagingSenderId: "361709578193",
  appId: "1:361709578193:web:c2e649cfb3e2953ea2e2f0",
  measurementId: "G-TLW6XGHLCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const auth=getAuth(app);