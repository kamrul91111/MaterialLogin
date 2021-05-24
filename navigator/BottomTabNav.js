import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

//navigators
import MainStack from "./MainStack";
import SecondaryStack from "./SecondaryStack";
import ReviewStack from "./ReviewStack";

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Simple Data"
      backBehavior="initialRoute"
      shifting
      activeColor="white"
      inactiveColor="white"
      barStyle={{ backgroundColor: "black" }}
    >
      <Tab.Screen
        name="Simple Data"
        component={MainStack}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "maroon",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={SecondaryStack}
        options={{
          tabBarColor: "teal",
          tabBarLabel: "Make Post",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Reviews"
        component={ReviewStack}
        options={{
          tabBarColor: "purple",
          tabBarLabel: "Reviews",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="film" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
