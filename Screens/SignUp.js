import React  , {useState } from 'react';
import {View, StyleSheet,Text ,TouchableOpacity,TextInput,ToastAndroid, DrawerLayoutAndroidBase,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config/firebaseSDK';
// import Signup from '../Screens/SignUp';
import AppNavigator from '../navigation/AppNavigator';
import SafeAreaView from 'react-native-safe-area-view';
// import RNPickerSelect from 'react-native-picker-select';
import imgcarrot from '../assets/carrot.png'
import {useFonts} from 'expo-font'
import  '../assets/google-logo-9824.png'
import { SimpleTask } from 'react-native';
import { AddUser } from '../Components/User/User';


function SignUp  ({navigation}) {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [repassword,setRePassword] = useState('')
  const [date,setDate] = useState('')
  const [gender,setGender] = useState('')

  const signupUser = async(email,password) =>{
    

    try {
      await firebase.auth().createUserWithEmailAndPassword(email,password)   
        .then(()=>{ 
          firebase.auth().currentUser.sendEmailVerification({
            handleCodeInApp:true,
            url:'carot-6a8cb.firebaseapp.com'
          }) .then(()=>{alert('Xác minh gmail')}).catch((error)=>{alert(error.message)
          })


           var userID=firebase.auth().currentUser.uid;
          AddUser(name,email,'',userID).then(()=>{
            alert("Success");
            navigation.navigate(AppNavigator)
          }).catch((error)=>{
            alert(error);
          })
          console.log(userID);
        }
    )   
    } catch (error){
      alert('Đăng kí tài khoản không thành công')
    }
  }


  return (
   
    <View style={styles.container}>

<View style={styles.navtop}>

<Text style={styles.textlogin}>CAROT</Text>
<Image style={styles.img} source={imgcarrot} />

</View>

<View style={styles.navbody}>
<View style={{  }}>
<Text style={styles.textnoti}>Họ và tên</Text>
<TextInput
              style={styles.textInput}
              placeholder="Họ và tên"
              onChangeText={(name)=>setName(name)}   
              autoCapitalize="none"
              autoCorrect={false}
              />
              <Text style={styles.textnoti}>Email</Text>
             <TextInput
              style={styles.textInput}
              placeholder="Email"
              onChangeText={(email)=>setEmail(email)}   
              autoCapitalize="none"
              autoCorrect={false}
              />
              <Text style={styles.textnoti}>Mật khẩu</Text> 
              <TextInput
              style={styles.textInput}
              placeholder="Mật khẩu"
              onChangeText={(password)=>setPassword(password)}   
              autoCapitalize="none"
              autoCorrect={false}
              />
              <Text style={styles.textnoti}>Nhập lại mật khẩu</Text> 
              <TextInput
              style={styles.textInput}
              placeholder="Nhập lại mật khẩu"
              onChangeText={(repassword)=>setRePassword(password)}   
              autoCapitalize="none"
              autoCorrect={false}
              />
              <Text style={styles.textnoti}>Ngày sinh</Text> 
              <TextInput
              style={styles.textInput}
              placeholder="Ngày sinh"
              onChangeText={(date)=>setDate(date)}   
              autoCapitalize="none"
              autoCorrect={false}
              />
              <Text style={styles.textnoti}>Giới tính</Text> 
              <TextInput
              style={styles.textInput}
              placeholder="Giới tính"
              onChangeText={(gender)=>setGender(gender)}   
              autoCapitalize="none"
              autoCorrect={false}
              />
</View>
<View style={styles.navbottom}>
  <TouchableOpacity
    onPress={()=>signupUser(email,password)}
    style={styles.button}>
    <Text style={{ fontWeight: "bold", fontSize: 21,color:'white' }}>Đăng ký</Text>
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => navigation.navigate({ name: 'Login' })}
    style={{ marginTop: 20 }}>
    <Text style={{  fontSize: 16 }}>
      Bạn đã có tài khoản? <Text style={{color:'#ff4c00',fontWeight:'bold'}}>ĐĂNG NHẬP NGAY</Text> 
    </Text>
  </TouchableOpacity>
</View>
</View>



       {/* <View style={styles.navtop}>
     <Text style={styles.textlogin}>CAROT</Text>
     <Image style={styles.img} source={imgcarrot}/>
     </View>
      
        <View style={{marginTop:40}}>
        <Text style={styles.textnoti}>Họ tên</Text>
		      <TextInput
              style={styles.textInput}
              placeholder="Name"
              onChangeText={(name)=>setName(name)}   
              autoCapitalize="none"
              autoCorrect={false}
              />
              <Text style={styles.textnoti}>Email</Text>
             <TextInput
              style={styles.textInput}
              placeholder="Email"
              onChangeText={(email)=>setEmail(email)}   
              autoCapitalize="none"
              autoCorrect={false}
              />
              <Text style={styles.textnoti}>Mật khẩu</Text> 
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
          <Text style={{fontWeight:"bold",fontSize:21,color:'white'}}>Đăng ký</Text>
        </TouchableOpacity> */}

      
    </View>
  );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40,
    },
    button: {
      marginTop: 30,
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
      marginVertical:70,
      flex: 7, alignItems: 'center'
  
  
    },
    navbottom:{
     alignItems:'center'
    },
   
    img: {
      height: 130,
      width: 130,
      rotation: 30,
      marginTop: -30,
  
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
      marginTop: 10
    },
     
})

export  default SignUp;