
export const filterByRegion = (pokemons, region) =>
pokemons.filter((pokemon) => pokemon.generation.name === region);

export const filterByType = (pokemons, type) =>
    pokemons.filter((pokemon) => pokemon.type.includes(type));

export const sortBy = (pokemons, value) =>{
        console.log(pokemons, prop)
        return pokemons.sort((a, b) =>{
                if (value == "max-cp-biggest") {
                  return a.stats["max-cp"] - b.stats["max-cp"];
                }
                if (value == "max-cp-smallest") {
                  return b.stats["max-cp"] - a.stats["max-cp"];
                }

                return 0;
              });
}

// export const sortBy = (pokemons, prop) =>{
//         console.log(pokemons)
//         return pokemons.sort((a, b)=> a[prop] - b[prop])

// }


        
        
      



