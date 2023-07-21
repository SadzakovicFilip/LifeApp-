import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_APP_FIREBASE_KEY,
  authDomain: "health-app-filipsadzakovic.firebaseapp.com",
  projectId: "health-app-filipsadzakovic",
  storageBucket: "health-app-filipsadzakovic.appspot.com",
  messagingSenderId: "193592037794",
  appId: "1:193592037794:web:ac85218fba85862471e2fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()