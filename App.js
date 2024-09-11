import { StatusBar } from "expo-status-bar";
import {View, Text} from "react-native";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <View style={{flex:1}}>
      <Navigation />
    </View>
  );
}
