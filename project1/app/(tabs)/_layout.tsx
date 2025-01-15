import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'

const layout = () => {
  return (
   
        <Tabs screenOptions={{headerShown: false}}>

        <Tabs.Screen name="index" options={{title: 'Home', headerShown: false, tabBarIcon: ({focused}) => <Text>home</Text> }} />
        <Tabs.Screen name="contact" options={{ title: 'Contact', headerShown: false }} />
        </Tabs>
      
    
  )
}

export default layout