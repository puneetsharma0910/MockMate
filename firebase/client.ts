
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyA2IHoAGuJUqPKFBLHMbvC3VzOaoc3xHEk",
  authDomain: "mockmate-ba6c1.firebaseapp.com",
  projectId: "mockmate-ba6c1",
  storageBucket: "mockmate-ba6c1.firebasestorage.app",
  messagingSenderId: "88866777227",
  appId: "1:88866777227:web:8c98f1a32ba427f8da0c8e",
  measurementId: "G-078XDV0Y37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);