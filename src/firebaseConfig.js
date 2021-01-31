import firebase from "firebase/app";
import "firebase/firestore";


const miConfiguracion = {
    apiKey: "AIzaSyAQ69i0sMfwLa66OOVzQrUqaK3VBAEI1_I",
    authDomain: "mumbai-87fd1.firebaseapp.com",
    projectId: "mumbai-87fd1",
    storageBucket: "mumbai-87fd1.appspot.com",
    messagingSenderId: "975758460622",
    appId: "1:975758460622:web:b707a31965514d34fdf29f"
}


const app = firebase.initializeApp(miConfiguracion);

export const firestore = firebase.firestore(app)