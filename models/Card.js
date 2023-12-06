"use strict";
class Card {
    //constructor
    constructor(id, name, supertype, subtype, hp, types, evolvesFrom, evolvesTo, abilities, attacks, weaknesses, resistances, set, number, rarity, flavorText, nationalPokedexNumbers, images, tcgplayer, quantity, obtained, wasObtaindedBefore, isFavorite) {
        this.obtained = [];
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
        this.set = set;
        this.number = number;
        this.rarity = rarity;
        this.flavorText = flavorText;
        this.nationalPokedexNumbers = nationalPokedexNumbers;
        this.images = images;
        this.tcgplayer = tcgplayer;
        this.quantity = quantity;
        this.obtained = obtained;
        this.wasObtaindedBefore = wasObtaindedBefore;
        this.isFavorite = isFavorite;
    }
}
