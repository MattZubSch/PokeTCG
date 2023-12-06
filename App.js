import { StyleSheet, Text, View, TextInput, Button, Modal, TouchableOpacity, ScrollView, FlatList, SafeAreaView } from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import HomeScreen from './Screens/HomeScreen';
import * as Font from 'expo-font'; 
import AppLoading from 'expo-app-loading';
import AppNavigation from './navigation/AppNavigation';
import * as SplashScreen from 'expo-splash-screen';


export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
      async function prepare() {
        try{
        //load fonts
        await Font.loadAsync({
          Montserrat: require('./assets/fonts/montserrat/Montserrat-Regular.ttf'),
          MontserratBold: require('./assets/fonts/montserrat/Montserrat-Bold.ttf'),
          MontserratSemiBold: require('./assets/fonts/montserrat/Montserrat-SemiBold.ttf'),
          MontserratMedium: require('./assets/fonts/montserrat/Montserrat-Medium.ttf'),
          MontserratLight: require('./assets/fonts/montserrat/Montserrat-Light.ttf'),
          MontserratThin: require('./assets/fonts/montserrat/Montserrat-Thin.ttf'),
        });
        } catch (e) {
            console.warn(e);
        } finally {
            setDataLoaded(true);
        }
      }
      prepare();
    }, []);
  
  const onLayoutRootView = useCallback(async () => {
    if (dataLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [dataLoaded]);

  if (!dataLoaded) {
    return null;
  }


  return (
    <SafeAreaView 
    style={styles.screen}
    onLayout={onLayoutRootView}
    >
      <AppNavigation />
    </SafeAreaView>
  )
}




const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  
});
