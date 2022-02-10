import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC5cPxW1WoLnxA18uMeJY-3kPUSiqn6qaM",
    authDomain: "social-network-7fd16.firebaseapp.com",
    projectId: "social-network-7fd16",
    storageBucket: "social-network-7fd16.appspot.com",
    messagingSenderId: "501050437073",
    appId: "1:501050437073:web:0b6201e1eb1bb97995c4f0"
  };

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const db = firebaseApp.firestore()
const storage = firebaseApp.storage()

export { db, storage }