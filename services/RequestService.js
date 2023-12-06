import axios from 'axios';

export async function getCardFromAPI(id){
    try {
        const response = await axios.get(`https://api.pokemontcg.io/v2/cards/${id}`);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error; // Re-lanza el error para que pueda ser manejado por el .catch en el componente
    }
}



// import axios from 'axios';

// export async function getCardFromAPI(id){
//     axios.get(`https://api.pokemontcg.io/v2/cards/${id}`)
//     .then((response) => {
//         return response.data
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }