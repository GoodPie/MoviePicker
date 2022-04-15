// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz5tbyOk21RhUlu8L7yu9FySK-FC50j8w",
  authDomain: "movie-picker-cc0b9.firebaseapp.com",
  databaseURL: "https://movie-picker-cc0b9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "movie-picker-cc0b9",
  storageBucket: "movie-picker-cc0b9.appspot.com",
  messagingSenderId: "226643890577",
  appId: "1:226643890577:web:69fb2e89545b3683ba8a30",
  measurementId: "G-5CLG9E1YLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);
