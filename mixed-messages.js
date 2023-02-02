
import { buildQuoteSource } from './quotesFactory.js';

const quoteSources = [
    buildQuoteSource('STOIC'),
    buildQuoteSource('HEDONIST'),
    buildQuoteSource('CINIC')
];

let fullArray = [];
quoteSources.forEach(source => {
    fullArray = fullArray.concat(source.quotes);
});

const randomIndex = Math.floor(Math.random() * fullArray.length);
console.log(fullArray[randomIndex]);