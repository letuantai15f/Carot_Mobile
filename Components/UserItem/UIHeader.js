import React, { Component } from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'
// import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'
import Icon from 'react-native-vector-icons/FontAwesome';

function UIHeader (props){
    const{
        title,
        leftIconName="",
        rightIconName="",
        onPressLeftIcon="",
        onPressRightIcon
    }=props
        return <View style={{
            height:55,
            backgroundColor:colors.primary,
            flexDirection:'row',
        }}>
            <Icon
            name={leftIconName}
            style={{marginEnd:2}}
            size={8} color={'white'}
            />
            <Text style={{
                fontSize:fontSizes.h5,
                alignSelf:'center',
                lineHeight:45,
                color:'white'
            }}>{title}</Text>

        </View>
    }

export default UIHeader
