import { filterBy } from "./data.js"; // Função Iportada da data.js
import data from "./data/pokemon/pokemon.js";
console.log(data);

const radioWorld = document.getElementById("radioWorld"); // Seletor de radio para Mundo
const radioKanto = document.getElementById("radioKanto"); // Seletor do radio para Kanto
const radioJohto = document.getElementById("radioJohto"); // Seletor do radio para Johto
const cards = document.getElementById("cards"); // Aqui as cartas irão aparecer

radioWorld.addEventListener("check", function () { //Aqui o evento do clique vai acontecer
  const filterByPokemon = filterBy.Pokemon(); //Aqui a variável recebe a função de filtro
  cards.value = filterByPokemon; //Aqui o resultado do filtro aparece no HTML
});

radioKanto.addEventListener("check", function () {
  const filterByKanto = filterBy.Kanto();
  cards.value = filterByKanto
 });

radioJohto.addEventListener("check", function () {
  const filterByJohto = filterBy.Johto();
  cards.value = filterByJohto;
});
