import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBIrwuaXMaa7YEyhwoGWIfrS3EIF7qErz0",
    authDomain: "github-2024.firebaseapp.com",
    projectId: "github-2024",
    storageBucket: "github-2024.appspot.com",
    messagingSenderId: "741884537251",
    appId: "1:741884537251:web:01f6fbcb55ecd5f2039216"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, app, firestore, storage };