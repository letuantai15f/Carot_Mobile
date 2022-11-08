import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: "AIzaSyDv8NgmBvo2SBI9FUZ6JPsBA0pl2ZDoI68",
  authDomain: "carot-6a8cb.firebaseapp.com",
  projectId: "carot-6a8cb",
  storageBucket: "carot-6a8cb.appspot.com",
  messagingSenderId: "364166710182",
  appId: "1:364166710182:web:9fab2ac3dbc7a60f6a0567",
  measurementId: "G-B41LMBM2CR"



};

// Initialize Firebase 
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} 

export { firebase };
export const auth=getAuth();
export const database =getFirestore();