// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAbrMzU4axWrStt0FT9yJB3-vNQ38KArGw",
//     authDomain: "new-85faf.firebaseapp.com",
//     projectId: "new-85faf",
//     storageBucket: "new-85faf.appspot.com",
//     messagingSenderId: "493698650494",
//     appId: "1:493698650494:web:8ec7f3011b6bdfd71ce32f"
// };

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