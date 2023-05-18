// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuoJbThXs_l9mjNSel6DyP2o0JYw8FiNg",
  authDomain: "toy-haven-ville.firebaseapp.com",
  projectId: "toy-haven-ville",
  storageBucket: "toy-haven-ville.appspot.com",
  messagingSenderId: "477151285409",
  appId: "1:477151285409:web:0b6f4fd039e6d31f4860e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;