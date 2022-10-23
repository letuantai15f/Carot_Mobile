import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './navigation/AppNavigator';
import Login from './Screens/Login';
import {SignUp} from './Screens/SignUp';

const Stack=createNativeStackNavigator();

export default function App() {
    
  return (     
    <NavigationContainer>
     <Stack.Navigator initialRouteName="../Carot_Mobile/Screens/Login.js" screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='AppNavigator' component={AppNavigator}/>
     </Stack.Navigator>  
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
