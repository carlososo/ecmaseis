//arrays

let miArreglo = ['amarillo', 'rojo', 'azul']
let miArregloDos = [...miArreglo, 'verde', 'morado']
console.log(miArreglo);
console.log(miArregloDos);

//Objetos

const Pokemons = {
    id: 4,
    name: 'Charmander',
    type: 'Fuego'
}

const complementoPokemon = {
    attack: 'Mordisco',
}

const PokemonCompleto = {
    ...Pokemons,
    ...complementoPokemon,
}

console.log(PokemonCompleto);