import React from 'react';  
import { GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends React.Component {  
  render() {
    return <GiftedChat />;
  }
}
////************* */
// import React from 'react';
// import { GiftedChat } from 'react-native-gifted-chat'; 

// import firebaseSDK from '../config/firebaseSDK';

// export default class Chat extends React.Component {
// 	static navigationOptions = ({ navigation }) => ({
// 		title: (navigation.state.params || {}).name || 'Chat!'
// 	});

// 	state = {
// 		messages: []
// 	};

// 	get user() {
// 		return {
// 			name: this.props.navigation.state.params.name,
// 			email: this.props.navigation.state.params.email,
// 			avatar: this.props.navigation.state.params.avatar,
// 			id: firebaseSDK.uid,
// 			_id: firebaseSDK.uid
// 		};
// 	}

// 	render() {
// 		return (
// 			<GiftedChat
// 				messages={this.state.messages}
// 				onSend={firebaseSDK.send}
// 				user={this.user}
// 			/>
// 		);
// 	}

// 	componentDidMount() {
// 		firebaseSDK.refOn(message =>
// 			this.setState(previousState => ({
// 				messages: GiftedChat.append(previousState.messages, message)
// 			}))
// 		);
// 	}
// 	componentWillUnmount() {
// 		firebaseSDK.refOff();
// 	}
// }
//******************************************** */
// import React, { useState, useEffect, useCallback } from 'react'
// import { GiftedChat } from 'react-native-gifted-chat'
// import AsyncStorage from '@react-native-community/async-storage'
// import firestore from '@react-native-firebase/firestore';
// import { StyleSheet, TextInput, View, YellowBox, Button } from 'react-native'
// import * as firebase from 'firebase'
// import 'firebase/firestore'

// const firebaseConfig = {
//     apiKey: "AIzaSyC0LmbWuqi5In7So5tiI8_Vjm7KDGTDyEY",
//         authDomain: "reactnative-chat-b3b09.firebaseapp.com",
//         projectId: "reactnative-chat-b3b09",
//         storageBucket: "reactnative-chat-b3b09.appspot.com",
//         messagingSenderId: "831143343016",
//         appId: "1:831143343016:web:920ed41ecd6eaf270fa39d"
// }

// if (firebase.apps.length === 0) {
//     firebase.initializeApp(firebaseConfig)
// }

// YellowBox.ignoreWarnings(['Setting a timer for a long period of time'])

// const db = firebase.firestore()
// const chatsRef = db.collection('chats')

// export default function Chat() {
//     const [user, setUser] = useState(null)
//     const [name, setName] = useState('')
//     const [messages, setMessages] = useState([])

//     useEffect(() => {
//         readUser()
//         const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
//             const messagesFirestore = querySnapshot
//                 .docChanges()
//                 .filter(({ type }) => type === 'added')
//                 .map(({ doc }) => {
//                     const message = doc.data()
//                     //createdAt is firebase.firestore.Timestamp instance
//                     //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
//                     return { ...message, createdAt: message.createdAt.toDate() }
//                 })
//                 .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
//             appendMessages(messagesFirestore)
//         })
//         return () => unsubscribe()
//     }, [])

//     const appendMessages = useCallback(
//         (messages) => {
//             setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
//         },
//         [messages]
//     )

//     async function readUser() {
//         const user = await AsyncStorage.getItem('user')
//         if (user) {
//             setUser(JSON.parse(user))
//         }
//     }
//     async function handlePress() {
//         const _id = Math.random().toString(36).substring(7)
//         const user = { _id, name }
//         await AsyncStorage.setItem('user', JSON.stringify(user))
//         setUser(user)
//     }
//     async function handleSend(messages) {
//         const writes = messages.map((m) => chatsRef.add(m))
//         await Promise.all(writes)
//     }

//     if (!user) {
//         return (
//             <View style={styles.container}>
//                 <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
//                 <Button onPress={handlePress} title="Enter the chat" />
//             </View>
//         )
//     }
//     return <GiftedChat messages={messages} user={user} onSend={handleSend} />
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 30,
//     },
//     input: {
//         height: 50,
//         width: '100%',
//         borderWidth: 1,
//         padding: 15,
//         marginBottom: 20,
//         borderColor: 'gray',
//     },
// })

//***************************************************************************** */
// import React  from "react";
// import {View,StyleSheet,Text} from 'react-native'

// const Chat = () =>{
//     return(
//         <View style={styles.container}>
//             <Text>Chat</Text>
//         </View>
//     );
// }

// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:"center",
//         alignItems:"center"
//     },
// });

// export default Chat;