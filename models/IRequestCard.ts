//interfaz de Habilidad
interface IAbility {
    name: string;
    text: string;
}
//interfaz de Ataques
interface IAttack {
    cost: string[];
    name: string;
    text: string;
    damage: string;
}
//Interfaz de Debilidades y Resistencias
interface IWeaknessResistance {
    type: string;
    value: string;
}
//Interfaz de Imagenes
interface IImagesCard {
    small: string;
    large: string;
}

//Interfaz de CardMarket
interface ICardMarket {
    url: string;
    updatedAt: string;
    prices: {
        averageSellPrice: number;
    };
}
//Interfaz de Carta
interface ICard {
    id: string;
    name: string;
    supertype: string;
    subtype: string[];
    hp: number;
    types: string[];
    evolvesFrom: string;
    evolvesTo: string[];
    setId: string;
    number: string;
    rarity: string;
    flavorText: string;
    nationalPokedexNumbers: number[];
    quantity: number;
    wasObtainedBefore: boolean;
    isFavorite: boolean;
    abilities: IAbility[];
    attacks: IAttack[];
    weaknesses: IWeaknessResistance[];
    resistances: IWeaknessResistance[];
    images: IImagesCard;
    cardmarket: ICardMarket;
}
