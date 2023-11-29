import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const InventoryScreen = () => {
  return (
    <View>
        <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.btnTouchables}>
                <Text style={styles.btnText}>Abrir Sobres</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default InventoryScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTouchables: {
        backgroundColor: '#112A46',
        padding: 10,
        paddingVertical: 30,
        margin: 15,
        borderRadius: 10,
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    }
})