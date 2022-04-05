import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxKIHdtlWrjOVt3D9irfwn7EJ6F3hIsz4",
  authDomain: "duurzaam-huis.firebaseapp.com",
  projectId: "duurzaam-huis",
  storageBucket: "duurzaam-huis.appspot.com",
  messagingSenderId: "950838552853",
  appId: "1:950838552853:web:caaef4180b210590e0a11c",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export { auth, firestore };
