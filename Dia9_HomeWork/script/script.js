let currentPokemon = 1;

const image = document.getElementById("pokemonImage");
const name = document.getElementById("pokemonName");
const id = document.getElementById("pokemonId");
const input = document.getElementById("searchInput");

function fetchPokemon(pokemon) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      image.src = data.sprites.other['official-artwork'].front_default;
      name.textContent = data.name;
      id.textContent = `#${data.id.toString().padStart(3, '0')}`;
      currentPokemon = data.id;
    } else {
      name.textContent = 'Not Found';
      id.textContent = '#000';
      image.src = '';
    }
  };
  xhr.send();
}

f