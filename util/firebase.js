import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyBS2W_YEGtUBwNhMfYh4Iae-pTLxolyGW8",
  authDomain: "allinone-44d40.firebaseapp.com",
  projectId: "allinone-44d40",
  storageBucket: "allinone-44d40.appspot.com",
  messagingSenderId: "609683245351",
  appId: "1:609683245351:web:40f1b58e4868eb94dcc102",
  measurementId: "G-FKQ9XSR04V",
};
initializeApp(firebaseConfig);
export const db = getFirestore();
