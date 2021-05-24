import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

//navigator
import MainStack from "./navigator/MainStack";
import BottomTabNav from "./navigator/BottomTabNav";

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
