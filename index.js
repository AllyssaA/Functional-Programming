// Data in variable dataset
const DATASET = require('./tech-track-dataset.json');

//let listAnswers = getAnswers(DATASET, "Op welke verdieping van het TTH studeer je het liefst?")
//console.log(listAnswers)
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

/* Utilities */
function removeCapitals(string) {
    if(typeof string === 'string') {
        return string.toLocaleLowerCase()
    }
    else {
        return string;
    }
}






//console.log(getAnswers('Als je later een auto zou kopen, van welk merk zou deze dan zijn?'))

//let results = removeCapitals(DATASET[31]['Als je later een auto zou kopen, van welk merk zou deze dan zijn?'])
//let results2 = removeCapitals(DATASET[31]['Op welke verdieping van het TTH studeer je het liefst?'])

//console.log(getAnswers)
//console.log(getSpecificAnswer(4,'Op welke verdieping van het TTH studeer je het liefst?'))
//console.log(results)
//console.log(results)


/* TODO Create foreach loop with all answers */

cleanData()
    .then((data) => {
        return data.map(object => {
          Object.keys(object).forEach(key => {
              object[key] = removeCapitals(object[key])
              
          })  
          return object
        })
    })
    .then((data) => {
        return data.map(object => {
            const person = {
                car: object['Als je later een auto zou kopen, van welk merk zou deze dan zijn?'],
                career: object['Wat wil je worden als je groot bent?']
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
    




