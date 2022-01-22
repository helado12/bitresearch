import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
    apiKey: 'AIzaSyBgYNoHMLiF0tfD47o9JJk81uzUCPWsA5I',
    authDomain: 'bitresearch-database.firebaseapp.com',
    projectId: 'bitresearch-database'
});

const db = getFirestore();