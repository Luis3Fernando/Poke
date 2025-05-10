import { API_HOST } from "../utils/constants";
const POKEMON_COUNT = 1010; 

export async function getPokemonsAPI(endpointUrl) {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpointUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonsDetailsByUrlAPI(url){
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function getPokemonDetailsAPI(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getRandomPokemon() {
  try {
    const randomId = Math.floor(Math.random() * POKEMON_COUNT) + 1;
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    const pokemonDetails = await getPokemonsDetailsByUrlAPI(pokemonUrl);
    return pokemonDetails;
  } catch (error) {
    throw error;
  }
}