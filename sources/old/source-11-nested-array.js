// ----------------------------------------------------------------------------
// Nested Array
// ----------------------------------------------------------------------------
let biskuit = ['b0', 'b1', 'b2', 'b3', 'b4'];
let kardus = [];

// Cara memasukkan dalam array dalam array
kardus.push(biskuit);
kardus.push(biskuit);
kardus.push(biskuit);

// Bisa juga direpresentasikan tanpa push
// (Definisi di awal)
let kardus2 = [
  ['b0-a', 'b1-a', 'b2-a', 'b3-a', 'b4-a'],
  ['b0-b', 'b1-b', 'b2-b', 'b3-b', 'b4-b'],
  ['b0-c', 'b1-c', 'b2-c', 'b3-c', 'b4-c']
];

// Cara mengakses array dalam array
console.log(kardus2[0][1]);
