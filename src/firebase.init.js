// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqUrU0YU-YzYFwk2P1u-Mdm1iBG4vCTTE",
  authDomain: "my-todo-91f59.firebaseapp.com",
  projectId: "my-todo-91f59",
  storageBucket: "my-todo-91f59.appspot.com",
  messagingSenderId: "514522905402",
  appId: "1:514522905402:web:5cd8b593fcc0a91a272e03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
