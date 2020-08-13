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

// console.log(Object.keys(ejercicio1.responses[0].answers));
const keys = Object.keys(ejercicio1.responses[0].answers);

let primero =0;
let segundo =0;


for (let i = 0; i < keys.length; i++) {
    const currentKey = keys[i];
    if(currentKey =="2020-01-01"){
    const elementoInterior =(ejercicio1.responses[0].answers[currentKey])
    for(let j=0; j<elementoInterior.length; j++){
        // console.log(elementoInterior[j].answer)
        if(elementoInterior[j].answer== "SI"){
           primero++;
        }
    }
    
}else if(currentKey =="2020-02-02"){
    const elementoInterior =(ejercicio1.responses[0].answers[currentKey])
    for(let j=0; j<elementoInterior.length; j++){
        // console.log(elementoInterior[j].answer)
        if(elementoInterior[j].answer== "SI"){
           segundo++;
        }
    }
  
}
elementoInterior:primero}


console.log(ejercicio1.responses[0].answers)