// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUWhTp2VcS21qEOESdc_mOUXvW8PcG4AA",
    authDomain: "login-auth-c9e32.firebaseapp.com",
    projectId: "login-auth-c9e32",
    storageBucket: "login-auth-c9e32.appspot.com",
    messagingSenderId: "560633409603",
    appId: "1:560633409603:web:a4b2aaa556b55a0a0a64f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app)
export default app;