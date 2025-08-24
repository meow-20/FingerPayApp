import React, { useEffect } from "react";
import { Text, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import "../global.css";

export default function Splash({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Register"); // navigate after 3s
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center bg-purple-700">
      <Image
        source={require("../assets/icon.png")}
        className="w-60 h-60 mb-4 rounded-full"
        resizeMode="contain"
      />
      <Text className="text-3xl font-bold text-white">FingerPay</Text>
    </View>
  );
}
