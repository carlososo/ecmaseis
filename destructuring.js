'use strict'

//destructuring objetos

const miObjeto = {
    id: 1,
    name: 'manzana',
    emoji: '🍎',
    color: 'rojo',
    precio: 30,
}

// console.log(miObjeto);
// const dulce = true;

// miObjeto.dulce = dulce;

// console.log(miObjeto);

// const name = miObjeto.name;


// const { name, id: identificador } = miObjeto;

// console.log(name, identificador)


//destructuring de arreglos

const array = ['papa', 'cebolla', 'chayote'];

// const laPapa = array[0];
// const elChayote = array[2];

const [laPapa, LaCebolla, elChayote] = array

console.log(laPapa);
console.log(elChayote);