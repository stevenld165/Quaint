import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import Database from '@/components/Database';

import { getData, getMonthSentences } from '@/components/Database';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const [monthData, setMonthData] = useState([])
  const [monthSentences, setMonthSentences] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        const retMonthData = await getData()
        setMonthData(retMonthData)
    }
    fetchData()
    
    
  }, [])

  console.log(monthData)
  return (
    <>
      <View>
      <Database/>
      </View>
      
  
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
