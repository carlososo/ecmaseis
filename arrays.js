//map

const MyArray = [1, 2, 3, 4, 5]

//map convierte un arreglo en otro arreglo distinto

const arrayCuadrado = MyArray.map((numero) => {
    return numero ** 2 //siempre tengo que devolver un valor
})

console.log(arrayCuadrado);

const miarray = [{
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

const valorArreglo = miarray.filter((persona) => {
    return persona.age >= 20
})

const miOtroArregloNombres = valorArreglo.map(persona => persona.name)
console.log(miOtroArregloNombres);

const ArrayEnTodo = miarray.filter((persona) =>
        persona.age >= 20)
    .map((persona) => persona.name)
console.log(ArrayEnTodo);