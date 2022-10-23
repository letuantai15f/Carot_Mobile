import React  , {useState } from 'react';
import {View, StyleSheet,Text ,TouchableOpacity,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config/firebaseSDK';
import SignUp from '../Screens/SignUp';
import AppNavigator from '../navigation/AppNavigator';


const Login = ({navigation}) => {
  // const navigation = useNavigation()   
  
  const [email,setEmail] = useState(' ')
  const [password,setPassword] = useState(' ')
   

  const loginUser = async(email,password) =>{
    try {
      await firebase.auth().signInWithEmailAndPassword(email,password) 
            
        .then(()=>navigation.navigate(AppNavigator))      
    } catch (error){
      alert('Tài khoản chưa được đăng kí')
    }
  } 
  
  return (
    <View style={styles.container}>
        {/* <Text style={{fontWeight:'bold',fontSize:26}}>Login</Text> */}
        <View style={{marginTop:40}}>
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
        onPress={()=>loginUser(email,password)}
        style={styles.button}>
          <Text style={{fontWeight:"bold",fontSize:21}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
           onPress={()=>navigation.navigate(SignUp)}
           style={{marginTop:20}}>
             <Text style={{fontWeight:"bold",fontSize:16}}>   
              Don't have an accout?Registry Now
             </Text>
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




