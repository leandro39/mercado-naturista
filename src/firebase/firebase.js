import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDli0JB9tWnDw8epBHWKo8D7vOfIhEyFoE",
  authDomain: "mercado-naturista.firebaseapp.com",
  databaseURL: "https://mercado-naturista.firebaseio.com",
  projectId: "mercado-naturista",
  storageBucket: "mercado-naturista.appspot.com",
  messagingSenderId: "353201209815",
  appId: "1:353201209815:web:2b8c2113d7960f4b090b92",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
