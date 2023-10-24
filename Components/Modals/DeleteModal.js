import { StyleSheet, Text, View, Button, Modal } from 'react-native'
import React, {useState} from 'react'

export default function DeleteModal(props) { 
  const [visible, setVisible] = useState(false)

  const handleDelete = () => {
    // Call the onDelete function passed as a prop
    props.onDelete()
    // Hide the modal
    setVisible(false)
  }

    return (
      <View>
        <Button title="Delete" onPress={() => setVisible(true)} />
        <Modal visible={visible} animationType="slide">
          <View style={styles.modal}>
            <Text style={styles.text}>Seguro que quieres eliminar este item?</Text>
            <Text style={styles.text}>{props.item.name}</Text>
            <Button title="Delete" onPress={handleDelete} />
            <Button title="Cancel" onPress={() => setVisible(false)} />
          </View>
        </Modal>
      </View>
    )
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
})