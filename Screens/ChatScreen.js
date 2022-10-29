
import React, { Component,useState, useLayoutEffect, useCallback} from 'react'
import { Text, View ,StyleSheet,TextInput,Pressable,KeyboardAvoidingView,Platform, AsyncStorage,FlatList,TouchableOpacity} from 'react-native'
import { SimpleLineIcons,Feather, MaterialCommunityIcons,AntDesign, Ionicons, } from "@expo/vector-icons";
import {collection, addDoc,orderBy, query,onSnapshot
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { SendMessage,RecieveMessage } from './MessageConnect';
import NavigationContainer from '@react-navigation/native';
import { firebase } from '../config/firebaseSDK';

class ChatScreen extends Component {
  state = {
    message: '',
    guestUid: '',
    currentUid: '',
    allMessages: [],
    image: ''
}
  async componentDidMount() {
    const currentUid = await AsyncStorage.getItem('UID');
    const guestUid = this.props.navigation.getParam('guestUid');
    this.setState({ currentUid: currentUid, guestUid: guestUid });
    try {
        firebase.database().
            ref('messages').
            child(currentUid).
            child(guestUid).
            on("value", (dataSnapshot) => {
                let message = [];

                dataSnapshot.forEach((data) => {
                    message.push({
                        sendBy: data.val().messege.sender,
                        recieveBy: data.val().messege.reciever,
                        msg: data.val().messege.msg,
                        image: data.val().messege.image,
                        date: data.val().messege.date,
                        time: data.val().messege.time,
                    });
                    console.log('fff', data.val().messege.image)
                })
                this.setState({ allMessages: message.reverse() });
                console.log('allMessages', this.state.allMessages)
            })
    } catch (error) {
        alert(error);
    }
}

  sendMessage = async () => {
    if (this.state.message) {
      SendMessage(this.state.currentUid, this.state.guestUid, this.state.message, "").
            then((res) => {
              console.log('erfd')
              console.log(this.state.currentUid);
              console.log(this.state.guestUid);
                console.log(res);
                this.setState({ message: '' })
            }).catch((err) => {
                alert(err)
            })

            RecieveMessage(this.state.currentUid, this.state.guestUid, this.state.message, "").
            then((res) => {
                console.log(res);
                this.setState({ message: '' })
            }).catch((err) => {
                alert(err)
            })
    }
}

    render(){
 return (
  <View style={{flex:1}}>
   
        <FlatList
  inverted
  style={{  backgroundColor:'#cccc' }}
  data={this.state.allMessages}
  keyExtractor={(_, index) => index.toString()}
  renderItem={({ item }) => (
    <View style={{ marginVertical: 5, maxWidth: Dimensions.get('window').width / 2 + 10, alignSelf: this.state.currentUid === item.sendBy ? 'flex-end' : 'flex-start' }}>
        <View style={{ borderRadius: 20, backgroundColor: this.state.currentUid === item.sendBy ? '#fff' : '#ccc' }}>
            {item.image === "" ? <Text style={{ padding: 10, fontSize: 16, fontWeight: 'bold' }}>
                {item.msg} {"   "} <Text style={{ fontSize: 12 }}>{item.time}</Text>
            </Text> :
                <View>
                    <Image source={{ uri: item.image }} style={{ width: Dimensions.get('window').width / 2 + 10, height: 150, resizeMode: 'stretch', borderRadius: 30 }} />
                    <Text style={{ fontSize: 12,position:'absolute',bottom:5,right:5 }}>{item.time}</Text>
                </View>
            }
        </View>
    </View>
)}
/>
          <View style={{ bottom: 0, height: 50, width: '100%', position: 'absolute', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ width: '10%', justifyContent: 'center', alignItems: 'center', marginRight: 5 }} onPress={() => this.openGallery()}>
                        <Ionicons name="camera" size={30} color="#fff" />
                    </TouchableOpacity>
                    <View style={{ width: '75%', justifyContent: 'center' }}>
                        <TextInput value={this.state.message} onChangeText={(text) => this.setState({ message: text })} placeholder="Enter Message" placeholderTextColor="#000" style={{ height: 40, borderRadius: 20, backgroundColor: '#ccc' }} />
                    </View>
                    <TouchableOpacity style={{ width: '10%', justifyContent: 'center', alignItems: 'center', marginLeft: 5 }} onPress={() => this.sendMessage()}>
                        <Ionicons name="send" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
                
            </View>
         )
    }
   
  }

  const styles = StyleSheet.create({
    root: {
      margin:10,
      flexDirection:'row'
    },
    row: {
      flexDirection: "row",
    },
    inputContainer: {
      backgroundColor: "#f2f2f2",
      flex: 1,
      marginRight: 10,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: "#dedede",
      alignItems: "center",
      flexDirection: "row",
      padding: 5,
    },
    input: {
      flex: 1,
      marginHorizontal: 5,
    },
    icon: {
      marginHorizontal: 5,
    },
    buttonContainer: {
      width: 40,
      height: 40,
      backgroundColor: "#3777f0",
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: "white",
      fontSize: 35,
    },
  
    sendImageContainer: {
      flexDirection: "row",
      marginVertical: 10,
      alignSelf: "stretch",
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: "lightgray",
      borderRadius: 10,
    },
  });
export default ChatScreen
