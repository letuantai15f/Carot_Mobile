import React, { Component,useState } from 'react'
import { Text, View ,StyleSheet,TextInput,Pressable,KeyboardAvoidingView,Platform} from 'react-native'
import {
    SimpleLineIcons,Feather, MaterialCommunityIcons,AntDesign, Ionicons,
  } from "@expo/vector-icons";

const MessageInput =()=> {
    const [message,setMessage]=useState('');
    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
    // const [image, setImage] = useState<string | null>(null);
    const [progress, setProgress] = useState(0);
    // const [recording, setRecording] = useState<Audio.Recording | null>(null);
    // const [soundURI, setSoundURI] = useState<string | null>(null);


    const sendMessage = async () => {
        // get all the users of this chatroom
        const authUser = await Auth.currentAuthenticatedUser();
    
        const users = (await DataStore.query(ChatRoomUser))
          .filter((cru) => cru.chatroom.id === chatRoom.id)
          .map((cru) => cru.user);
    
        console.log("users", users);
    
        // for each user, encrypt the `content` with his public key, and save it as a new message
        await Promise.all(
          users.map((user) => sendMessageToUser(user, authUser.attributes.sub))
        );
    
        resetFields();
      };

      
      const updateLastMessage = async (newMessage) => {
        DataStore.save(
          ChatRoom.copyOf(chatRoom, (updatedChatRoom) => {
            updatedChatRoom.LastMessage = newMessage;
          })
        );
      };


      const onPlusClicked = () => {
        console.warn("On plus clicked");
      };


    const onPress = () => {
        // if (image) {
        //   sendImage();
        // } else if (soundURI) {
        //   sendAudio();
        // } else if (message) {
        //   sendMessage();
        // } else {
        //   onPlusClicked();
        // }
      };

    return (
      <KeyboardAvoidingView style={styles.root} behavior={Platform.OS==="android"?"padding":"height"} keyboardVerticalOffset={-290}>
        <View style={styles.inputContainer}>
            <SimpleLineIcons name='emotsmile' size={24} color="#595959" style={styles.icon}/>

            <TextInput 
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Signal message..."
            />

            <Feather name='camera' size={24} color='#595959'style={styles.icon}/>
            <MaterialCommunityIcons name='microphone-outline' size={24} color='#595959'/>
        </View>
        <Pressable onPress={onPress} style={styles.buttonContainer}>
           { message ? <Ionicons name='send' size={18} color='white'/>: <AntDesign name='plus' size={24} color='white'/>}
        </Pressable>
      </KeyboardAvoidingView>
    )
  }
  const styles = StyleSheet.create({
    root: {
      padding: 10,
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
export default MessageInput
