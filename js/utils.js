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
    
    <div id="detailedDiv">
    <h1>${name}</h1>
    <img id="detailsImage" alt=${name} src=${sprites.other["official-artwork"].front_default}>
    <p>Type: ${types[0].type.name}</p>
    <p>Ability: ${abilities[0].ability.name}
    <p>Stats: ${stats[0].base_stat}
    </div>
    
    `;
}


