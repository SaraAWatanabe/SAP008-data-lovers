
export const filterByRegion = (pokemons, region) => 
        pokemons.filter(pokemon => pokemon.generation.name===region)

export const filterByType = (pokemons, type) => 
        pokemons.filter(pokemon => pokemon.type.includes(type))

// export const sortBy = (pokemons, prop) =>{
//         //console.log(pokemons, prop)
//         return pokemons.sort((a, b) =>{
//                 if (prop == max-cp-biggest) {
//                   return a[prop] - b[prop];
//                 }
//                 if (prop == max-cp-smallet) {
//                   return -1;
//                 }

//                 return 0;
//               });
// }


        
        
      



