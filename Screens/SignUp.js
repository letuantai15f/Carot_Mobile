import React from 'react'
import {Text,Image, View,SafeAreaView,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
// import { Svg, SvgAst } from 'react-native-svg'
// import Carot from '../assets/carot.svg'
// import SafeAreaView from 'react-native-safe-area-view';
import RNPickerSelect from 'react-native-picker-select';
import imgcarrot from '../assets/carrot.png'
import {useFonts} from 'expo-font'
import imgGG from '../assets/google-logo-9824.png'


function SignUp() {
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
         <Text style={styles.textnoti}>Họ tên</Text>
        <View style={styles.border}><TextInput placeholder='Nhập họ tên...'></TextInput></View>
          <Text style={styles.textnoti}>Mật khẩu</Text>
        <View style={styles.border}><TextInput placeholder='Nhập mật khẩu...'></TextInput></View>
        <Text style={styles.textnoti}>Nhập lại mật khẩu</Text>
        <View style={styles.border}><TextInput placeholder='Nhập lại mật khẩu...'></TextInput></View>
        {/* <Text style={styles.textnoti}>Ngày sinh</Text>
        <View style={styles.border}><TextInput placeholder='Nhập email...'></TextInput></View>
        <Text style={styles.textnoti}>Giới tính</Text>
        <View style={styles.border}><TextInput placeholder='Nhập email...'></TextInput></View> */}
        <Text style={styles.textnoti}>Chọn giới tính</Text>
        <RNPickerSelect
        
            onValueChange={(value) => console.log(value)}
            placeholder={'Chọn giới tính'}
            items={[
                { label: 'Nam', value: 'nam' },
                { label: 'Nữ', value: 'nu' },
                { label: 'Khác', value: 'khac' },
            ]}
        />
      </View>
      <TouchableOpacity onPress={()=>{}}style={styles.button}>
            <Text style={{textAlign:'center',fontWeight:'700',fontSize:30,color:'#fff'}}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
          <Text style={{fontSize:20, marginTop:15}}>Hoặc</Text>
          <Text style={{color:'red', fontSize:25,margin:5}}>Đăng nhập</Text>
       

    </View>
   
  </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  },
  navtop:{
    alignItems:'center'
  },
  img:{
    height:130,
    width:130,
    rotation:30,
    margin:-25
  },
  textlogin:{
    fontSize:70,
    color:'red',
    
  },
  contaitextinput:{
     justifyContent:'space-evenly',
    alignItems:'center',
  },
  TextInput:{
    // justifyContent:'space-around',
    // alignItems:'center',
    
  },
  textnoti:{
    marginTop:10,
    fontSize:25,

  },
  button:{
    backgroundColor:'#ff4c00',
    padding:20,
    borderRadius:10,
  
    paddingHorizontal:30,
    paddingVertical:10,
    marginTop:10,
    
  },
  border:{
    flexDirection:'row',
    borderColor:'#ff4c00',
    borderWidth:1, 
    borderRadius:10, 
    height:50,
    width:300,
    justifyContent:'space-around',
    marginTop:10
  },imgg:{
    height:50,
    width:50
  }
});

export default SignUp
