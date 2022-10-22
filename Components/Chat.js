import React  from "react";
import {View,StyleSheet,Text} from 'react-native'

const Chat = () =>{
    return(
        <View style={styles.container}>
            <Text>Chat</Text>
        </View>
    );
}

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

export default Chat;