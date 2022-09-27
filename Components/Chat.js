import React  from "react";
import {View,StyleSheet,Text} from 'react-native'

const Chat = () =>{
    return(
        <View style={styles.container}>
            <Text>Chat</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
});

export default Chat;