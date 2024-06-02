import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Para Firestore
import { getDatabase } from "firebase/database"; // Para Realtime Database
import { getAuth } from "firebase/auth"; // Para la autenticación de Firebase

const firebaseConfig = {
  apiKey: "AIzaSyC0hLxlzuoqskAVBLOXKCOZR2HNTIWE-S8",
  authDomain: "leaguevids.firebaseapp.com",
  projectId: "baseleague-58ea1",
  storageBucket: "base_league",
  messagingSenderId: "823580816385",
  appId: "1:823580816385:web:d33228f809105ba4b4bc00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore reference
const db = getFirestore(app);

// Realtime Database reference
const database = getDatabase(app);

// Auth reference
const auth = getAuth(app);

export { db, database, auth };
