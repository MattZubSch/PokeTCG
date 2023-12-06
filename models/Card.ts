export class Card {
    //properties
    private id: string;
    private name: string;
    private supertype: string;
    private subtype: string[];
    private hp: string;
    private types: string[];
    private evolvesFrom: string;
    private evolvesTo: string[];
    private abilities: IAbility[];
    private attacks: IAttack[];
    private weaknesses: IWeaknessResistance[];
    private resistances: IWeaknessResistance[];
    private setId: string;
    private number: string;
    private rarity: string;
    private flavorText: string;
    private nationalPokedexNumbers: number[];
    private images: IImagesCard;
    private cardmarket: ICardMarket;
    private quantity: number;
    // private obtained: ObtainedData[] = [];
    private wasObtaindedBefore: boolean;
    private isFavorite: boolean;

    //constructor
    constructor(id: string, name: string, supertype: string, subtype: string[], hp: string, types: string[], evolvesFrom: string, evolvesTo: string[], abilities: IAbility[], attacks: IAttack[], weaknesses: IWeaknessResistance[], resistances: IWeaknessResistance[], setId: string, number: string, rarity: string, flavorText: string, nationalPokedexNumbers: number[], images: IImagesCard, cardmarket: ICardMarket, quantity: number, wasObtaindedBefore: boolean, isFavorite: boolean) {
        this.id = id;
        this.name = name;
        this.supertype = supertype;
        this.subtype = subtype;
        this.hp = hp;
        this.types = types;
        this.evolvesFrom = evolvesFrom;
        this.evolvesTo = evolvesTo;
        this.abilities = abilities;
        this.attacks = attacks;
        this.weaknesses = weaknesses;
        this.resistances = resistances;
        this.setId = setId;
        this.number = number;
        this.rarity = rarity;
        this.flavorText = flavorText;
        this.nationalPokedexNumbers = nationalPokedexNumbers;
        this.images = images;
        this.cardmarket = cardmarket;
        this.quantity = quantity;
        this.wasObtaindedBefore = wasObtaindedBefore;
        this.isFavorite = isFavorite;
    }

    /**
     * createCard
     */
    public static createFromObject(cardData: ICard): Card {
        return new Card(
            cardData.id,
            cardData.name,
            cardData.supertype,
            cardData.subtype,
            cardData.hp.toString(), // Convertir a string según tu definición actual en la clase
            cardData.types,
            cardData.evolvesFrom,
            cardData.evolvesTo,
            cardData.abilities.map(ability => ({ name: ability.name, text: ability.text })),
            cardData.attacks.map(attack => ({ cost: attack.cost, name: attack.name, text: attack.text, damage: attack.damage })),
            cardData.weaknesses.map(weakness => ({ type: weakness.type, value: weakness.value })),
            cardData.resistances.map(resistance => ({ type: resistance.type, value: resistance.value })),
            cardData.setId,
            cardData.number,
            cardData.rarity,
            cardData.flavorText,
            cardData.nationalPokedexNumbers,
            cardData.images,
            cardData.cardmarket,
            cardData.quantity,
            cardData.wasObtainedBefore,
            cardData.isFavorite
        );
    }

    /**
     * setAtributes
     */
    public setAtributes() {
        
    }

}