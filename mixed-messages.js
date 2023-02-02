
import { buildQuoteSource } from './quotesFactory.js';

const quoteSources = [
    buildQuoteSource('STOIC'),
    buildQuoteSource('HEDONIST'),
    buildQuoteSource('CINIC')
];

console.log('Hola, ahí va una cita:');
quoteSources.forEach(source => {
    console.log(source.quotes);
});
