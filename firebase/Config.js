import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, onSnapshot, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDBk9udEdWIRsQI0hPrk7g5QRx_cfVx7y8",
    authDomain: "chat-90282.firebaseapp.com",
    projectId: "chat-90282",
    storageBucket: "chat-90282.appspot.com",
    messagingSenderId: "451854688143",
    appId: "1:451854688143:web:cd6ced594633cd3218b5fa"
  };
  
  const app = initializeApp(firebaseConfig);

  const firestore = getFirestore();

  const MESSAGES = 'messages';

  export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    onSnapshot,
    MESSAGES
  };