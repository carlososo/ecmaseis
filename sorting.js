const frutas = ['manzana', 'banana', 'guanabana']

frutas.sort();

console.log(frutas);

// const misNumeros = [1, 20, 3, 5, 7, 9]

misNumeros.sort();



const datosPersonas = [{
        name: 'Carlos',
        age: 35
    },
    {
        name: 'Felipe',
        age: 20
    },
    {
        name: 'Lara',
        age: 10
    },
    {
        name: 'Sandy',
        age: 19
    }
]

datosPersonas.sort((a, b) => {
    //NEGATIVO: el primer elemento tiene que estar a la izquierda del segundo elemento
    //POSITIVO: el primer elemento tiene que estar a la derecha del segundo elemento 
    //0: cuando es 0 los elementos que se comparan son lo mismo 

    //SORT nomas sirve para arreglos
    return a.age - b.age;
})

console.log(datosPersonas);