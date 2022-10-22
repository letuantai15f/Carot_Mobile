import React  from "react";
import {View,StyleSheet,Text,Image, ScrollView,FlatList} from 'react-native'

import ChatRoomItem from '../Components/ChatRoomItem/ChatRoomItem'
import chatRoomsData from '../assets/dummy-data/ChatRooms';


export default function Chat(){
    return(
        <View style={styles.page}>   
            <FlatList
            data={chatRoomsData}
            renderItem={({item})=><ChatRoomItem chatRoom={item}/>}
            showsVerticalScrollIndicator={false}
            />
           
       </View>
    );
}

const styles=StyleSheet.create({
    page:{
        backgroundColor:'white',
        flex:1
    }
});
