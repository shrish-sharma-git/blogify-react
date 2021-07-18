import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBm4Zs9hV3610Nja3ZdUJVhOVs-aNjKMEg",
    authDomain: "blogify-cce9b.firebaseapp.com",
    projectId: "blogify-cce9b",
    storageBucket: "blogify-cce9b.appspot.com",
    messagingSenderId: "820815428487",
    appId: "1:820815428487:web:285584fe51c96ededc7122",
    measurementId: "G-GF28RYL3J6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;