import {listData, listItemTemplate, pokemonDetails} from "./utils.js";

let collection = []
let out = document.getElementById("myPokemon");
let output = document.getElementById("detailed_poke_title");

let params = new URL (document.location).searchParams;

let name = params.get("name");

async function getPokemonById() {
    try {
        const api = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const response = await fetch (api);
        const obj = await response.json();
        console.log(obj);
        collection = obj;
        console.log("My console log:" + " " + collection);
        
        document.title = collection.name.toUpperCase();
        pokemonDetails(collection, output);
    } catch (error) {
        console.error(error);
    }
}

getPokemonById();