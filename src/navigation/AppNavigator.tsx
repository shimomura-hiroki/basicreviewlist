import React from "react";
import { NavigationContainer } from '@react-navigation/native';
/* screen */
import { HomeScreen } from "../screens/HomeScreens";

export const AppNavigator = () => {
    return (
    <NavigationContainer>
        <HomeScreen />
    </NavigationContainer>
    );
}
