import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Item de Lista" 
        style={styles.input} 
        />
        <Button title="AGREGAR" />
      </View>
      <View style={styles.itemList}>
        {/* Lista de Items */}
        <View style={styles.item}>
          <Text>Item 1</Text>
          <Button
            title="X"
            color={"red"}
          />
        </View>
        <View style={styles.item}>
          <Text>Item 2</Text>
          <Button
            title="X"
            color={"red"}
          />
        </View>
        <View style={styles.item}>
          <Text>Item 3</Text>
          <Button
            title="X"
            color={"red"}
          />

        </View>    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
    marginVertical: 30
  },
  input: {
    borderBottomColor: "black", 
    borderBottomWidth: 1,
    width: 200
  },
  item: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  itemList: {
    width: "100%",
    borderColor : "black",
    borderWidth: 1,
    padding: 10,
    marginVertical: 30  }
});
