// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCotcVFAnJKirebAkdohPrtisrPijmQqZc",
    authDomain: "otpverification-fcb2a.firebaseapp.com",
    projectId: "otpverification-fcb2a",
    storageBucket: "otpverification-fcb2a.appspot.com",
    messagingSenderId: "81975093726",
    appId: "1:81975093726:web:4229b30762b1e9b5d5154f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db=getFirestore(app)
export default app;