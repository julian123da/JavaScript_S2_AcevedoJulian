let currentPokemon = 1;
const image = document.getElementById("pokemonImage");
const nameEl = document.getElementById("pokemonName");
const idEl = document.getElementById("pokemonId");
const input = document.getElementById("searchInput");

function fetchPokemon(identifier) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${identifier.toLowerCase()}`)
    .then(response => {
      if (!response.ok) throw new Error("No encontrado");
      return response.json();
    })
    .then(data => {
      currentPokemon = data.id;
      image.src = data.sprites.other['official-artwork'].front_default || '';
      nameEl.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      idEl.textContent = `#${String(data.id).padStart(3, "0")}`;
    })
    .catch(err => {
      image.src = "";
      nameEl.textContent = "Not found";
      idEl.textContent = "#???";
    });
}

function changePokemon(direction) {
  currentPokemon += direction;
  if (currentPokemon < 1) currentPokemon = 1;
  fetchPokemon(currentPokemon);
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = input.value.trim();
    if (value !== "") fetchPokemon(value);
    input.value = "";
  }
});
fetchPokemon(currentPokemon);