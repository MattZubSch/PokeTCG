import { StyleSheet, Text, View, Strong } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
        <Text>
            <Text style={styles.title1}>Poke</Text>
            <Text style={styles.title2}>TCG</Text>
        </Text>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    title1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        backgroundColor: '#ACC8E5',
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    title2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#112A46',
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    headerContainer: {
        width: '100%',
        height: 100,
        paddingTop: 36,
        backgroundColor: '#ACC8E5',
        alignItems: 'center',
        justifyContent: 'center',
    }
    }
)
