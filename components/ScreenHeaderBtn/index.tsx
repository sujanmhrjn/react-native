import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';

export const ScreenHeaderBtn = ({icon, handlePress}:{icon:string, handlePress:()=>void}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={{backgroundColor:'#f6f6f6s', padding:8, borderRadius:100}}>
        <Icon name={icon} size={18}/>
    </TouchableOpacity>
  )
}