import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screens/HomeScreen";
import InventoryScreen from "../Screens/InventoryScreen";
import AuxCard from "../Screens/AuxCard";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{headerShown: false}}
            />
            <Stack.Screen name="InventoryScreen" component={InventoryScreen} />
            <Stack.Screen name="AuxCard" component={AuxCard} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;