import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDS8M1CuFI9RSVp67RiMR0HPpzZXaLvvH0',
  authDomain: 'procritique-ce5f7.firebaseapp.com',
  projectId: 'procritique-ce5f7',
  storageBucket: 'procritique-ce5f7.appspot.com',
  messagingSenderId: '756895094951',
  appId: '1:756895094951:web:dfd4c4a6342d7222be6382',
  measurementId: 'G-HCBRLDL575',
  databaseURL: 'https://procritique-ce5f7-default-rtdb.firebaseio.com',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { app, firestore, auth, database, storage, collection, doc, setDoc, getDoc, signInWithEmailAndPassword, createUserWithEmailAndPassword };
