//Comparing Numbers:
let x = 5;
let y = 5;
let z = 6;

console.log(x === y); // true
console.log(y === z); // false

//Boolean Types:
console.log(typeof(true)); // boolean
console.log(typeof(false)); // boolean

//Empty Values:
let string = '';
console.log(string); // (Empty String)

//Null:
let person = null;
console.log(person); // null

//Undefined:
let age;
console.log(age); // undefined

age = undefined; // reassign undefined
console.log(age); // undefined

let job = undefined;
console.log(job); // undefined

console.log(typeof(undefined)); // undefined but in string




//Memeriksa Nilai Boolean dari String Kosong:
const variable = '';

if (variable) {
    console.log(true, 'variable');
} else {
    console.log(false, 'variable');
}


//Perbandingan:
const comparison = 5 === 5;
console.log(comparison, 'comparison');


//Pesan Sambutan Kondisional:
let flag = false;

const registeredPerson = 'Ihsan';
const input = 'Ihsan';

if (input === registeredPerson) flag = true;
else flag = false;

if (flag) {
    console.log(`Welcome ${registeredPerson}`);
} else {
    console.log('You are not registered');
}

