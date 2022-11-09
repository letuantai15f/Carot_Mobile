import React, { useEffect, useState } from "react";
import { Text, View,StyleSheet ,SafeAreaView,TouchableOpacity,Image, FlatList} from "react-native";
import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
  } from 'firebase/firestore';
  import { auth, database } from '../config/firebaseSDK';
//   import firestore from '@react-native-firebase/firestore';
// import firebase from 'firebase/app';
import '@firebase/firestore';
import { Firestore } from "firebase/firestore";
import firebase from "firebase/compat";
import Chat from "../Components/Chat";


export default function ChatRoomScreen({user,navigation}){
    console.log('user:',user)
    const [users,setUsers]=useState(null)
    const [chats,setChats]=useState(null)
    const getUsers=async ()=>{
        const querySnap=await firebase.firestore().collection('users').get();
        const allusers=querySnap.docs.map(docSnap=>docSnap.data())
        console.log(allusers)
        setUsers(allusers)
    
        
    }
   
    useEffect(()=>{
        getUsers()
     
    },[])
    const RenderCard=({item})=>{
        return(
            <View>
               <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
       <TouchableOpacity style={styles.container} onPress ={()=>navigation.navigate('Chat')} >
            
         <View style={{width:'12%',alignItems:'center',justifyContent:'center'}}>
             <Image source={{uri:item.pic}} style={styles.hinhdaidienTN}/>
       </View>
         <View style={styles.rightContainer}>
             <View style={styles.row}>
             <Text style={styles.tennguoinhan}>{item.name}</Text>
        
             <Text style={styles.timetext}>7h14</Text>
             </View>
             <Text numberOfLines={1} style={styles.textlastime}>{item.text}</Text>
           
         </View>
     </TouchableOpacity>
     </SafeAreaView>
            </View>
        )
    }
    return(
        <View>
            <FlatList
            data={users}
            renderItem={({item})=>{return <RenderCard item={item}/>}}
            keyExtractor={(item)=>item.uid}
            
            />
        </View>
    //     <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    //     <TouchableOpacity style={styles.container} >
            
    //     <View style={{width:'12%',alignItems:'center',justifyContent:'center'}}>
    //         <Image source={{uri:'https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-71.jpg'}} style={styles.hinhdaidienTN}/>
    //     </View>
    //     <View style={styles.rightContainer}>
    //         <View style={styles.row}>
    //         <Text style={styles.tennguoinhan}>quang</Text>
        
    //         <Text style={styles.timetext}>11h40</Text>
    //         </View>
    //         <Text numberOfLines={1} style={styles.textlastime}>khong co gì</Text>
           
    //     </View>
    // </TouchableOpacity>
    // </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        
        flexDirection:"row",
        padding:10
                
    },
    badgeContainer:{
        backgroundColor:'#3872E9',
        width:25,
        height:25,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center' ,
        position:'absolute',
        left:65,
        top:10,
        borderColor:'white'
  
    },
    rightContainer:{
        flex:1,
        justifyContent:'center',
        padding:15
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10,
    },
    badgeText:{
        color:'white',
        fontSize:15,
    },
    tennguoinhan:{
        fontSize:18,
        fontWeight:'bold',
        
    },
    hinhdaidienTN:{
        height:70,
        width:70,
        borderRadius:50,
        marginLeft:10
       
    },
    timetext:{
        color:'grey'
    },
    textlastime:{
        color:'grey',
        marginLeft:10
    }
  });
