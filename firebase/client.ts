
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2IHoAGuJUqPKFBLHMbvC3VzOaoc3xHEk",
  authDomain: "mockmate-ba6c1.firebaseapp.com",
  projectId: "mockmate-ba6c1",
  storageBucket: "mockmate-ba6c1.firebasestorage.app",
  messagingSenderId: "88866777227",
  appId: "1:88866777227:web:8c98f1a32ba427f8da0c8e",
  measurementId: "G-078XDV0Y37"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)