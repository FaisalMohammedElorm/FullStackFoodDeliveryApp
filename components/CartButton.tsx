import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const CartButton = () => {
  const totalItems = 10;
  return (
    <TouchableOpacity className="relative p-2" onPress={() => {}}>
      <FontAwesome name="shopping-cart" size={25} color="black" />
      {totalItems > 0 && (
        <View className="absolute -top-1 -right-1 bg-red-500 rounded-full min-w-[20px] h-5 flex items-center justify-center">
          <Text className="text-xs font-bold text-black">{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default CartButton