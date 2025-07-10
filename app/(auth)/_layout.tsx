import { images } from '@/constants'
import { Slot } from 'expo-router'
import React from 'react'
import { Dimensions, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'

const _layout = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
      <ScrollView className='bg-white h-full' keyboardShouldPersistTaps='handled'>
        <View className='w-full relative' style={{ height: Dimensions.get('screen').height / 2.25}}>
          <ImageBackground 
            source={images.loginGraphic}
            className='size-full'
          />
        </View>
      </ScrollView>
      <Slot />
    </KeyboardAvoidingView>
  )
}

export default _layout

