import React from 'react';
import { View, Text } from 'react-native';
// import { tailwind } from 'tailwindcss-react-native';

export default function Hello() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}
