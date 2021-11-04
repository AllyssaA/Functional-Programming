// Data in variable dataset
const DATASET = require('./tech-track-dataset.json');

//let listAnswers = getAnswers(DATASET, "Op welke verdieping van het TTH studeer je het liefst?")
//console.log(listAnswers)


// Get values from specific question
const getAnswers = (question) => {
    const permutableData = Object.assign({}, DATASET)
    return Object.entries(permutableData).forEach(([key, value]) => console.log(`${key}, ${(value[question])}`))
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

const cleanData = () => {
    return new Promise((resolve, reject) => {
        const dataset = DATASET
        resolve(dataset)
    })
}

console.log(removeCapitals)


console.log(getAnswers('Als je later een auto zou kopen, van welk merk zou deze dan zijn?'))

let results = removeCapitals(DATASET[31]['Als je later een auto zou kopen, van welk merk zou deze dan zijn?'])

console.log(results)

/* Create foreach loop with all answers */




