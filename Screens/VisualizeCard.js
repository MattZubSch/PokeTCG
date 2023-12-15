import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import React, { useState, useEffect} from 'react'
import { getCardFromAPI } from '../services/RequestService'
import { convertFromJson} from '../services/CardService'

const VisualizeCard = ({route}) => {
    const { id } = route.params;
    const [card, setCard] = useState(null);
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

    let hpBar = '0%'

    useEffect(() => {
        // console.log('xy7-' + id.toString())
        getCardFromAPI('xy7-' + id.toString())
            .then((cardData) => {
                // console.log(cardData);
                // Realiza cualquier otra operación con los datos aquí
                const card = convertFromJson(cardData)
                console.log("Carta impresa: ")
                console.log(card.name)
                setCard(card);
                console.log(card)
            })
            .catch((error) => {
                console.log('Error al obtener los datos: ')
                console.error(error);
                setCard(false);
            });
    }, []);

    if (card === null) {
        return (
            <View style={styles.container}>
                <Text>Cargando...</Text>
            </View>
        )
    }

    if (!card) {
        return (
            <View style={styles.container}>
                <Text>Error al obtener los datos.</Text>
                <Text>El ID ingresado no existe dentro del Set</Text>
            </View>
        )
    }

    if (card) {
        let hp100 = card.hp * 100 / 300
        hpBar = hp100 + '%'
        console.log(hpBar)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleName}>{card.name} </Text>
                    <Text style={styles.titleNumber}> #{card.nationalPokedexNumbers}</Text>
                </View>
                <View>
                    <Image
                        source={{uri: card.images.large}}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.dataContainer}>
                    <View style={styles.statsContainer}>
                        <View style={styles.hpContainer}>
                            <Text style={{width: '15%'}}>HP: </Text>
                            <View style={styles.hp}>
                                <View style={{width: hpBar , height: 10, backgroundColor: 'red'}}></View>
                            </View>
                            <Text style={{width: '15%'}}>{card.hp}</Text>    
                        </View>
                        <View style={styles.typesContainer}>
                            <View style={styles.typeContainer}>
                                <Text style={styles.typeTitleText}>Types</Text>
                                {card.types.map((type) => {
                                    return (
                                        <Text style={styles.typeText}>{type}</Text>
                                    )} 
                                )}
                            </View>
                            <View style={styles.subtypeContainer}>
                                {card.subtypes.map((subtype) => {
                                    return (
                                        <Text style={styles.typeText}>{subtype.toUpperCase()}</Text>
                                    )}
                                )}
                            </View>
                        </View>
                    </View>
                    <View style={styles.textAndWeaknessesContainer}>
                        <View style={styles.flavorRulesContainer}>
                            {card.flavorText && <Text style={styles.flavorRulesText}>{card.flavorText}</Text>}
                            {card.rules && <Text style={styles.flavorRulesText}>{card.rules}</Text>}
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default VisualizeCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center', 
        minHeight: '100vh'
        // justifyContent: 'center',
    },
    titleName: {
        fontSize: 20,
        fontFamily: 'MontserratBold',
        color: 'black',
    },
    titleNumber: {
        fontSize: 16,
        fontFamily: 'Montserrat',
        color: 'grey',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#ACC8E5',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '100%',
    },
    image: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.5,
        marginVertical: 20,
    },
    dataContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ACC8E5',
        borderTopColor: 'black',
        borderTopWidth: 1,
        width: '100%',
        height: '100%'
    },
    statsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 5,
        marginVertical: 5,
    },
    hpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
    },
    hp: {
        width: '60%',
        height: 10,
        backgroundColor: 'grey',
        marginHorizontal: 5,
    },
    typesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '50%',
    },
    typeContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    typeTitleText:{
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: 'black',
    },
    typeText: {
        fontSize: 12,
        fontFamily: 'MontserratBold',
        color: 'black',
    },
    subtypeContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textAndWeaknessesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        padding: 5,
        marginVertical: 5,
    },
    flavorRulesContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        padding: 5,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
    },
    flavorRulesText: {
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: 'black',
    },
})