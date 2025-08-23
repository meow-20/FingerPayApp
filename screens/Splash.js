import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Image } from 'react-native';
import { tailwind } from 'tailwindcss-react-native';

export default function Splash() {
  const bounceAnim = useRef(new Animated.Value(0)).current; // initial scale 0

  useEffect(() => {
    // Bounce animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, { toValue: 1.2, duration: 500, useNativeDriver: true }),
        Animated.timing(bounceAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <View style={tailwind('flex-1 items-center justify-center bg-black')}>
      <Animated.Image
        source={require('../assets/finpay-logo.png')} // your logo image here
        style={{
          width: 120,
          height: 120,
          marginBottom: 20,
          transform: [{ scale: bounceAnim }],
        }}
      />
      <Text style={tailwind('text-orange-500 text-5xl font-extrabold mb-3')}>BRUH APP</Text>
      <Text style={tailwind('text-white text-lg')}>Your secure payment app</Text>
    </View>
  );
}
