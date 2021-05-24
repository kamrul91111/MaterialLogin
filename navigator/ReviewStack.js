import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";

//screens
import ReviewDetails from "../screens/ReviewDetails";
import ReviewHome from "../screens/ReviewHome";

const Stack = createStackNavigator();

const ReviewStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ReviewHome"
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "white",
        ...TransitionPresets.ScaleFromCenterAndroid, //transition effects
      }}
    >
      <Stack.Screen
        name="ReviewHome"
        component={ReviewHome}
        options={{
          headerStyle: {
            backgroundColor: "purple",
          },
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          headerStyle: {
            backgroundColor: "purple",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ReviewStack;
