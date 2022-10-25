import React from 'react'
import { Text, View ,StyleSheet} from 'react-native';
const blue ='#3777f0';
const grey='lightgrey';

const myID= 'u1';

const Message = ({message}) => {
    const isMe=message?.user?.id === myID;
    return (
      <View style={[styles.container,isMe?styles.Leftcontainer:styles.Rightcontainer]}>

        <Text style={{color:isMe ?'black':'white'}}>{message?.content}</Text>
      </View>
    )
}
const styles =StyleSheet.create({
container:{
    backgroundColor: '#3777f0',
    padding:10,
    margin:10,
    borderRadius:10,
    maxWidth:'75%'
},
Leftcontainer:{
backgroundColor:'blue',
marginLeft:10,
marginRight:'auto'
},
Rightcontainer:{
  backgroundColor:'grey',
  marginLeft:'auto',
  marginRight:10
}
});

export default Message