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
// const keys = Object.keys(ejercicio1.responses[0].answers);

const keys = Object.values(ejercicio1.responses[0].answers);
// console.log(keys)

for (let i = 0; i < keys.length; i++) {
    const currentKey = keys[i];
    console.log(currentKey);
    console.log(ejercicio1.responses[0].answers)
}