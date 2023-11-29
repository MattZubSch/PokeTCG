import { StyleSheet, Text, View, TextInput, Button, Modal, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React, {useState} from 'react';
import HomeScreen from './Screens/HomeScreen';
import { useFonts } from 'expo-font'; 
import AppLoading from 'expo-app-loading';
import AppNavigation from './navigation/AppNavigation';


export default function App() {

  const [dataLoaded] = useFonts({
    Montserrat: require('./assets/fonts/montserrat/Montserrat-Regular.ttf'),
    MontserratBold: require('./assets/fonts/montserrat/Montserrat-Bold.ttf'),
    MontserratSemiBold: require('./assets/fonts/montserrat/Montserrat-SemiBold.ttf'),
    MontserratMedium: require('./assets/fonts/montserrat/Montserrat-Medium.ttf'),
    MontserratLight: require('./assets/fonts/montserrat/Montserrat-Light.ttf'),
    MontserratThin: require('./assets/fonts/montserrat/Montserrat-Thin.ttf'),
  });

  if (!dataLoaded) {
    return <AppLoading />;
  }

  return (
    <AppNavigation />
  )
  
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  
});
