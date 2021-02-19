  
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDH1sHU5RA3Qc_tz0OBrK7iwOMI8do36rI",
  authDomain: "travelguide-118d8.firebaseapp.com",
  projectId: "travelguide-118d8",
  storageBucket: "travelguide-118d8.appspot.com",
  messagingSenderId: "880090726221",
  appId: "1:880090726221:web:7def32af28eaf1e878c104",
  measurementId: "G-5M58CDKS54"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}