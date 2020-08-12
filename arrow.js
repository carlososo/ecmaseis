function suma(a, b) {
    return a + b;
}


//arrow function nos evita escribir la palabra reservada function
const resultado = (a, b) => {
    return a + b;
}

//puede venir sin return, lleva un return implicito
const sumaDos = (a, b) => a + b;

console.log(resultado(10, 30));

const res = sumaDos(10, 20);
console.log(res);