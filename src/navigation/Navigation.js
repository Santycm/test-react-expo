import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import { HomeScreen } from "../screens/HomeScreen.js";
import { StackScreen } from "../screens/StackScreen.js";
import { SettingsScreen } from "../screens/SettingsScreen.js";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function MyStack(){
  return(
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={MyStack} />
      <Stack.Screen name="Stack" component={StackScreen} />
    </Stack.Navigator>
  )
}

export default function Navigation() {
    return (
        <NavigationContainer>
        <MyTabs />
        </NavigationContainer>
    );
}