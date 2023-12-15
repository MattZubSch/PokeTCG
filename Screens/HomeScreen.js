import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState} from 'react'
import Header from '../Components/Header'
import HeaderArchivements from '../Components/HeaderArchivements'

const HomeScreen = ({navigation}) => {
    const [level, setLevel] = useState(1)
    const [coins, setCoins] = useState(500)


  return (
    <ScrollView>
        <Header />
        <HeaderArchivements lv={level} coins={coins}/>
        <View>
            <TouchableOpacity 
            style={styles.btnTouchables}
            onPress={() => navigation.navigate('InventoryScreen')}
            >
                <Text style={styles.btnText}>Inventario</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.btnTouchables}
            onPress={() => setLevel(level + 1)}
            >
                <Text style={styles.btnText}>Tienda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTouchables}>
                <Text style={styles.btnText}>Biblioteca</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTouchables}>
                <Text style={styles.btnText}>Intercambios</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.btnTouchables}
            onPress={() => setCoins(coins + 100)}
            >
                <Text style={styles.btnText}>Conseguir Monedas</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {
                setLevel(1)
                setCoins(500)
            }}
            style={styles.btnTouchables}>
                <Text style={styles.btnText}>Set All</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {
                navigation.navigate('Buscar Carta')
            }}
            style={styles.btnTouchables}>
                <Text style={styles.btnText}>Auxiliar getCard</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
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
        fontFamily: 'Montserrat',
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
        fontFamily: 'MontserratBold',
    }
})