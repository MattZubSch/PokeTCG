import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screens/HomeScreen";
import InventoryScreen from "../Screens/InventoryScreen";
import VisualizeCard from "../Screens/VisualizeCard";
import SearchCard from "../Screens/SearchCard";

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
            <Stack.Screen name="Inventario" component={InventoryScreen} />
            <Stack.Screen name="Buscar Carta" component={SearchCard} />
            <Stack.Screen name="Mostrar Carta" component={VisualizeCard} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;