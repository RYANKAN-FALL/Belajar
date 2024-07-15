// Biodata
const name = 'Prayoga';
const bornYear = 2005;
let hobby1 = 'Membaca';
let hobby2 = 'Menonton';
let addressCity = 'Karimun';
let addressProvince = 'Kepulauan Riau';

// Calculate age
const currentYear = 2024;
const age = currentYear - bornYear;

// Combine hobbies
let combinedHobby = `${hobby1} dan ${hobby2}`;

//address
const address = `${addressCity}, ${addressProvince}`

// Output
const output = `Halo, perkenalkan nama saya ${name}. Umur saya ${age} tahun. Hobi saya ${combinedHobby}. Saya tinggal di ${address}.`;

console.log(output);