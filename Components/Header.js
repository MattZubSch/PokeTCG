import { StyleSheet, Text, View } from 'react-native'
import Colors from '../Constants/Colors'
import React from 'react'

const Header = props => {
  return (
    <View style={styles.headerCont}>
      <Text style={styles.HeaderTitle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerCont: {
        height: 100,
        padding: 30,
        backgroundColor: 'coral',
        width: '100%',
    },
    HeaderTitle: {
        color: Colors.header_title,
        fontSize: 22,
        justifyContent: 'center',
    }
})

export default Header