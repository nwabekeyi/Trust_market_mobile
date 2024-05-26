import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View  className='mt-[10px]'>
      <Text>index</Text>
      <Link href='/profile' style={{color: 'blue'}}>Go to profile</Link>
    </View>
  ) 
}

export default index

