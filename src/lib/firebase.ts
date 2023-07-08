import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDCjyqyy6nquAypTITP5waL0bEdB34MCDQ",
    authDomain: "svelte-linksite.firebaseapp.com",
    projectId: "svelte-linksite",
    storageBucket: "svelte-linksite.appspot.com",
    messagingSenderId: "861776107518",
    appId: "1:861776107518:web:bcebca5968fcdc4181d2af",
    measurementId: "G-59XF6XJH42"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
