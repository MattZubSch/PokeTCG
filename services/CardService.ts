import { Card } from "../models/Card";
import { Ability } from "../models/CardAtributes/Ability";
import { Attack } from "../models/CardAtributes/Attack";
import { Weakness } from "../models/CardAtributes/Weakness";
import { Resistances } from "../models/CardAtributes/Resistances";
import { ImagesCard } from "../models/CardAtributes/ImagesCard";
import { CardMarket } from "../models/CardAtributes/CardMarket";


export function convertFromJson(jsonData: any): Card {
        console.log("ingresa a convertFromJson")
        const request: any = jsonData
        // console.log(request)

        const ability: Ability[] = request.abilities.map((ability: IAbility) => Ability.createAbility(ability));
        console.log("Habilidades: ")
        console.log(ability)

        const attack: Attack[] = request.attacks.map((attack: IAttack) => Attack.createAttack(attack));
        console.log("Ataques: ")
        console.log(attack)

        const weakness: Weakness[] = request.weaknesses.map((weakness: IWeaknessResistance) => Weakness.createWeakness(weakness));
        console.log("Debilidades: ")
        console.log(weakness)

        const resistance: Resistances[] = request.resistances.map((resistance: IWeaknessResistance) => Resistances.createResistances(resistance));
        console.log("Resistencias: ")
        console.log(resistance)

        const images: ImagesCard = ImagesCard.createImagesCard(request.images);
        console.log("Imagenes: ")
        console.log(images)

        const cardmarket: CardMarket = CardMarket.createCardMarket(request.cardmarket);
        console.log("CardMarket: ")
        console.log(cardmarket)


        const cardData: ICard = {
            id: request.id,
            name: request.name,
            supertype: request.supertype,
            subtype: request.subtype,
            hp: request.hp,
            types: request.types,
            evolvesFrom: request.evolvesFrom,
            evolvesTo: request.evolvesTo,
            abilities: ability,
            attacks: attack,
            weaknesses: weakness,
            resistances: resistance,
            setId: request.setId,
            number: request.number,
            rarity: request.rarity,
            flavorText: request.flavorText,
            nationalPokedexNumbers: request.nationalPokedexNumbers,
            images: images,
            cardmarket: cardmarket,
            quantity: 0,
            wasObtainedBefore: false,
            isFavorite: false
        };

    const cardInstance: Card = Card.createFromObject(cardData);
    return cardInstance;
}

