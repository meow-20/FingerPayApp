import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Login({ navigation }) {
  return (
    <View className="flex-1 bg-white justify-center px-6">
      {/* Header */}
      <Text className="text-3xl font-bold text-purple-700 mb-8 text-center">
        Login
      </Text>

      {/* Inputs */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#6B21A8"
        className="border border-purple-300 rounded-xl px-4 py-3 mb-4 text-purple-900"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#6B21A8"
        secureTextEntry
        className="border border-purple-300 rounded-xl px-4 py-3 mb-6 text-purple-900"
      />

      {/* Button */}
      <TouchableOpacity className="bg-purple-700 py-3 rounded-xl shadow">
        <Text className="text-white text-center font-semibold text-lg">
          Login
        </Text>
      </TouchableOpacity>

      {/* Footer */}
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text className="text-purple-700 text-center mt-4">
          Don’t have an account? <Text className="font-bold">Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
