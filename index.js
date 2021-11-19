// Initialize dataset
const DATASET = require('./tech-track-dataset.json')
const SAMPLE = require('./sample.json')
const FETCH = require('cross-fetch')

/**
 * @description Show answers of surveys
 * @param {String} question
 * @returns Log all answers
 */
const ANSWERS = function getAllAnswer (question) {
  const manipulateData = Object.assign({}, SAMPLE)
  return Object.entries(manipulateData).forEach(([key, value]) => {
    console.log(`${key}, ${value[question]}`)
  })
}

// answers("Wat is je favoriete zuivelproduct?");

/**
 * @description Function that returns new Promise and resolve
 * @returns Fullfilled promise
 */
const CREATEPROMISE = function cleanData () {
  return new Promise((resolve, reject) => {
    const dataset = DATASET
    resolve(dataset)
  })
}

// Arrow function
const getSpecificAnswer = (key, value) => {
  return DATASET[key][value]
}

// Regular function
function getSpecificAnswer2 (key, value) {
  return DATASET[key][value]
}

/* Utility to remove all capital letters */
const LOWERCASE = function removeCapitals (string) {
  // === (Triple equals) is a strict equality comparison operator in JavaScript,
  if (typeof string === 'string') {
    return string.toLowerCase()
  } else {
    return string
  }
}

/**
 * @description Replace empty string
 * @param {String} string
 * @param {String} replacement
 * @returns niet beantwoord
 */
const CE_VALUE = function emptyAnswer (string, replacement) {
  return string === '' ? replacement : string
}

/**
 * @description Correcting spelling for front-end developer
 * @param {String} career
 * @returns Correct spelling of front-end developer
 */
const SPELLING = function correctSpellingFD (career) {
  const correctSpelling = 'front-end developer'
  switch (career) {
    case 'frontend developer':
      return correctSpelling
    case 'webdeveloper / webdesigner':
      return correctSpelling
    case 'code designer':
      return correctSpelling
    case 'front-ender':
      return correctSpelling
    default:
      return career
  }
}

/**
 * @description replace symbols ~!@#$%^&*()_+
 * @param {String} string
 * @returns string without symbols
 */
const RM_SYMBOLS = function (string) {
  const REGEX = /[^A-Za-z0-9\s]/g
  return typeof string === 'string' ? string.replace(REGEX, '') : string
}

/* Testing

console.log(getSpecificAnswer(5, 'Als je later een auto zou kopen, van welk merk zou deze dan zijn?'))
console.log(getAnswers('Als je later een auto zou kopen, van welk merk zou deze dan zijn?'))

let results = removeCapitals(DATASET[31]['Als je later een auto zou kopen, van welk merk zou deze dan zijn?'])
let results2 = removeCapitals(DATASET[31]['Op welke verdieping van het TTH studeer je het liefst?'])

console.log(getAnswers)
console.log(getSpecificAnswer(4,'Op welke verdieping van het TTH studeer je het liefst?'))
console.log(results)
console.log(getSpecificAnswer(4,'Op welke verdieping van het TTH studeer je het liefst?'))
*/

/* Using promice to chain .then and .catch. Step by step cleaning the data with the functions i've made  */
CREATEPROMISE()
  .then((data) => {
    return data.map((object) => {
      Object.keys(object).forEach((key) => {
        (object[key] = LOWERCASE(object[key])),
        (object[key] = SPELLING(object[key])),
        (object[key] = CE_VALUE(object[key], 'niet beantwoord')),
        (object[key] = RM_SYMBOLS(object[key]))
      })
      return object
    })
  })
  .then((data) => {
    return data.map((object) => {
      const person = {
        car: object[
          'Als je later een auto zou kopen, van welk merk zou deze dan zijn?'
        ],
        career: object['Wat wil je worden als je groot bent?'],
        motivation:
          object[
            'Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?'
          ]
      }
      return person
    })
  })
  .then((cleanedData) => {
    console.log(cleanedData)
  })
  .catch((err) => console.error(err))
  .finally(() => console.log('Done.'))

const API = 'http://hp-api.herokuapp.com/api/characters'
/**
 * @description Fetch data using async await
 * @param {String} URL 
 * @returns promise
 */
const GETDATA = async function (URL) {
  try {
    const RESPONSE = await FETCH(URL)
    return RESPONSE.json()
  } catch (error) {
    console.error(error)
  }
}

/**
 * @description 
 * @param {String} data 
 * @returns 
 */
const READDATA = async function (data) {
  const X = await data
  X.map((element) => {
    Object.keys(element).forEach((key) => {
      (element[key] = LOWERCASE(element[key])),
      (element[key] = SPELLING(element[key])),
      (element[key] = CE_VALUE(element[key], 'niet beantwoord')),
      (element[key] = RM_SYMBOLS(element[key]))
    })
    return element
  })
  console.log(await X)
  return X
}

READDATA(GETDATA(API))
