import { SignUp } from "../Screens/SignUp";
import Login from "../Screens/Login";
import {} from 'react-native-navigation'
import { createNativeStackNavigator,NativeStackHeaderProps } from "@react-navigation/native-stack";


const AuthStack=createNativeStackNavigator({
    Login:Login,
    SignUp:SignUp,
},{
    head:'none',initia
})