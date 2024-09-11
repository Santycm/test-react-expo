import React from 'react'
import {View, Text, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = () => {
  const navigation = useNavigation();


  return (
    <View style={{ backgroundColor: "black", flex: 1, height: 100 }}>
      <Text style={{ color: "black" }}>Home Screeeeeen</Text>
      <Pressable
        style={{ backgroundColor: "purple" }}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={{ fontSize: 15, textAlign: "center", color: "white" }}>
          Go to Stack Screen
        </Text>
      </Pressable>
    </View>
  );
}
