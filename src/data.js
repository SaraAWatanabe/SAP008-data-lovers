import data from "./data/pokemon/pokemon.js"
console.log (data)
//export const example = () => {
//  return 'example';
//};
//export const anotherExample = () => {
 // return 'OMG';
//};
const filterBy = {

World: function (data){

return data.pokemon
console.log (data.pokemon)
}

let filterByPokemon = data.filter(World)

return filterByPokemon

},

Kanto: function (data){

    return data.pokemon.generation[2]
},

Johto: function (data) {
  
}

export default filterBy


 
