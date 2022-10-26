import { async } from "@firebase/util";
import firebase from "firebase/compat";
export const sendMessage= async(currentUid,gestUid,message)=>{
    try{
        return await firebase.database().
        ref("messages/"+currentUid).
        child(gestUid).
        push({
            message:{
                sender:currentUid,
                recieved:gestUid,
                message:message
            }
            
        });
    }catch(error){
        return error;
    }
}
export const recievedMessage= async(currentUid,gestUid,message)=>{
    try{
        return await firebase.database().
        ref("messages/"+gestUid).
        child(currentUid).
        set({
            message:{
                sender:currentUid,
                recieved:gestUid,
                message:message
            }
            
        });
    }catch(error){
        return error;
    }
}
