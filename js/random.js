async function fetchRandomPokemon() {
    try {
        const generateRandomNumber = () => Math.ceil(Math.random() * 385);
        const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
        const out = document.querySelector("div#random_pokemon");
        const outImage = document.querySelector("img#random_image");
        const url = apiUrl + generateRandomNumber();
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Could not fetch random data");
        }
        const obj = await response.json();
        console.log(obj);
        out.innerHTML = `
        <h1>Your daily Pokémon</h1>
        <h1>${obj.name}</h1>
        <img id="randomImage" src=${obj.sprites.other["official-artwork"].front_default}>
        `
        
    } catch(error) {
        console.error(error);
    }
}

fetchRandomPokemon();

