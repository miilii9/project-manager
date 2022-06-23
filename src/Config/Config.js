import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOnIHlbIxjdj7kGeyTxJNKqrbmyZoPpPU",
  authDomain: "dojo-f8b20.firebaseapp.com",
  projectId: "dojo-f8b20",
  storageBucket: "dojo-f8b20.appspot.com",
  messagingSenderId: "840834028282",
  appId: "1:840834028282:web:ac935bdf45ba05deed6f43",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timeStamp = firebase.firestore.Timestamp();
export { projectFirestore, projectAuth, timeStamp };
