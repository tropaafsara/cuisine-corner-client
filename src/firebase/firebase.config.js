// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQVYRbPN01pDg0pbmCHK_JqwLN71U7sgw",
  authDomain: "chef-recipe-hunter-8607e.firebaseapp.com",
  projectId: "chef-recipe-hunter-8607e",
  storageBucket: "chef-recipe-hunter-8607e.appspot.com",
  messagingSenderId: "12949349109",
  appId: "1:12949349109:web:7cec53e8a90d89a3749bbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;