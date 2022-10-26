import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, StackActions ,useNavigation} from '@react-navigation/native';
import { StyleSheet, Text, useWindowDimensions, View,Pressable ,Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './navigation/AppNavigator';
import Login from './Screens/Login';
import {SignUp} from './Screens/SignUp';
import ChatRoomScreen from './Screens/ChatRoomScreen';
import UsersScreen from './Components/UserScreen';
import {
  SimpleLineIcons,Feather, MaterialCommunityIcons,AntDesign, Ionicons,
} from "@expo/vector-icons";

const Stack=createNativeStackNavigator();

export default function App() {
    
  return (     
    <NavigationContainer>
     <Stack.Navigator initialRouteName="../Carot_Mobile/Screens/Login.js" screenOptions={{headerShown:false}}>
      
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='ChatRoom' component={ChatRoomScreen} options={{headerTitle:ChatRoomHeader}} />
        <Stack.Screen name='AppNavigator' component={AppNavigator}/>
     </Stack.Navigator>  
      
    </NavigationContainer>
  );
}


const ChatRoomHeader = (props) => {
  const {width}=useWindowDimensions();
  const navigation = useNavigation();
  return(
    <View style={{
      flexDirection:'row',
      justifyContent:'space-between',
      width:width-25,
      marginLeft:25,
      padding:10,
      alignItems:'center',
    }}>
      <Image
      source={{uri:'https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-1/174590707_834340950513153_1841488449922100836_n.jpg?stp=dst-jpg_p240x240&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qj6CqsqAiP4AX9WPEq6&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT8U7EMB1rCr26ErGgvA8EE2RGZes2xtBsDjC5ddkpq8XA&oe=636F1D40'}}
      style={{width:30,height:30,borderRadius:30}}
      />
      <Text style={{flex:1,textAlign:'center',marginLeft:50,fontWeight:'bold'}}>Carot</Text>

      <Pressable onPress={() => navigation.navigate("Settings")}>
        <Feather
          name="settings"
          size={24}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
      </Pressable>
     
      <Pressable onPress={() => navigation.navigate("UsersScreen")}>
        <Feather
          name="edit-2"
          size={24}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
      </Pressable>
     

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});