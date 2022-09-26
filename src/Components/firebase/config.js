import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC3gvCdrlgNDzH51xwWuJi-463eVggzhF0",
    authDomain: "connect-pets.firebaseapp.com",
    projectId: "connect-pets",
    storageBucket: "connect-pets.appspot.com",
    messagingSenderId: "140966161503",
    appId: "1:140966161503:web:63baddaa3342182e663fea",
    measurementId: "G-F991JPGVPT"
};



export default firebase.initializeApp(firebaseConfig);
