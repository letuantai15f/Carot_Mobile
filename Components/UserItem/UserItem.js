// import React,{useState,useEffect, Component} from 'react'
// import { View, Text, StyleSheet, Image,Pressable,SafeAreaView,FlatList, TouchableOpacity,} from 'react-native';
// // import ChatRooms from '../../assets/dummy-data/ChatRooms';
// import hinhdaidien from '../../assets/hinhdaidien.png'
// import Chat from '../Chat';
// import { useNavigation } from "@react-navigation/core";
// import firebase from 'firebase/compat';
// import { List } from 'react-native-paper';

// class UserItem extends Component{
//     state={
//         allUsers:[]
//     }
//     async componentDidMount(){
//         try {
//             await firebase.database().ref('users')
//             .on("value", (datasnapshot) => {
//                 const uuid = firebase.auth().currentUser.uid;
//                 console.log('uuid',uuid);
//                 let users=[];
//                 datasnapshot.forEach((child)=>{
//                     if(child.val().uuid===uuid){

//                     }else{
//                         users.push({
//                             usersName:child.val().name,
//                             uuid:child.val().uuid
//                         });
//                     }
//                 });
//                 this.setState({allUsers:users});
//             })
//         } catch (error) {
//             alert(error)
//         }
//     }
//     render(){
//         return(
//             <View style={{flex:1,backgroundColor:'#cccc'}}>
//                 <FlatList 
//                 alwaysBounceVertical={false}
//                 data={this.state.allUsers}
//                 style={{padding:5}}
//                 keyExtractor={(_,index)=>index.toString()}
//                 renderItem={({item})=>(
                    
//                     <TouchableOpacity style={{flexDirection:'row'}}>
//                         <View style={{width:'12%',alignItems:'center',justifyContent:'center'}}>
//                             <Image source={{uri:'https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-71.jpg'}} style={{ height: 50, width: 50, borderRadius: 25 }}/>
//                         </View>
//                         <View style={{width:'88%',alignItems:'flex-start',justifyContent:'center',marginLeft:10}}>
//                             <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>{item.usersName}</Text>
//                         </View>
//                     </TouchableOpacity>
//                       )}
//                 />
//             </View>
//         )
//     }
// }
// export default UserItem;