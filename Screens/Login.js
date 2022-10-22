import React from 'react'
import {Text,Image, View,SafeAreaView,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
// import { Svg, SvgAst } from 'react-native-svg'
// import Carot from '../assets/carot.svg'
import imgcarrot from '../assets/carrot.png'
import {useFonts} from 'expo-font'
import imgGG from '../assets/google-logo-9824.png'



// const Login=()=>{
 
// }

function Login() {
  let [fontsLoaded]=useFonts({
    'XBall':require('../assets/fonts/XBall.ttf')
  });
  
  return (
  <SafeAreaView style={styles.container}>
    {/* <Carot height={300} width={300} fill={"red"}/> */}
    <View style={styles.navtop}>
    <Text style={styles.textlogin}>CAROT</Text>
    <Image style={styles.img} source={imgcarrot}/>
    </View>
    
    <View style={styles.contaitextinput}>
      <View style={styles.TextInput}>
         <Text style={styles.textnoti}>Email</Text>

        <View style={styles.border}><TextInput placeholder='Nhập email...'></TextInput></View>
          <Text style={styles.textnoti}>Mật khẩu</Text>
        <View style={styles.border}><TextInput placeholder='Nhập mật khẩu...'></TextInput></View>
          <Text style={styles.textnoti}>Quên mật khẩu ?</Text>
          
      </View>
      <TouchableOpacity onPress={()=>{}}style={styles.button}>
            <Text style={{textAlign:'center',fontWeight:'700',fontSize:30,color:'#fff'}}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
          <Text style={{fontSize:20, marginTop:15}}>Hoặc</Text>
          <Text style={{color:'red', fontSize:25,margin:5}}>Đăng ký</Text>
        <TouchableOpacity onPress={()=>{}} style={{borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:5,paddingVertical:5}}>
        <Image style={styles.imgg} source={imgGG}/>
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

export default Login;




//********************** */
// import React from 'react';
// import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
// import firebaseSDK from '../config/firebaseSDK';

// export default class Login extends React.Component {
// 	static navigationOptions = {
// 		title: 'Firebase Chat App'
// 	};

// 	state = {
// 		name: 'Alice',
// 		email: 'test@live.com',
// 		password: '123456',
// 		avatar: ''
// 	};

// 	onPressLogin = async () => {
// 		const user = {
// 			name: this.state.name,
// 			email: this.state.email,
// 			password: this.state.password,
// 			avatar: this.state.avatar
// 		};

// 		const response = firebaseSDK.login(
// 			user,
// 			this.loginSuccess,
// 			this.loginFailed
// 		);
// 	};

// 	loginSuccess = () => {
// 		console.log('login successful, navigate to chat.');
// 		this.props.navigation.navigate('Chat', {
// 			name: this.state.name,
// 			email: this.state.email,
// 			avatar: this.state.avatar
// 		});
// 	};

// 	loginFailed = () => {
// 		alert('Login failure. Please tried again.');
// 	};

// 	onChangeTextEmail = email => this.setState({ email });
// 	onChangeTextPassword = password => this.setState({ password });

// 	render() {
// 		return (
// 			<View>
// 				<Text style={styles.title}>Email:</Text>
// 				<TextInput
// 					style={styles.nameInput}
// 					placeHolder="test3@gmail.com"
// 					onChangeText={this.onChangeTextEmail}
// 					value={this.state.email}
// 				/>
// 				<Text style={styles.title}>Password:</Text>
// 				<TextInput
// 					style={styles.nameInput}
// 					onChangeText={this.onChangeTextPassword}
// 					value={this.state.password}
// 				/>
// 				<Button
// 					title="Login"
// 					style={styles.buttonText}
// 					onPress={this.onPressLogin}
// 				/>

// 				<Button
// 					title="Signup"
// 					style={styles.buttonText}
// 					onPress={() => this.props.navigation.navigate('Signup')}
// 				/>
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	title: {
// 		marginTop: 16,
// 		marginLeft: 16,
// 		fontSize: 16
// 	},
// 	nameInput: {
// 		height: 16 * 2,
// 		margin: 16,
// 		paddingHorizontal: 16,
// 		borderColor: '#111111',
// 		borderWidth: 1,
// 		fontSize: 16
// 	},
// 	buttonText: {
// 		marginLeft: 16,
// 		fontSize: 42
// 	}
// });
//*************************** */
// import React ,{useState} from 'react';
// import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
// import firebaseSDK from '../config/firebase';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useNavigation } from '@react-navigation/native';

// export default class Login extends React.Component {
// 	static navigationOptions = {
// 		title: ' Chat App'
// 	};

// 	state = {
// 		name: 'test',
// 		email: 'test@.com',
// 		password: '123456',
// 		avatar: ''
// 	};

// 	onPressLogin = async() => {
// 		const user = {
// 			name: this.state.name,
// 			email: this.state.email,
// 			password: this.state.password,
// 			avatar: this.state.avatar
// 		};

// 		const response = firebaseSDK.login(
// 			user,
// 			this.loginSuccess,
// 			this.loginFailed
// 		);
// 	};

// 	loginSuccess = () => {
// 		console.log('login successful, navigate to chat.');
  
// 		this.props.navigation.navigate('Chat', {
// 			name: this.state.name,
// 			email: this.state.email,
// 			avatar: this.state.avatar
// 		});
// 	};

// 	loginFailed = () => {
// 		alert('Login failure. Please tried again.');
// 	};

// 	onChangeTextEmail = email => this.setState({ email });
// 	onChangeTextPassword = password => this.setState({ password });

// 	render() {
// 		return (
// 			<View>
// 				<Text style={styles.title}>Email:</Text>
// 				<TextInput
// 					style={styles.nameInput}
// 					placeHolder="test3@gmail.com"
// 					onChangeText={this.onChangeTextEmail}
// 					value={this.state.email}
// 				/>
// 				<Text style={styles.title}>Password:</Text>
// 				<TextInput
// 					style={styles.nameInput}
// 					onChangeText={this.onChangeTextPassword}
// 					value={this.state.password}
// 				/>
// 				<Button
// 					title="Login"
// 					style={styles.buttonText}
// 					onPress={this.onPressLogin}
// 				/>

// 				<Button
// 					title="Signup"
// 					style={styles.buttonText}
// 					onPress={() => this.props.navigation.navigate('Signup')}
// 				/>
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	title: {
// 		marginTop: 16,
// 		marginLeft: 16,
// 		fontSize: 16
// 	},
// 	nameInput: {
// 		height: 16 * 2,
// 		margin: 16,
// 		paddingHorizontal: 16,
// 		borderColor: '#111111',
// 		borderWidth: 1,
// 		fontSize: 16
// 	},
// 	buttonText: {
// 		marginLeft: 16,
// 		fontSize: 42
// 	}
// });

// import React from 'react'
// import {Text,Image, View,SafeAreaView,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
// // import { Svg, SvgAst } from 'react-native-svg'
// // import Carot from '../assets/carot.svg'
// import imgcarrot from '../assets/carrot.png'
// import {useFonts} from 'expo-font'
// import imgGG from '../assets/google-logo-9824.png'



// // const Login=()=>{
 
// // }

// function Login() {
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
//          <Text style={styles.textnoti}>Email</Text>

//         <View style={styles.border}><TextInput placeholder='Nhập email...'></TextInput></View>
//           <Text style={styles.textnoti}>Mật khẩu</Text>
//         <View style={styles.border}><TextInput placeholder='Nhập mật khẩu...'></TextInput></View>
//           <Text style={styles.textnoti}>Quên mật khẩu ?</Text>
          
//       </View>
//       <TouchableOpacity onPress={()=>{}}style={styles.button}>
//             <Text style={{textAlign:'center',fontWeight:'700',fontSize:30,color:'#fff'}}>ĐĂNG NHẬP</Text>
//           </TouchableOpacity>
//           <Text style={{fontSize:20, marginTop:15}}>Hoặc</Text>
//           <Text style={{color:'red', fontSize:25,margin:5}}>Đăng ký</Text>
//         <TouchableOpacity onPress={()=>{}} style={{borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:5,paddingVertical:5}}>
//         <Image style={styles.imgg} source={imgGG}/>
//         </TouchableOpacity>

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

// export default Login
