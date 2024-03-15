export const listItemTemplate = (item) => {
    let pokeImage = `https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/${item.name}.avif`
    let pokeNumber = `${item.url}`.split("https://pokeapi.co/api/v2/pokemon/", -1);
    return `
    
    <a href="detailed_pokemon.html?name=${item.name}"><li>${item.name}
    <img class="myPicture" src=${pokeImage}>
    
    
    </li>
    </a>`;
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
      out.innerHTML = "<li>Nothing to list here</li>"
  }
}

export function pokemonDetails(api, out) {
    let pokemon = api;
    const {name, sprites, types, abilities} = pokemon;
    out.innerHTML = `
    
    <div id="detailedDiv">
    <h1>${name}</h1>
    <img id="detailsImage" alt=${name} src=${sprites.other["official-artwork"].front_default}>
    <p>Type: ${types[0].type.name}</p>
    <p>Ability: ${abilities[0].ability.name}
    </div>
    
    `;
}