// Biodata
const name = 'Yoga';
const fullName = 'Prayoga Gilang Pratama';
const bornYear = 2005;
let hobby1 = 'Membaca';
let hobby2 = 'Menonton Film';
let addressCity = 'Karimun';
let addressProvince = 'Kepulauan Riau';

// Tahun Cihuy
const currentYear = 2024;
const age = currentYear - bornYear;

// Hobi
let combinedHobby = `${hobby1} dan ${hobby2}`;

// Alamat
const address = `${addressCity}, ${addressProvince}`

// Hasil
const output = `Halo, perkenalkan nama saya ${name}, Nama lengkap saya ${fullName}. Umur saya ${age} tahun. Hobi saya ${combinedHobby}. Saya tinggal di ${address}.`;

console.log(output);