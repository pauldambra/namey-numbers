import convert from "../convert";

const nextRandom = () => Math.floor(Math.random() * 999) + 1;

let numerals = nextRandom();
let words = convert.numeralsToWords(numerals);

export const triggerNext = () => {
  numerals = nextRandom();
  words = convert.numeralsToWords(numerals);
}

export const checkAnswer = (a) => a === numerals
export const read = () => ({words, numerals})

