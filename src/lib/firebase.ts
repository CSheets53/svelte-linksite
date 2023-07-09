import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, connectAuthEmulator, type User, onAuthStateChanged } from "firebase/auth";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { writable } from "svelte/store";


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

if (import.meta.env.MODE === 'development') {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
    connectStorageEmulator(storage, "localhost", 9099);
}

/**
 * @returns a store with the current firebase user
 */
function userStore() {
    let unsubscribe: () => void;

    if (!auth || !globalThis.window) {
        console.warn("Auth isn't initialized or not in browser");
        const { subscribe } = writable<User | null>(null);

        return {
            subscribe,
        }
    }

    const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
        unsubscribe = onAuthStateChanged(auth, (user) => {
            set(user);
        });

        return () => unsubscribe();
    });

    return {
        subscribe,
    };
}

export const user = userStore();
