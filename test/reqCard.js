const axios = require('axios');

async function getCardFromAPI(id){
    try {
        const response = await axios.get(`https://api.pokemontcg.io/v2/cards/${id}`);
        
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error; // Re-lanza el error para que pueda ser manejado por el .catch en el componente
    }
}

//acumuladores de subtipos
let acBasic = 0;
let acStage1 = 0;
let acStage2 = 0;
let acMega = 0;
let acEX = 0;

//acumuladores de atributos
// Acumuladores
let AcId = 0;
let AcName = 0;
let AcSupertype = 0;
let AcSubtype = 0;
let AcHp = 0;
let AcTypes = 0;
let AcEvolvesFrom = 0;
let AcEvolvesTo = 0;
let AcAbilities = 0;
let AcAttacks = 0;
let AcWeaknesses = 0;
let AcResistances = 0;
let AcSetId = 0;
let AcNumber = 0;
let AcRarity = 0;
let AcFlavorText = 0;
let AcNationalPokedexNumbers = 0;
let AcImages = 0;
let AcCardmarket = 0;



async function filterData(id, j) {
    try {
        const cardData = await getCardFromAPI('xy7-' + id.toString());
        if (cardData.id != undefined) {
            AcId++;
        }
        if (cardData.name != undefined) {
            AcName++;
        }
        if (cardData.supertype != undefined) {
            AcSupertype++;
        }
        if (cardData.subtype != undefined) {
            AcSubtype++;
        }
        if (cardData.hp != undefined) {
            AcHp++;
        }
        if (cardData.types != undefined) {
            AcTypes++;
        }
        if (cardData.evolvesFrom != undefined) {
            AcEvolvesFrom++;
        }
        if (cardData.evolvesTo != undefined) {
            AcEvolvesTo++;
        }
        if (cardData.abilities != undefined) {
            AcAbilities++;
        }
        if (cardData.attacks != undefined) {
            AcAttacks++;
        }
        if (cardData.weaknesses != undefined) {
            AcWeaknesses++;
        }
        if (cardData.resistances != undefined) {
            AcResistances++;
        }
        if (cardData.set.id != undefined) {
            AcSetId++;
        }
        if (cardData.number != undefined) {
            AcNumber++;
        }
        if (cardData.rarity != undefined) {
            AcRarity++;
        }
        if (cardData.flavorText != undefined) {
            AcFlavorText++;
        }
        if (cardData.nationalPokedexNumbers != undefined) {
            AcNationalPokedexNumbers++;
        }
        if (cardData.images != undefined) {
            AcImages++;
        }
        if (cardData.cardmarket != undefined) {
            AcCardmarket++;
        }
        console.clear();
        console.log("Procesando Carta " + id + "/" + j);
        console.log(cardData)
    } catch (error) {
        console.error(error);
    }
}

let j = 30;

async function fetchDataSequentially() {
    for (let i = 60; i < j+60; i++) {
        await filterData(i, j);
    }
    console.clear();
    console.log("Proceso terminado");
    console.log('Elementos presentes en cada carta: ');
    console.log("id: " + AcId);
    if (AcId == j) {
        console.log("Id presente en todos los elementos");
    }
    if (AcName == j) {
        console.log("Name presente en todos los elementos");
    }
    if (AcSupertype == j) {
        console.log("Supertype presente en todos los elementos");
    }
    if (AcSubtype == j) {
        console.log("Subtype presente en todos los elementos");
    }
    if (AcHp == j) {
        console.log("Hp presente en todos los elementos");
    }
    if (AcTypes == j) {
        console.log("Types presente en todos los elementos");
    }
    if (AcEvolvesFrom == j) {
        console.log("EvolvesFrom presente en todos los elementos");
    }
    if (AcEvolvesTo == j) {
        console.log("EvolvesTo presente en todos los elementos");
    }
    if (AcAbilities == j) {
        console.log("Abilities presente en todos los elementos");
    }
    if (AcAttacks == j) {
        console.log("Attacks presente en todos los elementos");
    }
    if (AcWeaknesses == j) {
        console.log("Weaknesses presente en todos los elementos");
    }
    if (AcResistances == j) {
        console.log("Resistances presente en todos los elementos");
    }
    if (AcSetId == j) {
        console.log("SetId presente en todos los elementos");
    }
    if (AcNumber == j) {
        console.log("Number presente en todos los elementos");
    }
    if (AcRarity == j) {
        console.log("Rarity presente en todos los elementos");
    }
    if (AcFlavorText == j) {
        console.log("FlavorText presente en todos los elementos");
    }
    if (AcNationalPokedexNumbers == j) {
        console.log("NationalPokedexNumbers presente en todos los elementos");
    }
    if (AcImages == j) {
        console.log("Images presente en todos los elementos");
    }
    if (AcCardmarket == j) {
        console.log("Cardmarket presente en todos los elementos");
    }

    // console.log("id: " + AcId);
    // console.log("name: " + AcName);
    // console.log("supertype: " + AcSupertype);
    // console.log("subtype: " + AcSubtype);
    // console.log("hp: " + AcHp);
    // console.log("types: " + AcTypes);
    // console.log("evolvesFrom: " + AcEvolvesFrom);
    // console.log("evolvesTo: " + AcEvolvesTo);
    // console.log("abilities: " + AcAbilities);
    // console.log("attacks: " + AcAttacks);
    // console.log("weaknesses: " + AcWeaknesses);
    // console.log("resistances: " + AcResistances);
    // console.log("setId: " + AcSetId);
    // console.log("number: " + AcNumber);
    // console.log("rarity: " + AcRarity);
    // console.log("flavorText: " + AcFlavorText);
    // console.log("nationalPokedexNumbers: " + AcNationalPokedexNumbers);
    // console.log("images: " + AcImages);
    // console.log("cardmarket: " + AcCardmarket);
}

// fetchDataSequentially()
filterData(7, 1)

