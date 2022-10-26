// import React, {
//   useState,
//   useEffect,
//   useLayoutEffect,
//   useCallback
// } from 'react';
// import { TouchableOpacity, Text } from 'react-native';
// import { GiftedChat } from 'react-native-gifted-chat';
// import {
//   collection,
//   addDoc,
//   orderBy,
//   query,
//   onSnapshot
// } from 'firebase/firestore';
// import { signOut } from 'firebase/auth';
// import { auth, database } from '../config/firebaseSDK';
// import { useNavigation } from '@react-navigation/native';
// import { AntDesign } from '@expo/vector-icons';
// import colors from '../colors';
// import firebase from 'firebase/compat';

// export default  function Chat()  {  
//   const [messages, setMessages]  =  useState([]);
//   const navigation = useNavigation();
//   const onSignOut = () =>{signOut(auth).catch(error =>console.log(error))
//   };

//   useLayoutEffect(()=>{
//      const collectionRef =collection(database,'chats');
//      const q= query(collectionRef,orderBy('createdAt','desc'));

//      const unsubscribe = onSnapshot(q,snapshot=>{
//       console.log('Snapshot ');
//       setMessages(
//         snapshot.docs.map(doc =>({
//           _id:doc.id,
//           createdAt :doc.data().createdAt.toDate(),
//           text:doc.data().text,
//           user:doc.data().user
//         }))
//       )
//      });
//      return ()=>unsubscribe();
//   },[]);

//   useEffect(() => {
        
//     const collectionRef = collection(database, "chats");
//     const q = query(collectionRef, orderBy('createdAt', 'desc'));

//     const unsubscribe = onSnapshot(q, querySnapshot => {
//      setMessages(
//       querySnapshot.docs.map(doc => ({
//         _id: doc.data()._id,
//         createdAt: doc.data().createdAt.toDate(),
//         text: doc.data().text,
//         user: doc.data().user
//       }))
//     );
//   });
// return() =>unsubscribe();
// }, []);






//    const onSend = useCallback((messages = [])=>{
//     setMessages(previousMessages => GiftedChat.append(previousMessages,messages));
//     const {_id,createdAt,text,user} = messages[0];
//     addDoc(collection(database,'chats'),{
//       _id,
//       createdAt,
//       text,
//       user
//     });
//    },[]);

//   return (
//      <GiftedChat
//       messages={messages}
//       showAvatarForEveryMessage={true}
//       showUserAvatar={true}
//       onSend={messages => onSend(messages)}
//       user = {{
//         _id :auth?.currentUser?.email,
//         name:auth?.currentUser?.displayName,
//         // avatar:auth?.currentUser.photoURL,
//          avatar: 'https://vn-live-01.slatic.net/p/648f4a4b0070bfd6767f9403ad3df3c8.jpg'
//       }}
//       messagesContainerStyle={{
//             backgroundColor: '#fff'
//           }}
//           textInputStyle={{
//             backgroundColor: '#fff',
//             borderRadius: 20,
//           }}
//       />
//   )
// }








// import React, {
//   useState,
//   useEffect,
//   useLayoutEffect,
//   useCallback
// } from 'react';
// import { TouchableOpacity, Text } from 'react-native';
// import { GiftedChat } from 'react-native-gifted-chat';
// import {
//   collection,
//   addDoc,
//   orderBy,
//   query,
//   onSnapshot
// } from 'firebase/firestore';
// import { signOut } from 'firebase/auth';
// import { auth, database } from '../config/firebaseSDK';
// import { useNavigation } from '@react-navigation/native';
// import { AntDesign } from '@expo/vector-icons';
// import colors from '../colors';


// export default function Chat() {

//   const [messages, setMessages] = useState([]);
//   const navigation = useNavigation();

// const onSignOut = () => {
//     signOut(auth).catch(error => console.log('Error logging out: ', error));
//   };

//   useLayoutEffect(() => {
//       navigation.setOptions({
//         headerRight: () => (
//           <TouchableOpacity
//             style={{
//               marginRight: 10
//             }}
//             onPress={onSignOut}
//           >
//             <AntDesign name="logout" size={24} color={colors.gray} style={{marginRight: 10}}/>
//           </TouchableOpacity>
//         )
//       });
//     }, [navigation]);

 

//   const onSend = useCallback((messages = []) => {
//       setMessages(previousMessages =>
//         GiftedChat.append(previousMessages, messages)
//       );
//       // setMessages([...messages, ...messages]);
//       const { _id, createdAt, text, user } = messages[0];    
//       addDoc(collection(database, 'chats'), {
//         _id,
//         createdAt,
//         text,
//         user
//       });
//     }, []);

//     return (
//       // <>
//       //   {messages.map(message => (
//       //     <Text key={message._id}>{message.text}</Text>
//       //   ))}
//       // </>
//       <GiftedChat
//         messages={messages}
//         showAvatarForEveryMessage={true}
//         showUserAvatar={false}
//         onSend={messages => onSend(messages)}
//         messagesContainerStyle={{
//           backgroundColor: '#fff'
//         }}
//         textInputStyle={{
//           backgroundColor: '#fff',
//           borderRadius: 20,
//         }}
//         user={{
//           _id: auth?.currentUser?.email,
//           avatar: 'https://i.pravatar.cc/300'
//         }}
//       />
//     );
// }















// import React, { Component,useState, useLayoutEffect, useCallback} from 'react'
// import { Text, View ,StyleSheet,TextInput,Pressable,KeyboardAvoidingView,Platform, AsyncStorage} from 'react-native'
// import { SimpleLineIcons,Feather, MaterialCommunityIcons,AntDesign, Ionicons, } from "@expo/vector-icons";
// import {
//   collection,
//   addDoc,
//   orderBy,
//   query,
//   onSnapshot
// } from 'firebase/firestore';
// import { signOut } from 'firebase/auth';
// import { useNavigation } from '@react-navigation/native';
// import { sendMessage,recievedMessage } from '../Message/MessageConnect';
// import NavigationContainer from '@react-navigation/native';
// import firebase from 'firebase/compat';

// class MessageInput extends Component {
//   state={
//     message:"",
//     guestUid:"",
//     currentUId:"",
//     allMessages:[]
//   }
 
//   async  ComponentDIdMoun() {
//         const currentUId=await AsyncStorage.getItem('UID');
//         const guestUid=this.props.navigation.getParam('guestUid');
//         this.setState({currentUId:currentUId,guestUid:guestUid});
//         try {
//           firebase.database().ref('messages').child(currentUId).child(guestUid)
//           .on("value",(dataSnapshot)=>{
//             let message=[];
//             dataSnapshot.forEach((data)=>{
//               message.push({
//                 sendBy: data.val().message.sender,
//                 recieveBy: data.val().message.reciever,
//                 msg:data.val().message
//               });
//             })
//             this.setState({allMessages:message.reverse()});
          
//           })
//         } catch (error) {
//           alert(error);
//         }  
//   }

//    sendMessage = async () => {
//         if(this.state.message){
//           sendMessage(this.state.currentUId,this.state.guestUid,this.state.message ).then(()=>{
//             this.setState({message:''})
//           }).catch((err)=>{
//             alert(err)
//           })

//           recievedMessage(this.state.currentUId,this.state.guestUid,this.state.message).
//           then(()=>{
//             this.setState({message:''})
//           }).catch((err)=>{
//             alert(err)
//           })

//         }
//       };

//     render(){
//  return (


//         <View>
//            <KeyboardAvoidingView style={styles.root} behavior={Platform.OS==="android"?"padding":"height"} keyboardVerticalOffset={-290}>
//         <View style={styles.inputContainer}>
//             <SimpleLineIcons name='emotsmile' size={24} color="#595959" style={styles.icon}/>

//             <TextInput style={styles.input}
//              value={this.state.message}
//             onChangeText={(text)=>this.setState({message:text})}
//             placeholder="Signal message..."/>

//             <Feather name='camera' size={24} color='#595959'style={styles.icon}/>
//             <MaterialCommunityIcons name='microphone-outline' size={24} color='#595959'/>
//         </View>
//         <Pressable onPress={()=>this.sendMessage()} style={styles.buttonContainer}>
//            { this.state.message ? <Ionicons name='send' size={18} color='white'/>: <AntDesign name='plus' size={24} color='white'/>}
//         </Pressable>
//       </KeyboardAvoidingView>
//         </View>


     
//     )
//     }
   
//   }

//   const styles = StyleSheet.create({
//     root: {
//       padding: 10,
//       flexDirection:'row'
//     },
//     row: {
//       flexDirection: "row",
//     },
//     inputContainer: {
//       backgroundColor: "#f2f2f2",
//       flex: 1,
//       marginRight: 10,
//       borderRadius: 25,
//       borderWidth: 1,
//       borderColor: "#dedede",
//       alignItems: "center",
//       flexDirection: "row",
//       padding: 5,
//     },
//     input: {
//       flex: 1,
//       marginHorizontal: 5,
//     },
//     icon: {
//       marginHorizontal: 5,
//     },
//     buttonContainer: {
//       width: 40,
//       height: 40,
//       backgroundColor: "#3777f0",
//       borderRadius: 25,
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     buttonText: {
//       color: "white",
//       fontSize: 35,
//     },
  
//     sendImageContainer: {
//       flexDirection: "row",
//       marginVertical: 10,
//       alignSelf: "stretch",
//       justifyContent: "space-between",
//       borderWidth: 1,
//       borderColor: "lightgray",
//       borderRadius: 10,
//     },
//   });
// export default MessageInput
