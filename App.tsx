/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";

import Welcome from "@modules/app/Welcome/main";
import Login from "@modules/app/Login/main";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "@modules/app/Detail/main";
import TestNative from "@modules/app/Test/main";
import { View } from "react-native";
import Register from "@modules/app/Register/main";
import DataList from "@modules/learn/dataLists/main";
import Grid from "~/modules/learn/grid/main";
import Setting from "@modules/learn/settings/main";
import Profile from "@modules/learn/profile/main";
import Navigation from "@modules/app/Navigation";

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="Login"
          component={Login}
          // options={{ animation: "flip" }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ animation: "flip" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
