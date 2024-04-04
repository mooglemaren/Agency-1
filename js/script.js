
import {listData, collection, out} from "./utils.js";


const image = document.querySelector("img#myImage");

const api = `https://pokeapi.co/api/v2/pokemon/`;
//console.log(collection);
//let collection = [];

async function fetchKantoPokemon() {
    try {
        const out = document.querySelector("ul#myList");
        const url = "https://pokeapi.co/api/v2/pokemon?limit=385";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Could not fetch data");
        }
        const obj = await response.json();
        //console.log(obj.results, typeof obj.results);
        
        for (let item of obj.results) {
            collection.push(item);
        }
        //console.log(collection, typeof collection);
        getTypes();
        listData(collection, out);
        
    } catch(error) {
        console.error(error);
    }
}

   fetchKantoPokemon();

const queryString = document.getElementById("inputField");
queryString.addEventListener("keyup", filterCards);

function filterCards() {
    const filterQuery = queryString.value;
    console.log(filterQuery);

    const filtered = collection.filter((card)=>{
        return card.name.toUpperCase().indexOf(filterQuery.toUpperCase()) > -1;
    });
    console.log(collection.length, filtered.length);

    listData (filtered, out);
}

async function getTypes() {
    let select = document.getElementById("type");

    //console.log(collection);
    for (let item of collection) {
        //item.types = ["dill"];
        let data = await getData(item.name);
        //console.log(data);
        item.types = data.myTypeArray;
        item.abilities = data.myAbilities;
    }
    console.log(collection);
    select.removeAttribute("disabled");
}

async function getData(itemName) {
    try {
        const api = `https://pokeapi.co/api/v2/pokemon/${itemName}`;
        const response = await fetch (api);
        const obj = await response.json();
        //console.log(obj.types);
        let myTypeArray = [];
        let myAbilities = [];
        for (let item of obj.types) {
            //console.log(item.type.name)
            myTypeArray.push(item.type.name);
        } 
        for (let item of obj.abilities) {
            myAbilities.push(item.ability.name);
            
        }
        return {myTypeArray, myAbilities};
    } catch (error) {
        console.error(error);
        return [];
    }
    
}