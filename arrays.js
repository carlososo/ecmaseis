//map

const MyArray = [1, 2, 3, 4, 5]

//map convierte un arreglo en otro arreglo distinto

const arrayCuadrado = MyArray.map((numero) => {
    return numero ** 2 //siempre tengo que devolver un valor
})

console.log(arrayCuadrado);