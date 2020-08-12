'use strict'
const miArray = ["manzana", "pera", "platano", "kiwi"]

// for normal
// for (let i = 0; i < miArray.length; i++) {
//     console.log(miArray[i]);
// }

// forEach
// miArray.forEach(function(element, index) {
//     console.log(element, index);

// })


const miArregloDos = ["😁", "🙄", "😥"]

// miArregloDos.forEach((elemento) => {
//     console.log(elemento);
// })


//for of
for (let emoji of miArregloDos) {
    console.log(emoji);
}

//for in

for (let emoji in miArregloDos) {
    console.log(emoji)
}