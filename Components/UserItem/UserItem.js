import React,{useState} from 'react'
import { View, Text, StyleSheet, Image,Pressable } from 'react-native';
import ChatRooms from '../../assets/dummy-data/ChatRooms';
import hinhdaidien from '../../assets/hinhdaidien.png'
import Chat from '../Chat';
import { useNavigation } from "@react-navigation/core";
import firebase from 'firebase/compat';



//danh sách chat
export default function UserItem({UserItem}){   

  const [isLoading, setIsLoading] = useState(true);
    const user=UserItem?.users[0];

    const navigation = useNavigation();

    const onPress = async () => {
        console.warn('pressed on',user.name)
        navigation.navigate("ChatRoom", { id: UserItem.id });
     
      };
  //lấy dữ liệu
  return(
    <Pressable onPress={onPress} style={styles.container}>

            <Image source={{uri:user?.image}} style={styles.hinhdaidienTN}/>
             {UserItem?.newMessage&&<View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{UserItem?.newMessage}</Text>
            </View>}
            <View style={styles.rightContainer} >
                <View style={styles.row}>
                <Text style={styles.tennguoinhan}>{user?.name}</Text>
                <Text style={styles.timetext}>{UserItem?.lastMessage?.time}</Text>
                </View>
               
                <Text numberOfLines={1} style={styles.timetext}>{UserItem?.lastMessage?.content}</Text>
            </View>
    </Pressable>

  );
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
        justifyContent:'space-between'
    },
    badgeText:{
        color:'white',
        fontSize:15,
    },
    tennguoinhan:{
        fontSize:18,
        fontWeight:'bold'
    },
    hinhdaidienTN:{
        height:70,
        width:70,
        borderRadius:50
    },
    timetext:{
        color:'grey'
    }
  });

