const word = 'Yoga';
const sentence = "Yoga sangat ganteng";
const paragraph = 'kenapa yoga sangat ganteng?';

console.log(word);
console.log(sentence);
console.log(paragraph);


const newSentence = word + sentence + paragraph;
console.log(newSentence);
console.log(word + sentence + paragraph);


console.log(newSentence + newSentence);
console.log(word + paragraph + sentence + paragraph + word + paragraph);


const concat = word + ' ' + sentence + ' ' + paragraph;
console.log(concat);


const desiredOutput = `${word}. Sangat Ganteng Tapi ${paragraph}`;
console.log(desiredOutput);


const backtickConcat = `${word}. ${sentence} Tapi ${paragraph}`;
console.log(backtickConcat);
