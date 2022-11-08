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































































// // import React,{useState,useEffect} from 'react'
// // import { View, Text, StyleSheet, Image,Pressable,SafeAreaView,FlatList} from 'react-native';
// // import ChatRooms from '../../assets/dummy-data/ChatRooms';
// // import hinhdaidien from '../../assets/hinhdaidien.png'
// // import Chat from '../Chat';
// // import { useNavigation } from "@react-navigation/core";
// // import firebase from 'firebase/compat';
// // import { List } from 'react-native-paper';



// // //danh sách chat
// // export default function UserItem({UserItem}){   

// //         // const {userData} = useSelector(state => state.User);
      
// //         const [search, setsearch] = useState('');
// //         const [allUser, setallUser] = useState([]);
// //         const [allUserBackup, setallUserBackup] = useState([]);
      
// //         useEffect(() => {
// //         //   getAllUser();
// //         }, []);
    
    


// //   const [isLoading, setIsLoading] = useState(true);
// //     const user=UserItem?.users[0];

// //     const navigation = useNavigation();

// //     const onPress = async () => {
// //         console.warn('pressed on',user.name)
// //         navigation.navigate("ChatRoom", { id: UserItem.id });
     
// //       };
// //   //lấy dữ liệu

// //   return (
// //     <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
// //       <Pressable onPress={onPress} style={styles.container}>

// // <Image source={{uri:user?.image}} style={styles.hinhdaidienTN}/>
// //    {UserItem?.newMessage&&<View style={styles.badgeContainer}>
// //      <Text style={styles.badgeText}>{UserItem?.newMessage}</Text>
// //   </View>}
// // <View style={styles.rightContainer} >
// //      <View style={styles.row}>
// //      <Text style={styles.tennguoinhan}>{user?.name}</Text>
// //      <Text style={styles.timetext}>{UserItem?.lastMessage?.time}</Text>
// //      </View>
    
// //   <Text numberOfLines={1} style={styles.timetext}>{UserItem?.lastMessage?.content}</Text>
// // </View>
// // </Pressable>
     
// //       {/* <FlatList
// //         showsVerticalScrollIndicator={false}
// //         keyExtractor={(item, index) => index.toString()}
// //         data={allUser}
// //         renderItem={renderItem}
        
// //       /> */}
      
// //     </SafeAreaView>
// //   );

// // }

// // const styles=StyleSheet.create({
// //     container:{
        
// //         flexDirection:"row",
// //         padding:10,
                
// //     },
// //     badgeContainer:{
// //         backgroundColor:'#3872E9',
// //         width:25,
// //         height:25,
// //         borderRadius:15,
// //         justifyContent:'center',
// //         alignItems:'center' ,
// //         position:'absolute',
// //         left:65,
// //         top:10,
// //         borderColor:'white'
  
// //     },
// //     rightContainer:{
// //         flex:1,
// //         justifyContent:'center',
// //         padding:15
// //     },
// //     row:{
// //         flexDirection:'row',
// //         justifyContent:'space-between'
// //     },
// //     badgeText:{
// //         color:'white',
// //         fontSize:15,
// //     },
// //     tennguoinhan:{
// //         fontSize:18,
// //         fontWeight:'bold'
// //     },
// //     hinhdaidienTN:{
// //         height:70,
// //         width:70,
// //         borderRadius:50
// //     },
// //     timetext:{
// //         color:'grey'
// //     }
// //   });

