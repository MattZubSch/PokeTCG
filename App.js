import { StyleSheet, Text, View, TextInput, Button, Modal, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React, {useState} from 'react';
import Header from './Components/Header';
import StartGameScreen from './Screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Adivina el Numero" />
      <StartGameScreen />
    </View>
  )
  
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  
});
