import fetch from 'node-fetch';

const response = await fetch('./tech-track-dataset.json')
const data = await response.json();

//var dataset = require('./tech-track-dataset.json');

console.log(data);