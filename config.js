const { initializeApp } = require('firebase/app');
const { getFirestore, collection } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDNzd8AwteCqvLFMtU0EsdGUBTZXGdUkY0",
    authDomain: "fir-api-69cfa.firebaseapp.com",
    projectId: "fir-api-69cfa",
    storageBucket: "fir-api-69cfa.appspot.com",
    messagingSenderId: "1061782300681",
    appId: "1:1061782300681:web:89880e2bd2ed785c3970d8",
    measurementId: "G-HZ6KMRP895"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const User = collection(db, "Users");
module.exports = User;