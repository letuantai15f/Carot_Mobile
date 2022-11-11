import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config/firebaseSDK';
import Signup from '../Screens/SignUp';
import AppNavigator from '../navigation/AppNavigator';
import imgcarrot from '../assets/carrot.png'
import { useFonts } from 'expo-font'
import imgGG from '../assets/google-logo-9824.png'


const Login = ({ navigation }) => {
  // const navigation = useNavigation()   

  const [email, setEmail] = useState(' ')
  const [password, setPassword] = useState(' ')


  // const loginUser = async (email, password) => {
  //   try {
  //     if(firebase.auth().currentUser.sendEmailVerification()!=null){
  //       firebase.auth().signInWithEmailAndPassword(email, password)
  //         .then(() => navigation.navigate(AppNavigator))
  //         console.log('dang nhap thanh cong')
  //     }else{
  //       alert('bạn chưa xác thực tài khoản')
  //       console.log('chua xac thuc tài khoản')
  //     }  
  //   } catch (error) {
  //     alert('Tài khoản chưa được đăng kí')
  //   }
  // }
  const loginUser=async(email,password)=>{
    fetch('http://192.168.1.33:3000/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      }),
    }); 
      }

  return (
    <View style={styles.container}>

      <View style={styles.navtop}>

        <Text style={styles.textlogin}>CAROT</Text>
        <Image style={styles.img} source={imgcarrot} />

      </View>

      <View style={styles.navbody}>
        <View style={{  }}>
          <Text>Email:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"
            autoCorrect={false}
          />
           <Text>Mat Khau:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Mật khẩu"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.navbottom}>
          <TouchableOpacity
            onPress={() => loginUser(email, password)}
            style={styles.button}>
            <Text style={{ fontWeight: "bold", fontSize: 21,color:'white' }}>Đăng nhập</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate({ name: 'SignUp' })}
            style={{ marginTop: 20 }}>
            <Text style={{  fontSize: 16 }}>
              Bạn chưa có tài khoản? <Text style={{color:'#ff4c00',fontWeight:'bold'}}>ĐĂNG KÝ NGAY</Text> 
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, }}>


      </View>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  button: {
    marginTop: 50,
    height: 70,
    width: 250,
    backgroundColor: '#ff4c00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  navtop: {
    alignItems: 'center',
    flex: 1
  },
  navbody: {
    marginTop: 10,
    flex: 2, alignItems: 'center'


  },
  navbottom: {
    flex: 1,
    alignItems: 'center',

  },
  img: {
    height: 130,
    width: 130,
    rotation: 30,
    marginTop: -20,
    marginBottom: -50

  },
  textlogin: {
    fontSize: 70,
    color: 'red',
    fontWeight: 'bold'
  },
  textnoti: {
    fontSize: 20,
  },
  textInput: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 20,
    borderBottomWidth: 1,
    marginBottom: 10,
    textAlign: 'center',
    flexDirection: 'row',
    borderColor: '#ff4c00',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 300,
    justifyContent: 'space-around',
    marginTop: 20
  },
})

export default Login;