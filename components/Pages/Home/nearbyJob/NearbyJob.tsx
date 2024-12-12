import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { styles } from './NearbyJob.style';
import { Popular } from '@/components/common';
import { useFetch } from '@/hooks/useFetch';
import { NearbyJobCard } from '@/components/common/cards/nearby';



export const NearbyJobs = () => {
    const router =  useRouter();


    const  {data, isLoading, error} = useFetch('search', {page:1, query:'react developer'});

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Nearby Jobs</Text>
            <TouchableOpacity>
                <Text style={styles.headerBtn}>Show all</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
            {isLoading ? 
                (<ActivityIndicator size={'large'} color={'#ef6e6e'} />): 
                error ? 
                (<Text>Something went wrong!</Text>)  :
                (data?.map(job=>(
                    <NearbyJobCard job={job} key={`nearby-job-${job?.job_id}`} handleNavigate={()=>router.push(`/job-details/${job?.job_id}`)} />
                )))
            }
        </View>
    </View>
  )
}
