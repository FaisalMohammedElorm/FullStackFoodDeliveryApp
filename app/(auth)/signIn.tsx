import { View, Text, Button } from 'react-native'
import React from 'react'
import signUp from './signUp';
import { router } from 'expo-router';

const signIn = () => {
  return (
    <View>
      <Text>signIn</Text>
      <Button 
        title="Sign Up"
        onPress={() => router.push({ pathname: '/signUp' })}
      />
    </View>
  )
}

export default signIn