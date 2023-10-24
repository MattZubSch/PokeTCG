import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>StartGameScreen</Text>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen: {
        padding: 30,
        flex: 1,
        alignItems: 'center',
    },
})