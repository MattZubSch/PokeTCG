import { StyleSheet, Text, View, Button } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import GenericInput from '../Components/GenericInput'
import React, { useState } from 'react'

const SearchCard = ({navigation}) => {
    const [inputValue, setInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('sv3pt5');


  const onPressHandler = () => {
    // Lógica de búsqueda de carta
    navigation.navigate('Mostrar Carta', {set: selectedValue, id: inputValue})
  }

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="S&V 151" value="sv3pt5" />
        <Picker.Item label="Base" value="base1" />
        <Picker.Item label="HeartGold & SoulSilver" value="hgss1" />
        <Picker.Item label="B&W Legendary Treasures" value="bw11" />
        <Picker.Item label="Ancient Origins" value="xy7" />
        <Picker.Item label="Sun & Moon" value="sm1" />
      </Picker>
      <Text style={styles.inputTitle}>Ingrese el ID de la Carta</Text>
      <GenericInput
        placeholder="Ingresa el ID"
        onInputChange={setInputValue}
        validation={(value) => /^\d{1,3}$/.test(value)} // Puedes agregar validaciones adicionales aquí
      />
      <Button
        title="Buscar"
        onPress={() => {
          onPressHandler();
        }} />
    </View>
  )
}

export default SearchCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    inputTitle: {
        fontSize: 20,
        fontFamily: 'MontserratBold',
        color: 'black',
    },
    picker: {
      width: 200,
      height: 50,
    },
})