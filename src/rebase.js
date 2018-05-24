import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDxePri8QOUvm2hMbGCKjLeyG7rI-q90UI",
    authDomain: "noteherder-dd790.firebaseapp.com",
    databaseURL: "https://noteherder-dd790.firebaseio.com",
    projectId: "noteherder-dd790",
    storageBucket: "noteherder-dd790.appspot.com",

    
    messagingSenderId: "875679986580"
});

const db = firebase.database(app);
const base = Rebase.createClass(db);

export default base;