export let collection = [];

export const out = document.querySelector("ul#myList");

export const listItemTemplate = (item) => {
    let pokeImage = `https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/${item.name}.avif`
    //let pokeNumber = `${item.url}`.split("https://pokeapi.co/api/v2/pokemon/", -1);
    return `
    
    <li id="pokepediaElement">${item.name}<a href="detailed_pokemon.html?name=${item.name}">
    <img class="myPicture" src=${pokeImage}>
    
    </a>
    </li>
    `;
}

export function listData(list, out) {
  out.innerHTML = "";
  let output = "";
  for (let item of list) {
      output += `${listItemTemplate(item)}`
  }
  if (output) {
      out.innerHTML = output;
  } else {
      out.innerHTML = "<li>Pokémon not found. Try again.</li>"
  }
}

export function pokemonDetails(api, out) {
    let pokemon = api;
    const {name, sprites, types, abilities, stats} = pokemon;
    out.innerHTML = `
    
    <h1 id="detailedName">${name}</h1>
    <div id="detailedDiv">
    <div>
    <img id="detailsImage" alt=${name} src=${sprites.other["official-artwork"].front_default}>
    <img id="detailsImage" alt=Shiny ${name} src=${sprites.other["official-artwork"].front_shiny}>
    </div>
    <div id="pokemonInfo">
    <p>Type: ${types.map((type) => type.type.name).join(', ')}</p>
    <p>Abilities: ${abilities.map((ability) => ability.ability.name).join(', ')}</p>
    <p>HP: ${stats[0].base_stat}</p>
    <p>Attack: ${stats[1].base_stat}</p>
    <p>Defense: ${stats[2].base_stat}</p>
    <p>Special-Attack: ${stats[3].base_stat}</p>
    <p>Special-Defense: ${stats[4].base_stat}</p>
    <p>Speed: ${stats[5].base_stat}</p>
    </div>
    </div>
    
    `;
}