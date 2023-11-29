import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

const HomeScreen = ({navigation}) => {
  return (
    <View>
        <Header />
        <View style={styles.userAcrchivements}>
            <Text>LV: 0</Text>
            <Text>Coins: 500</Text>
        </View>
        <View>
            <TouchableOpacity 
            style={styles.btnTouchables}
            onPress={() => navigation.navigate('InventoryScreen')}
            >
                <Text style={styles.btnText}>Inventario</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTouchables}>
                <Text style={styles.btnText}>Tienda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTouchables}>
                <Text style={styles.btnText}>Biblioteca</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTouchables}>
                <Text style={styles.btnText}>Intercambios</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTouchables}>
                <Text style={styles.btnText}>Conseguir Monedas</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    userAcrchivements: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ACC8E5',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
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