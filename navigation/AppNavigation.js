import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screens/HomeScreen";
import InventoryScreen from "../Screens/InventoryScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="InventoryScreen" component={InventoryScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;