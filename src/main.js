import data from "./data/pokemon/pokemon.js";
import { filterByRegion } from "./data.js";
import { filterByType } from "./data.js";
import { sortBy } from "./data.js";
import { calcPercentage } from "./data.js";
import { filterSearch } from "./data.js";

const everyPokemon = data.pokemon;
const btnReset = document.getElementById("button-reset");
const btnWorld = document.getElementById("button-world");
const btnKanto = document.getElementById("button-kanto");
const btnJohto = document.getElementById("button-johto");
const cards = document.getElementById("cards");
const select = document.getElementById("selectType");
let selectOrder = document.getElementById("select-cp");
const statsType = document.getElementById("stats-type");
const inputSearch = document.getElementById("input-search");
const inicialDisplay = document.querySelector(".inf-world-pokemon");
const selects = document.querySelector(".btn-select");
const search = document.querySelector(".search");

btnReset.addEventListener("click", (event) => {
  location.reload(event);
});

const createCards = (listPokemon) => {
  let infoPokemon = listPokemon.map(
    (pokemon) =>
      `<div class="one-container">
    
    <div class= "second-container">
    
    <div class="third-container">
    <p class= "text-name-number" >
    rarity:${pokemon["pokemon-rarity"]}
                <b>${pokemon.num} ${pokemon.name.toUpperCase()}</b>
                 type:${pokemon.type}
                </p>

                <img class = "image-pokemon" src=${pokemon.img} />

                <p class = "text-pokemon-stats" >max-cp: ${
                  pokemon.stats["max-cp"]
                } max-hp:${pokemon.stats["max-hp"]} 
                height:${pokemon.size.height} weight:${pokemon.size.weight}
                </p>
                </div>

                <p class = "text-about">
                About: ${pokemon.about}
                </p>
                <p class = "text-egg">egg: ${pokemon.egg}. 
                buddy distance km: ${pokemon["buddy-distance-km"]}
                </p>
            <hr>
            <div>
            <p class="text-resistant">
            resistant: ${pokemon.resistant}
            weaknesses: ${pokemon.weaknesses}
            </p>
            <p class="attack-defense-stamina">
            base attack:${pokemon.stats["base-attack"]}
            base defense:${pokemon.stats["base-defense"]}
            base stamina:${pokemon.stats["base-stamina"]}
            </p>
            </div>           
            </div>
            </div>
            `
  );
  return infoPokemon.join(" ");
};

let pokemonsToBeShown = [];
let sortpokemon = [];
btnKanto.addEventListener("click", function () {
  btnKanto.style.background = "#FDDDE2";
  btnJohto.style.background = "white";
  btnWorld.style.background = "white";
  inicialDisplay.style.display = "none";
  selects.style.display = "block";
  search.style.display = "inline";
  let result = filterByRegion(everyPokemon, "kanto");
  let infoKanto = createCards(result);
  cards.innerHTML = infoKanto;
  pokemonsToBeShown = result;
  sortpokemon = result;
});

btnJohto.addEventListener("click", function () {
  btnJohto.style.background = "#FDDDE2";
  btnKanto.style.background = "white";
  btnWorld.style.background = "white";
  inicialDisplay.style.display = "none";
  selects.style.display = "block";
  search.style.display = "inline";
  let result = filterByRegion(everyPokemon, "johto");
  let infoJohto = createCards(result);
  cards.innerHTML = infoJohto;
  pokemonsToBeShown = result;
  sortpokemon = result;
});

btnWorld.addEventListener("click", function () {
  btnWorld.style.background = "#FDDDE2";
  btnKanto.style.background = "white";
  btnJohto.style.background = "white";
  inicialDisplay.style.display = "none";
  selects.style.display = "block";
  search.style.display = "inline";
  let infoPokemons = createCards(everyPokemon);
  cards.innerHTML = infoPokemons;
  pokemonsToBeShown = everyPokemon;
  sortpokemon = everyPokemon;
});

select.addEventListener("change", function () {
  const type = select.value;
  const resultType = filterByType(pokemonsToBeShown, type);
  const pokeType = createCards(resultType);
  cards.innerHTML = pokeType;
  sortpokemon = resultType;
  let typePercentage = calcPercentage(
    pokemonsToBeShown.length,
    resultType.length
  );
  
  statsType.innerHTML =
    Math.round(typePercentage) + "% dos Pokémon são desse tipo!";
});

selectOrder.addEventListener("change", function () {
  let maxCp = selectOrder.value;
  let result = sortBy(sortpokemon, maxCp);
  let pokeCpHp = createCards(result);
  cards.innerHTML = pokeCpHp;
});

inputSearch.addEventListener("input", () => {
  let text = inputSearch.value;
  let textlowercase = text.toLowerCase();
  let result = filterSearch(everyPokemon, textlowercase);
  cards.innerHTML = createCards(result);
});
