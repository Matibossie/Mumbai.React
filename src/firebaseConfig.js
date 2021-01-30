import firebase from "firebase/app";
import "firebase/firestore";


const miConfiguracion = {
    apiKey: "AIzaSyBf_31iIOB-cnkLoBbxjcaIg7J0mW45nWA",
    authDomain: "mumbai-react-8332b.firebaseapp.com",
    projectId: "mumbai-react-8332b",
    storageBucket: "mumbai-react-8332b.appspot.com",
    messagingSenderId: "329956722936",
    appId: "1:329956722936:web:b09b1e96d6473bd5da130d" 
}


const app = firebase.initializeApp(miConfiguracion);

export const firestore = firebase.firestore(app)