import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import {useState} from 'react'
import { useRouter } from 'expo-router'
import { styles } from './PopularJob.style';
import { Popular } from '@/components/common';
import { SIZES } from '@/constants/themes';
import { useFetch } from '@/hooks/useFetch';



export const PopularJob = () => {
    const router =  useRouter();


    const  {data, isLoading, error} = useFetch('search', {page:1, query:'react developer'});

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Popular Jobs</Text>
            <TouchableOpacity>
                <Text style={styles.headerBtn}>Show all</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
            {isLoading ? 
                (<ActivityIndicator size={'large'} color={'#ef6e6e'} />): 
                error ? 
                (<Text>Something went wrong!</Text>)  :
                (<FlatList data={data} renderItem={({item})=>(
                    <Popular.PopularJobCard item={item}/>
                )} 
                keyExtractor={(item, i)=>i.toString()}
                contentContainerStyle={{columnGap: SIZES.medium}}
                horizontal
                />)
            }
        </View>
    </View>
  )
}
