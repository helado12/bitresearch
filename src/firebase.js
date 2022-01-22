
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Set the configuration for your app
const firebaseConfig = {
    apiKey: "AIzaSyBgYNoHMLiF0tfD47o9JJk81uzUCPWsA5I",
    authDomain: "bitresearch-database.firebaseapp.com",
    // For databases not in the us-central1 location, databaseURL will be of the
    // form https://[databaseName].[region].firebasedatabase.app.
    // For example, https://your-database-123.europe-west1.firebasedatabase.app
    databaseURL: "https://bitresearch-database-default-rtdb.europe-west1.firebasedatabase.app",
    storageBucket: "bitresearch-database.appspot.com"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);