// Initialize dataset
const DATASET = require('./tech-track-dataset.json');

// Promise function called cleanData to process data
function cleanData() {
    return new Promise((resolve, reject) => {
        let dataset = DATASET
        resolve(dataset)
    })
}

// Get all values 
// const getAnswers = (question) => {
//     const permutableData = Object.assign({}, DATASET)
//     return Object.entries(permutableData).forEach(([key, value]) => console.log(`${key}, ${(value[question])}`))
// }

const getSpecificAnswer = (key, value) => {
    return DATASET[key][value]
}

//console.log(getSpecificAnswer(5, 'Als je later een auto zou kopen, van welk merk zou deze dan zijn?'))

/* Utility to remove all capital letters */
function removeCapitals(string) {
    // === (Triple equals) is a strict equality comparison operator in JavaScript,
    if(typeof string === 'string') {
        return string.toLowerCase()
    }
    else {
        return string;
    }
}

/* Utility to replace empty answers with "Geen antwoord" */
function emptyAnswer(string) {
    if(typeof string === 'string' && string.length < 1) {
        return "Geen antwoord"
    }
    else {
        return string
    }
}


/* TODO Utility to keep front-end developer consistent*/
function correctSpelling(string) {
    let words = ['frontend developer', 'front end developer']
    if(typeof string == words){
        return "Front-end developer"
    }
    else {
        return "nothing changed"
    }

}

/* Testing functions 

console.log(getAnswers('Als je later een auto zou kopen, van welk merk zou deze dan zijn?'))

let results = removeCapitals(DATASET[31]['Als je later een auto zou kopen, van welk merk zou deze dan zijn?'])
let results2 = removeCapitals(DATASET[31]['Op welke verdieping van het TTH studeer je het liefst?'])

console.log(getAnswers)
console.log(getSpecificAnswer(4,'Op welke verdieping van het TTH studeer je het liefst?'))
console.log(results)

*/


cleanData()
    .then((data) => {
        return data.map(object => {
          Object.keys(object).forEach(key => {
              object[key] = removeCapitals(object[key]),
              object[key] = emptyAnswer(object[key])
              //object[key] = correctSpelling(object[key])             
          })  
          return object
        })
    })
    .then((data) => {
        return data.map(object => {
            const person = {
                car: object['Als je later een auto zou kopen, van welk merk zou deze dan zijn?'],
                career: object['Wat wil je worden als je groot bent?'],
                motivation: object['Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?']
            }
            return person
        })
    })
    .then(cleanData => {
        console.log(cleanData)
    })
    .catch(err => {
        console.log(err)
    })
    




