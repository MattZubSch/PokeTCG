import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderArchivements = (props) => {

    const { lv, coins } = props

  return (
    <View>
      <View style={styles.userAcrchivements}>
            <Text>LV: {lv}</Text>
            <Text>Coins: {coins}</Text>
        </View>
    </View>
  )
}

export default HeaderArchivements

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
})