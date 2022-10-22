import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAjERo93JbdTPqcE0KPFFsWyXNhKhgQAtM",
	authDomain: "react-chat-97e0c.firebaseapp.com",
	projectId: "react-chat-97e0c",
	storageBucket: "react-chat-97e0c.appspot.com",
	messagingSenderId: "584283402017",
	appId: "1:584283402017:web:7eaab5b05a7022b15dd860"



};

// Initialize Firebase 
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} 

// login =async(user,success_callback,failed_callback) =>{
// 	await firebaseSDK
// 	            .auth()
// 				.signInWithEmailAndPassword()
// } 

// const firebaseSDK = firebase.auth()

export { firebase };