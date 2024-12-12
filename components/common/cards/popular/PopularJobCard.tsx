import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './PopularJobCard.style'
import { checkImageURL } from '@/utils';

export const PopularJobCard = ({item, selectedJob, handleCardPress}:any) => {
    const image = item?.employer_logo ? item.employer_logo: 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
  return (
    <TouchableOpacity onPress={()=> handleCardPress(item)} style={styles.container(selectedJob, item)}>
        <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
            <Image source={{uri:image}} resizeMode='cover' height={100} width={100} style={styles.logoImage}/>
        </TouchableOpacity>
        <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
        <View style={styles.infoContainer}>
            <Text numberOfLines={1} style={styles.jobName(selectedJob, item)}>{item.job_title}</Text>
            <Text numberOfLines={1} style={styles.location}>{item.job_country}</Text>
        </View>
    </TouchableOpacity>
  )
}

