import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtWiaQfmt3To6wJZjhJrHjezTyzDJokdY",
  authDomain: "srisri-e1fce.firebaseapp.com",
  projectId: "srisri-e1fce",
  storageBucket: "srisri-e1fce.appspot.com",
  messagingSenderId: "585518357198",
  appId: "1:585518357198:web:b5639beac399d557398e9f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();