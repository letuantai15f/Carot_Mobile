import firebase from "firebase/compat";
export const AddUser= async(name,email,image,uid)=>{
    try {
        return await firebase.database().ref("users/"+uid).
        set({name:name, email:email,image:image,uuid:uid});
    } catch (error) {
        return error;
    }

}


export const UpdataUserImage=async(image,uid)=>{
    try {
        return await firebase.database()
        .ref("users/"+uid)
        .update({
            image:image,
         
        })
    } catch (error) {
        return console.error();
    }
}

