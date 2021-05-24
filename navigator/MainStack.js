import React from "react";
import { View, Text, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";

//screens
import DataScreen from "../screens/DataScreen";
import Home from "../screens/Home";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" mode="modal" screenOptions={{}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: "maroon",
          },
          headerTitle: (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require("../assets/fb.png")}
                style={{ height: 38, width: 100 }}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Data"
        component={DataScreen}
        options={{
          title: "Check Data",
          headerStyle: {
            backgroundColor: "#008080",
          },
          headerTintColor: "black",
          ...TransitionPresets.ScaleFromCenterAndroid, //transition effects
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
