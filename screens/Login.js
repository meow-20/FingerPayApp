import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import axios from "axios";

import { usePassword } from "../context/PasswordContext";

// Use your API URL (can be from Constants or .env)
const API_URL = "http://192.168.1.75:5000";

export default function Login({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { password, setPassword } = usePassword();

  const handleLogin = async () => {
    // Validate phone number format
    if (!/^\d{10}$/.test(phoneNumber)) {
      ToastAndroid.show(
        "Please enter a valid 10-digit phone number",
        ToastAndroid.SHORT
      );
      return;
    }

    if (!password) {
      ToastAndroid.show("Please enter your password", ToastAndroid.SHORT);
      return;
    }

    try {

      const res = await axios.post(`${API_URL}/login`, {
        userId: phoneNumber,
        password,
      });

      if (res.data.success) {
        ToastAndroid.show("Login successful!", ToastAndroid.SHORT);
        navigation.navigate("Hello"); 
      } else {
        ToastAndroid.show(
          res.data.message || "Invalid phone number or password",
          ToastAndroid.SHORT
        );
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      ToastAndroid.show("Error logging in", ToastAndroid.SHORT);
    }
  };

  return (
    <View className="flex-1 bg-white justify-center px-6">
      <Text className="text-3xl font-bold text-purple-700 mb-8 text-center">
        Login
      </Text>

      <TextInput
        placeholder="Phone Number"
        placeholderTextColor="#6B21A8"
        keyboardType="numeric"
        maxLength={10}
        className="border border-purple-300 rounded-xl px-4 py-3 mb-4 text-purple-900"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#6B21A8"
        secureTextEntry
        className="border border-purple-300 rounded-xl px-4 py-3 mb-6 text-purple-900"
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        className="bg-purple-700 py-3 rounded-xl shadow mb-4"
        onPress={handleLogin}
      >
        <Text className="text-white text-center font-semibold text-lg">
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text className="text-purple-700 text-center mt-4">
          Don’t have an account? <Text className="font-bold">Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
