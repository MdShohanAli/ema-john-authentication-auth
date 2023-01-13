// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZT9YIja-46cGPDTf5zaFf09U7MDMiQz4",
    authDomain: "ema-john-authentication-ce53e.firebaseapp.com",
    projectId: "ema-john-authentication-ce53e",
    storageBucket: "ema-john-authentication-ce53e.appspot.com",
    messagingSenderId: "301027684368",
    appId: "1:301027684368:web:0108c12b74fa702afe1a95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;

