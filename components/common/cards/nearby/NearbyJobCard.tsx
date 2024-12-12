import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './NearbyJobCard.style.'


export const NearbyJobCard = ({job, handleNavigate}:any) => {
    const image = job?.employer_logo ? job.employer_logo: 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.container}>
        <TouchableOpacity style={styles.logoContainer}>
            <Image source={{uri:image}} resizeMode='contain' height={100} width={100} style={styles.logoImage}/>
        </TouchableOpacity>
        <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.jobName}>{job.job_title}</Text>
            <Text numberOfLines={1} style={styles.jobType}>{job.job_employment_type}</Text>
        </View>
    </TouchableOpacity>
  )
}

