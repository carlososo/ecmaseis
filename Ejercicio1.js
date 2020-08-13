const ejercicio1 = {
    "responses": [{
            "question": "¿te gusta el pan?",
            "answers": {
                "2020-01-01": [{
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "NO",
                    "selected": true
                }],
                "2020-02-02": [{
                    "answer": "NO",
                    "selected": true
                }, {
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "SI",
                    "selected": true
                }]
            }
        },
        {
            "question": "¿te gusta el queso?",
            "answers": {
                "2020-01-01": [{
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "NO",
                    "selected": true
                }, {
                    "answer": "NO",
                    "selected": true
                }, {
                    "answer": "NO",
                    "selected": true
                }],
                "2020-02-02": [{
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "NO",
                    "selected": true
                }, {
                    "answer": "SI",
                    "selected": true
                }]
            }
        }
    ]
}

const keys = Object.keys(ejercicio1.responses[0].answers);
let pruebas = []
for (let i = 0; i < keys.length; i++) {
    const currentKey = keys[i];
    pruebas = ejercicio1.responses.map((responses) => {
        return responses.answers[currentKey]
            .filter((valor) => {
                return valor.selected === true
            })
    })
}

console.log(pruebas);

// console.log(Object.keys(ejercicio1.responses[0].answers));


let primero = 0;
let segundo = 0;
let tercero = 0;
let cuarto = 0;


for (let i = 0; i < keys.length; i++) {
    const currentKey = keys[i];
    if (currentKey == "2020-01-01") {
        const elementoInterior = (ejercicio1.responses[0].answers[currentKey])
        for (let j = 0; j < elementoInterior.length; j++) {
            // console.log(elementoInterior[j].answer)
            if (elementoInterior[j].answer == "SI") {
                primero++;
            }
        }


    } else if (currentKey == "2020-02-02") {
        const elementoInterior = (ejercicio1.responses[0].answers[currentKey])
        for (let j = 0; j < elementoInterior.length; j++) {
            // console.log(elementoInterior[j].answer)
            if (elementoInterior[j].answer == "SI") {
                segundo++;
            }
        }

    }
}

for (let i = 0; i < keys.length; i++) {
    const currentKey = keys[i];
    if (currentKey == "2020-01-01") {
        const elementoInterior = (ejercicio1.responses[1].answers[currentKey])
        for (let j = 0; j < elementoInterior.length; j++) {
            // console.log(elementoInterior[j].answer)
            if (elementoInterior[j].answer == "SI") {
                tercero++;
            }
        }


    } else if (currentKey == "2020-02-02") {
        const elementoInterior = (ejercicio1.responses[1].answers[currentKey])
        for (let j = 0; j < elementoInterior.length; j++) {
            // console.log(elementoInterior[j].answer)
            if (elementoInterior[j].answer == "SI") {
                cuarto++;
            }
        }

    }
}



const ejercicio2 = {
    "responses": [{
        "question": "¿te gusta el pan?",
        "answers": {
            "2020-01-01": primero,
            "2020-02-02": segundo,
        }
    }, {
        "question": "¿te gusta el queso?",
        "answers": {
            "2020-01-01": tercero,
            "2020-02-02": cuarto,
        }
    }]
}

console.log(JSON.stringify(ejercicio2));