import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";

//screens
import Post from "../screens/Post";
import CreatePost from "../screens/CreatePost";

const Stack = createStackNavigator();

const SecondaryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Post"
        component={Post}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "teal",
            ...TransitionPresets.ScaleFromCenterAndroid //transition
          },
        }}
      />
      <Stack.Screen
        name="Create Post"
        component={CreatePost}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "teal",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default SecondaryStack;
