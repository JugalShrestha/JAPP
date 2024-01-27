import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOJLWVR4m31dZcAfTiwWPx60xx7tr6UIs",
  authDomain: "sxc-sandbox-hackathon.firebaseapp.com",
  projectId: "sxc-sandbox-hackathon",
  storageBucket: "sxc-sandbox-hackathon.appspot.com",
  messagingSenderId: "357996986170",
  appId: "1:357996986170:web:3efa0d88445460fd1f9a03",
  measurementId: "G-JNHL4KCBGY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);