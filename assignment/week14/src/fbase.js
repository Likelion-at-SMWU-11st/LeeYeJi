import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_HW_APIKEY,
    authDomain: process.env.REACT_APP_HW_AUTHDOMAIN,
    projectId: process.env.REACT_APP_HW_PROJECTID,
    storageBucket: process.env.REACT_APP_HW_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_HW_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_HW_APPID
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export {
  firebaseApp,
  firebaseAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
};