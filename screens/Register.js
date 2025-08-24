import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";

// import { API_URL } from '@env';

import axios from "axios";
import { usePassword } from "../context/PasswordContext";

const API_URL = "http://192.168.1.75:5000";

export default function Register({ navigation }) {
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const {
    password,
    validatePassword,
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSymbol,
    hasMinLength,
  } = usePassword();

  async function registerUser() {
    //phonenumber = 10 digits
    if (!/^\d{10}$/.test(phoneNumber)) {
      ToastAndroid.show(
        "Please enter a valid 10-digit phone number",
        ToastAndroid.SHORT
      );
      return;
    }

    if (
      !hasUppercase ||
      !hasLowercase ||
      !hasNumber ||
      !hasSymbol ||
      !hasMinLength
    ) {
      alert("Password does not meet all requirements");
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/register`, {
        userId: phoneNumber,
        fullname,
        token: "dummyToken",
        onlyForTesting: password,
        bank: null,
      });
      console.log(res.data);
      ToastAndroid.show("Registered successfully!", ToastAndroid.SHORT);
    } catch (err) {
      console.error(err.message);
      ToastAndroid.show("Error registering user", ToastAndroid.SHORT);
    }
  }

  const renderCriteria = (label, isValid) => (
    <Text className={`text-sm ${isValid ? "text-green-600" : "text-red-600"}`}>
      {isValid ? "✔" : "✖"} {label}
    </Text>
  );

  return (
    <View className="flex-1 bg-white justify-center px-6">
      {/* Header */}
      <Text className="text-3xl font-bold text-purple-700 mb-8 text-center">
        Register
      </Text>

      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#6B21A8"
        className="border border-purple-300 rounded-xl px-4 py-3 mb-4 text-purple-900"
        value={fullname}
        onChangeText={setFullname}
      />
      <TextInput
        placeholder="Phone Number"
        placeholderTextColor="#6B21A8"
        keyboardType="numeric"
        className="border border-purple-300 rounded-xl px-4 py-3 mb-4 text-purple-900"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        maxLength={10}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#6B21A8"
        secureTextEntry
        className="border border-purple-300 rounded-xl px-4 py-3 mb-6 text-purple-900"
        value={password}
        onChangeText={validatePassword}
      />

      <View className="mb-6 ml-2">
        {renderCriteria("At least 8 characters", hasMinLength)}
        {renderCriteria("Uppercase letter", hasUppercase)}
        {renderCriteria("Lowercase letter", hasLowercase)}
        {renderCriteria("Number", hasNumber)}
        {renderCriteria("Special character (!@#$%^&*)", hasSymbol)}
      </View>

      <TouchableOpacity
        className="bg-purple-700 py-3 rounded-xl shadow mb-4"
        onPress={registerUser}
      >
        <Text className="text-white text-center font-semibold text-lg">
          Register
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text className="text-purple-700 text-center mt-4">
          Already have an account? <Text className="font-bold">Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
