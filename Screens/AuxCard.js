import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect} from 'react'
import { getCardFromAPI } from '../services/RequestService'
import { convertFromJson} from '../services/CardService'

const AuxCard = () => {
    
    const [card, setCard] = useState(null);

    useEffect(() => {
        getCardFromAPI('xy7-53')
            .then((cardData) => {
                console.log(cardData);
                // Realiza cualquier otra operación con los datos aquí
                const card = convertFromJson(cardData)
                console.log("Carta impresa: ")
                console.log(card.name)
                setCard(card);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    if (!card) {
        return (
            <View style={styles.container}>
                <Text>Cargando...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleName}>{card.name}</Text>
                <Text style={styles.titleNumber}>{card.nationalPokedexNumbers}</Text>
            </View>
            <Image
                style={{width: 200, height: 200}}
                source={{uri: card.images.large}}
            />
        </View>
    )
}

export default AuxCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    titleName: {
        fontSize: 20,
        fontFamily: 'MontserratBold',
        color: 'black',
    },
    titleNumber: {
        fontSize: 20,
        fontFamily: 'Montserrat',
        color: 'grey',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ACC8E5',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
})