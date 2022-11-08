// import { StatusBar } from "expo-status-bar";
// import React ,{useState,useEffect} from "react";
// import { StyleSheet,Text,View,YellowBox } from "react-native";
// import * as firebase from 'firebase'
// import 'firebase/firestore'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { initializeApp } from "firebase/app";
// import { Firestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyC0LmbWuqi5In7So5tiI8_Vjm7KDGTDyEY",
//     authDomain: "reactnative-chat-b3b09.firebaseapp.com",
//     projectId: "reactnative-chat-b3b09",
//     storageBucket: "reactnative-chat-b3b09.appspot.com",
//     messagingSenderId: "831143343016",
//     appId: "1:831143343016:web:920ed41ecd6eaf270fa39d"
//   };

// const app=initializeApp(firebaseConfig);

// export default function Chat(){ 
//     const[use,setUser]= useState(null)
//     useEffect(()=>{
//         readUser();
//     },[])

//     async function readUser(){
//         const user = await AsyncStorage.getItem('user')
//         if(user){
//             setUser(JSON.parse(user))
//         }
//     }
     
//     if(!user){
//         return <View style={StyleSheet.container}></View>
//     }
//     return (
//         <View style={styles.container}>
//             <Text>We have an user</Text>
//             <StatusBar style="auto"/>
//         </View>
//     )
// }

// const styles= StyleSheet.create({
//      container :{
//         flex:1,
//         backgroundColor:"#fff",
//         alignItems:'center',
//         justifyContent:'center',
//         padding:30
//      }
// })