import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import {useState} from 'react'
import styles, {tab, tabText} from './Welcome.style'
import  Icon  from 'react-native-vector-icons/Feather'
import { useRouter } from 'expo-router'
import { SIZES } from '@/constants/themes'

const jobTypes = ['Full-time', 'Part-time', 'Contractor']

export const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState('Full-time');
  const router =  useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hello Sujan!</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job!</Text>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
            <TextInput style={styles.searchInput} value="" onChange={()=>{}} placeholder='What are you looking for...'/>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
            <Icon name="search" size={20} style={{color:'#fff'}}/>
        </TouchableOpacity>
        
      </View>
      <View style={styles.tabsContainer}>
        <FlatList data={jobTypes}  renderItem={({item})=>(
          <TouchableOpacity style={tab(activeJobType, item)} onPress={()=>{
            setActiveJobType(item);
            // router.push(`/search/${item}`)
          }}>
            <Text style={tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
        )} keyExtractor={item=>item}
        contentContainerStyle={{columnGap: SIZES.small}}
        horizontal
        ></FlatList>
      </View>
    </View>
  )
}
