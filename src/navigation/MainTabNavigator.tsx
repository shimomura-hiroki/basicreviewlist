import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
/* navigators */
import { HomeStackNavigator } from "./HomeStackNavigator";
/* screens */
import { UserScreen } from "../screens/UserScreen";
import { SearchScreen } from "../screens/SearchScreen";
/* types */
import { RootStackParamList } from "../types/navigation";

const Tab = createBottomTabNavigator<RootStackParamList>();

export const MainTabNavigator = () => {
return (
    <Tab.Navigator
    tabBarOptions={{
        activeTintColor: "#900",
        inactiveTintColor: "#999",
    }}
    >
    <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
        ),
        }}
    />
    <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
        tabBarLabel: "Search",
        tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
        ),
        }}
    />
    <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
        tabBarLabel: "User",
        tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
        ),
        }}
    />
    </Tab.Navigator>
);
};
// export const MainTabNavigator = () => {
//     const screenOptions = ({ route }) => ({
//     tabBarIcon: ({ focused, color, size }) => {
//         let iconName;

//         if (route.name === "Home") {
//         iconName = "home";
//             } else if (route.name === "User") {
//         iconName = "user";
//         }
// // @ts-ignore
//     return <Feather name={iconName} size={size} color={color} />;
//     },
// });

// const tabBarOptions = {
//     activeTintColor: "#900",
//     inactiveTintColor: "#999",
// };

// return (
//     // @ts-ignore
//     <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
//     <Tab.Screen name="Home" component={HomeStackNavigator} />
//     <Tab.Screen name="User" component={UserScreen} />
//     <Tab.Screen name="User" component={UserScreen} />
//     </Tab.Navigator>
// );
// };
