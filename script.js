
import {listData} from "./utils.js";

const out = document.querySelector("ul#myList");
const image = document.querySelector("img#myImage");

const api = `https://pokeapi.co/api/v2/pokemon/`;

let collection = [];

fetchData();

async function fetchData() {

    try {
        const pokemonName = document.getElementById("inputField").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        console.log(data);
        //console.log(data.sprites.versions["generation-viii"].icons.front_default);
        const pokemonSprite = data.sprites.other["official-artwork"].front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    } catch(error) {
        console.error(error);
    }
}

const button = document.getElementById("myButton");
button.addEventListener("click", event => {
    fetchData();

})