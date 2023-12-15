import { StyleSheet, Text, View, Button } from 'react-native'
import GenericInput from '../Components/GenericInput'
import React, { useState } from 'react'

const SearchCard = ({navigation}) => {
    const [inputValue, setInputValue] = useState('');



  const onPressHandler = () => {
    // Lógica de búsqueda de carta
    navigation.navigate('Mostrar Carta', {id: inputValue})
  }

  return (
    <View style={styles.container}>
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
})