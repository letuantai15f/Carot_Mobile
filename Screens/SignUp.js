import React  , {useState } from 'react';
import {View, StyleSheet,Text ,TouchableOpacity,TextInput} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config/firebaseSDK';
// import Signup from '../Screens/SignUp';
import AppNavigator from '../navigation/AppNavigator';
// import Login from './Login';


const SignUp = ({navigation}) => {
  // const navigation = useNavigation()   
  const [name,setName] = useState('')
  const [email,setEmail] = useState(' ')
  const [password,setPassword] = useState(' ')
   

  const signupUser = async(email,password) =>{
    try {
      await firebase.auth().createUserWithEmailAndPassword(email,password) 
            
      .then(()=> alert('Đăng kí tài khoản thành công'),
      navigation.navigate(AppNavigator))
    } catch (error){
      alert('Đăng kí tài khoản không thành công')
    }
  } 
  
  return (
    <View style={styles.container}>
       
        <View style={{marginTop:40}}>

		      <TextInput
              style={styles.textInput}
              placeholder="Name"
              onChangeText={(name)=>setName(name)}   
              autoCapitalize="none"
              autoCorrect={false}
              />
             <TextInput
              style={styles.textInput}
              placeholder="Email"
              onChangeText={(email)=>setEmail(email)}   
              autoCapitalize="none"
              autoCorrect={false}
              />

              <TextInput
              style={styles.textInput}
              placeholder="Password"
              onChangeText={(password)=>setPassword(password)}   
              autoCapitalize="none"
              autoCorrect={false}
              />
        </View>

        <TouchableOpacity
        onPress={()=>signupUser(email,password)}
        style={styles.button}>
          <Text style={{fontWeight:"bold",fontSize:21}}>SignUp</Text>
        </TouchableOpacity>

                  

    </View>
  );
}

const styles = StyleSheet.create({
     container : {
      flex:1,
      alignItems:'center',
      marginTop:100,
     },
     textInput:{
      paddingTop:20,
      paddingBottom:10,
      width:400,
      fontSize:20,
      borderBottomWidth:1,
      borderBottomColor:'#000',
      marginBottom:10,
      textAlign:'center'
     },
     button :{
      marginTop:50,
      height:70,
      width:250,
      backgroundColor:'#026efd',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:50
     }
})

export default SignUp;


// import React from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { ImagePicker, Permissions } from 'expo';
// import {
// 	StyleSheet,
// 	Text,
// 	TextInput,
// 	View,
// 	Button,
// 	ImageEditor
// } from 'react-native';

// import { firebase } from '../config/firebaseSDK';

// export default class Signup  {
	
// 	state = {
// 		name: '',
// 		email: '',
// 		password: '',
// 	};
    
// 	onPressCreate = async (navigate) => {
		
// 		try {
// 			const user = {
// 				name: this.state.name,
// 				email: this.state.email,
// 				password: this.state.password
// 			};
        
//        await firebase
// 	              .auth()
// 				 .createUserWithEmailAndPassword(user)
// 				 .then(()=>this.props.navigation.navigator("Login"))
// 		} catch ({ message }) {
// 			console.log('create account failed. catch error:' + message);
// 		}
// 	};

// 	onChangeTextEmail = email => this.setState({ email });
// 	onChangeTextPassword = password => this.setState({ password });
// 	onChangeTextName = name => this.setState({ name });


// 	render() {
// 		return (
// 			<View>
// 				<Text style={styles.title}>Email:</Text>
// 				<TextInput
// 					style={styles.nameInput}
// 					placeHolder="test@gmail.com"
// 					onChangeText={this.onChangeTextEmail}
// 					value={this.state.email}
// 				/>
// 				<Text style={styles.title}>Password:</Text>
// 				<TextInput
// 					style={styles.nameInput}
// 					onChangeText={this.onChangeTextPassword}
// 					value={this.state.password}
// 				/>
// 				<Text style={styles.title}>Name:</Text>
// 				<TextInput
// 					style={styles.nameInput}
// 					onChangeText={this.onChangeTextName}
// 					value={this.state.name}
// 				/>
// 				<Button
// 					title="Signup"
// 					style={styles.buttonText}
// 					onPress={this.onPressCreate}
// 				/>
				
// 			</View>
// 		);
// 	}
// }

// const offset = 16;
// const styles = StyleSheet.create({
// 	title: {
// 		marginTop: offset,
// 		marginLeft: offset,
// 		fontSize: offset
// 	},
// 	nameInput: {
// 		height: offset * 2,
// 		margin: offset,
// 		paddingHorizontal: offset,
// 		borderColor: '#111111',
// 		borderWidth: 1,
// 		fontSize: offset
// 	},
// 	buttonText: {
// 		marginLeft: offset,
// 		fontSize: 42
// 	}
// });
// import React from 'react'
// import {Text,Image, View,SafeAreaView,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
// // import { Svg, SvgAst } from 'react-native-svg'
// // import Carot from '../assets/carot.svg'
// // import SafeAreaView from 'react-native-safe-area-view';
// import RNPickerSelect from 'react-native-picker-select';
// import imgcarrot from '../assets/carrot.png'
// import {useFonts} from 'expo-font'
// import imgGG from '../assets/google-logo-9824.png'


// function SignUp() {
//   let [fontsLoaded]=useFonts({
//     'XBall':require('../assets/fonts/XBall.ttf')
//   });
  
//   return (
//   <SafeAreaView style={styles.container}>
//     {/* <Carot height={300} width={300} fill={"red"}/> */}
//     <View style={styles.navtop}>
//     <Text style={styles.textlogin}>CAROT</Text>
//     <Image style={styles.img} source={imgcarrot}/>
//     </View>
    
//     <View style={styles.contaitextinput}>
//       <View style={styles.TextInput}>
//       <Text style={styles.textnoti}>Email</Text>
//         <View style={styles.border}><TextInput placeholder='Nhập email...'></TextInput></View>
//          <Text style={styles.textnoti}>Họ tên</Text>
//         <View style={styles.border}><TextInput placeholder='Nhập họ tên...'></TextInput></View>
//           <Text style={styles.textnoti}>Mật khẩu</Text>
//         <View style={styles.border}><TextInput placeholder='Nhập mật khẩu...'></TextInput></View>
//         <Text style={styles.textnoti}>Nhập lại mật khẩu</Text>
//         <View style={styles.border}><TextInput placeholder='Nhập lại mật khẩu...'></TextInput></View>
//         {/* <Text style={styles.textnoti}>Ngày sinh</Text>
//         <View style={styles.border}><TextInput placeholder='Nhập email...'></TextInput></View>
//         <Text style={styles.textnoti}>Giới tính</Text>
//         <View style={styles.border}><TextInput placeholder='Nhập email...'></TextInput></View> */}
//         <Text style={styles.textnoti}>Chọn giới tính</Text>
//         <RNPickerSelect
        
//             onValueChange={(value) => console.log(value)}
//             placeholder={'Chọn giới tính'}
//             items={[
//                 { label: 'Nam', value: 'nam' },
//                 { label: 'Nữ', value: 'nu' },
//                 { label: 'Khác', value: 'khac' },
//             ]}
//         />
//       </View>
//       <TouchableOpacity onPress={()=>{}}style={styles.button}>
//             <Text style={{textAlign:'center',fontWeight:'700',fontSize:30,color:'#fff'}}>ĐĂNG KÝ</Text>
//           </TouchableOpacity>
//           <Text style={{fontSize:20, marginTop:15}}>Hoặc</Text>
//           <Text style={{color:'red', fontSize:25,margin:5}}>Đăng nhập</Text>
       

//     </View>
   
//   </SafeAreaView>
//   )
// }

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center'
//   },
//   navtop:{
//     alignItems:'center'
//   },
//   img:{
//     height:130,
//     width:130,
//     rotation:30,
//     margin:-25
//   },
//   textlogin:{
//     fontSize:70,
//     color:'red',
    
//   },
//   contaitextinput:{
//      justifyContent:'space-evenly',
//     alignItems:'center',
//   },
//   TextInput:{
//     // justifyContent:'space-around',
//     // alignItems:'center',
    
//   },
//   textnoti:{
//     marginTop:10,
//     fontSize:25,

//   },
//   button:{
//     backgroundColor:'#ff4c00',
//     padding:20,
//     borderRadius:10,
  
//     paddingHorizontal:30,
//     paddingVertical:10,
//     marginTop:10,
    
//   },
//   border:{
//     flexDirection:'row',
//     borderColor:'#ff4c00',
//     borderWidth:1, 
//     borderRadius:10, 
//     height:50,
//     width:300,
//     justifyContent:'space-around',
//     marginTop:10
//   },imgg:{
//     height:50,
//     width:50
//   }
// });

// export default SignUp
