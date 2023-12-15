import { Card } from "../models/Card";
import { Ability } from "../models/CardAtributes/Ability";
import { Attack } from "../models/CardAtributes/Attack";
import { Weakness } from "../models/CardAtributes/Weakness";
import { Resistances } from "../models/CardAtributes/Resistances";
import { ImagesCard } from "../models/CardAtributes/ImagesCard";
import { CardMarket } from "../models/CardAtributes/CardMarket";


export function convertFromJson(jsonData: any): Card {
    // console.log("ingresa a convertFromJson")
    const request: any = jsonData
    // console.log(request)

    const abilities: Ability[] = (request.abilities || []).map((ability: IAbility) => Ability.createAbility(ability));
    // console.log("Habilidades: ");
    // console.log(abilities);

    const attacks: Attack[] = (request.attacks || []).map((attack: IAttack) => Attack.createAttack(attack));
    // console.log("Ataques: ");
    // console.log(attacks);

    const weaknesses: Weakness[] = (request.weaknesses || []).map((weakness: IWeaknessResistance) => Weakness.createWeakness(weakness));
    // console.log("Debilidades: ");
    // console.log(weaknesses);

    const resistances: Resistances[] = (request.resistances || []).map((resistance: IWeaknessResistance) => Resistances.createResistances(resistance));
    // console.log("Resistencias: ");
    // console.log(resistances);

    const images: ImagesCard = ImagesCard.createImagesCard(request.images);
    // console.log("Imagenes: ");
    // console.log(images);

    const cardmarket: CardMarket = CardMarket.createCardMarket(request.cardmarket);
    // console.log("CardMarket: ");
    // console.log(cardmarket);

    const cardData: ICard = {
        id: request.id,
        name: request.name,
        supertype: request.supertype,
        subtypes: request.subtypes,
        hp: request.hp,
        types: request.types,
        evolvesFrom: request.evolvesFrom,
        evolvesTo: request.evolvesTo,
        rules: request.rules,
        abilities: abilities,
        attacks: attacks,
        weaknesses: weaknesses,
        resistances: resistances,
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

