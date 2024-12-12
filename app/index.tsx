import { Stack, useNavigation } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { HOME, ScreenHeaderBtn } from '@/components';
import { COLORS, SIZES } from '@/constants/themes';

  
export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#fff' }}>
        <Stack.Screen
            options={{
                title: '',
                headerShadowVisible: false,
                headerTitleAlign:'center',
                headerTitleStyle:{
                    fontWeight:'bold',
                },
          
                headerLeft:()=>(
                    <ScreenHeaderBtn icon="menu" handlePress={()=>alert('you pressed me')}/>
                ),
                headerLeftContainerStyle: {
                    paddingLeft: 10, // Padding for the left
                },
                headerRight:()=>(
                    <ScreenHeaderBtn icon="user"  handlePress={()=>alert('you pressed me')}/>
                ),
                headerRightContainerStyle: {
                    paddingRight: 10, // Padding for the left
                },
            }}
        />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1, width:'100%', height:'100%'}}>
        <View style={{
            flex:1,
            width:'100%',
       
            backgroundColor:COLORS.light.background,
            paddingHorizontal:20
        }}>
            <HOME.Welcome/>
            <HOME.PopularJob/>
            <HOME.NearbyJobs/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 50,
      height: 50,
    },
  });