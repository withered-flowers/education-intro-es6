// ----------------------------------------------------------------------------
// Array
// ----------------------------------------------------------------------------
// cara inisialisasi array
let arrayPenampung = [];

// cara pakai array
arrayPenampung.push('data pertama');
arrayPenampung.push('data kedua');

// cara akses value
// ingat array itu cara pakainya selalu dari 0 untuk index pertamanya
console.log(arrayPenampung[0]);
console.log(arrayPenampung[1]);

for(let ctr = 0; ctr < arrayPenampung.length; ctr++) {
  console.log(arrayPenampung[ctr]);
}
