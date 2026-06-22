import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyChx8NpRj42elMjuXzLwfUU9R9EII7-Sj4",
  authDomain: "movie-app-bc3a9.firebaseapp.com",
  projectId: "movie-app-bc3a9",
  storageBucket: "movie-app-bc3a9.firebasestorage.app",
  messagingSenderId: "908599791675",
  appId: "1:908599791675:web:a431757f9f894eca290c1e",
  measurementId: "G-L3XHRM4JW2"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);