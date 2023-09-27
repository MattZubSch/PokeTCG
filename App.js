import { StyleSheet, Text, View, TextInput, Button, Modal, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React, {useState} from 'react';


export default function App() {

  const [itemList, setItemList] = useState([]);
  const [textItem, setTextItem] = useState("");

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandlerChangeItem = (t) => setTextItem(t);

  const onHandlerDelete = (id) => {
    setItemList(currentItems => {
      currentItems.filter(item => item.id !== id)
    })
    setItemSelected({});
    setModalVisible(!modalVisible)
  }

  const onHandlerModal = id => {
    setItemSelected(itemList.find(item => item.id === id)[0])
    setModalVisible(!modalVisible)
  }

  const addItem = () => {
    setItemList(currentItems => [
      ...currentItems, 
      {id: Math.random().toString(), value: textItem}  
    ])
    setTextItem("");
  }

  return (
    <View style={styles.screen}>
      <Modal 
      visible={modalVisible}
      animationType='slide'
      >

        <View style={styles.modalTitle}>
          <Text>Borrar Item</Text>
        </View>
        <View style={styles.modalMessage}>
          <Text>Esta Seguro que quiere borrar?</Text>
        </View>
        <View style={styles.ModalItem}>
          <Text>{itemSelected.value}</Text>
        </View>
        <View style={styles.modalButton}>
          <Button title="BORRAR" onPress={onHandlerDelete.bind(this, itemSelected.id)} />
        </View>
      </Modal>

      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Item de Lista" 
        style={styles.input} 
        onChangeText={onHandlerChangeItem}
        value={textItem}
        />
        <Button title="AGREGAR" 
        onPress={addItem}
        />
      </View>
      <View style={styles.itemList}>
        {/* Lista de Items */}
        {/* {itemList.map(item => 
          <View style={styles.item}>
            <Text>{item.value}</Text>
            <Button title="X" />
          </View>
        )}     */}
        <FlatList 
          data={itemList}
          renderItem={data => (
            <TouchableOpacity
            onPress={onHandlerModal.bind(this, data.item.id)}
            >
              <View style={styles.item}>
                <Text>{data.item.value}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />


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
    marginVertical: 30},
    modalTitle: {
      backgroundColor: "#ccc",
      color: "white",
      fontSize: 20,
  },
  modalMessage: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  modalButton: {
    marginTop: 10
  },
  ModalItem: {
    fontSize: 30,
  }
});
