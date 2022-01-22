import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
    apiKey: 'AIzaSyBgYNoHMLiF0tfD47o9JJk81uzUCPWsA5I',
    authDomain: 'bitresearch-database.firebaseapp.com',
    projectId: 'bitresearch-database'
});

const db = getFirestore();


// get data from firebase collection
import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "researchers"));
querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
});