import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
/* screens */
import { HomeScreen } from "../screens/HomeScreens";
import { ShopScreen } from "../screens/ShopScreens";


const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
                />
            <Stack.Screen name="Shop" component={ShopScreen} />
        </Stack.Navigator>
    )
};
