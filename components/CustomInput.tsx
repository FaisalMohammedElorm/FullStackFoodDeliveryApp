import { CustomInputProps } from '@/type';
import cn from 'clsx';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const CustomInput: React.FC<CustomInputProps> = ({ 
  placeholder = 'Enter text', 
  value, 
  onChangeText, 
  label, 
  secureTextEntry = false, 
  keyboardType = 'default' 
}) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <View className='w-full '>
      <Text className='label'>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCapitalize='none'
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn('input', isFocused ? 'border-primary' : 'border-gray-300')}
        placeholderTextColor="#888"
      />
    </View>
  )
}

export default CustomInput