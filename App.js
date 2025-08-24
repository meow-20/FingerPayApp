import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./screens/Splash";
import Hello from "./screens/Hello";
import Register from "./screens/Register";
import Login from "./screens/Login";

import "./global.css";
import { PasswordProvider } from "./context/PasswordContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PasswordProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          {/* <Stack.Screen name="Hello" component={Hello} /> */}
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </PasswordProvider>
  );
}
