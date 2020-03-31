## Table of Content
1. [var, const, dan let](#var-const-dan-let)
    * [var (Old School Javascript)](#var-old-school-javascript)
    * [const and let (ES6)](#const-and-let-es6)
    * [use strict](#use-strict)
1. [Data Structures](#data-structures)
    * [Array](#array)
    * [Nested Array](#nested-array)
    * [Object](#object)
    * [Array of Object](#array-of-object)
1. [Argument Dependency](#argument-dependency)
1. [Template Literal](#template-literal)
1. [Arrow Function](#arrow-function)
1. [process.argv](#process.argv)
1. [Referensi](#referensi)

## var, const, dan let

### var (Old School Javascript)
Permasalahan yang ada pada `var`
1. Reassign itu diperbolehkan di mana saja.
1. Variable seolah *diangkat* ke atas kapan pun (*hoisting*)
1. Scope bermasalah
1. Lupa declare variable itu *dimaafkan*

Code:

Permasalahan 1
```javascript
var variablePertama = 'hello1';
var variablePertama = 'hello2';
```

Permasalahan 2
```javascript
variableKedua = 'ini adalah value yang diassign ke variable';
var variableKedua;

console.log(variableKedua);
```

Permasalahan 3
```javascript
var variableKetiga = 'angka 3';

if (true) {
  var variableKetiga = 'angka empat';
}

console.log(variableKetiga);
```

Permasalahan 4
```javascript
function fungsiEmpat () {
  variableKeempat = 3;
}

console.log(variableKeempat);
```

### const and let (ES6)
Please welcome `const` dan `let` untuk menyelesaikan masalah di atas

Solusi 1
```javascript
let variablePertama = 'hello1';
let variablePertama = 'hello2';

const pi = 3.14;
pi = 3.21;
```

Solusi 2
```javascript
variableKedua = 'ini adalah value yang diassign ke variable';
let variableKedua;

console.log(variableKedua);
```

Solusi 3
```javascript
let variableKetiga = 'angka 3';

if (true) {
  let variableKetiga = 'angka empat';
}

console.log(variableKetiga);
```

Solusi 4
```javascript
function fungsiEmpat () {
  let variableKeempat = 3;
}

console.log(variableKeempat);
```

### use strict
Sebuah kata kunci yang digunakan untuk membuat hidup koding dalam javascript   
menjadi lebih `susah` namun menjadi lebih `aman` seperti:
1. Variable wajib declare (termasuk object)
1. Beberapa kata kunci tidak boleh digunakan menjadi variable
1. Tidak boleh ada nama variable yang sama dalam object / function parameter

Contoh:
```javascript
"use strict"

// Dosa 1
pi = 3.14;
console.log(pi);

// Dosa 2
var static = 5;

// Dosa 3
function fungsiJejadian(param1, param1) { 
  // logic program di sini
}
```

## Data Structures

### Array
Kumpulan data yang disatukan dalam 1 variable

Cara pakai:
```javascript
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
```

### Nested Array
Array juga bisa di-`array`-kan lagi

Analogi:
Bungkusan biskuit di dalam Kardus

1 bungkus biskut ada 5 pcs biskuit  
```javascript
[ b1 | b2 | b3 | b4 | b5 ]
```

1 kardus isi 3 bungkus biskuit  

```javascript
------------------------------
| [ b1 | b2 | b3 | b4 | b5 ] |  <-- bungkus pertama  
| [ b1 | b2 | b3 | b4 | b5 ] |  <-- bungkus kedua  
| [ b1 | b2 | b3 | b4 | b5 ] |  <-- bungkus ketiga  
------------------------------
^ dibungkus dalam kardus
```

Representasi dalam bentuk kode?
Code:
```javascript
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
```

### Object
Merupakan kumpulan data yang umumnya menyatakan sesuatu 

Contoh :  
object Student, punya informasi tertentu seperti nama, alamat, identitas, dkk

Apabila kita akan merepresentasikan dalam bentuk object, jadinya adalah seperti berikut.

Code:
```javascript
// Inisialisasi object
let objStudent = {};

// Cara set value dalam objStudent
objStudent.nama = 'Edison';
objStudent.alamat = 'Sekai';
objStudent.identitas = '3121-0000-0000';

// Cara set value object dari awal
let objStudent2 = {
  nama: 'Zaen',
  alamat: 'Bumi',
  identitas: '3121-0000-0001'
};

console.log(objStudent.nama);
console.log(objStudent2[nama]);
```

### Array of Objects
Contoh: kumpulan dari object student di atas

Code:
```javascript
// Bila melanjutkan dari object di atas
arrStudents = [];
arrStudents.push(objStudent);
arrStudents.push(objStudent2);

// Bila mengassign secara manual
arrStudents = [
  { nama: 'Edison', alamat: 'Sekai', identitas: '3121-0000-0000' },
  { nama: 'Zaen', alamat: 'Bumi', identitas: '3121-0000-0001' }
];

// Cara akses datanya bagaimana?
console.log(arrStudents[0].nama);
```

## Argument Dependency
Pernah tidak kepikiran bahwa parameter dalam fungsi terkadang **kebanyakan**

Contoh:
```javascript
function tambahStudent(nama, alamat, identitas) {
  let output = 'Nama ' + nama + ' dengan identitas ' + identitas + ' dan alamat ' + alamat + ' sukses ditambahkan';
  console.log(output);
};

tambahStudent('test', '123', 'abc');
```

Kalau misalnya ternyata data student ada 10, kita akan memasukkan 10 parameter?  
Adakah solusi lainnya?

Salah satu solusinya: jadikan parameter untuk menerima object !

Contoh:

```javascript
function tambahStudent(obj) {
  let output = 'Nama ' + obj.nama + ' dengan identitas ' + obj.identitas + ' dan alamat ' + obj.alamat + ' sukses ditambahkan';
  console.log(output);
};

let objStudent = {
  nama: 'test',
  alamat: '123',
  identitas: 'abc'
};

tambahStudent(objStudent);
```


## Template Literal
Membuat simpel penulisan yang `sulit`

Code:
```javascript
let var1 = 'a';
let var2 = 'b';
let var3 = 'c';

console.log('Hasil Outputnya adalah: ' + var1 + ' ' + var2 + ' ' + var3);
console.log(`Hasil Outputnya adalah: ${var1} ${var2} ${var3}`);
```

## Arrow Function
Membuat penulisan function menjadi lebih singkat

Code:
```javascript
// Cara menulis fungsi yang umum digunakan
function fungsiPenjumlahan(param1, param2) {
  return param1 + param2;
}

// Alternatif cara menulis fungsi
var fungsiPenjumlahan = function (param1, param2) {
  return param1 + param2;
}

// Cara penulisan function dengan arrow function
let fungsiPenjumlahan = (param1, param2) => {
  return param1 + param2;
}

// Bila akan langsung mereturn, arrow function tanpa curly bracket { }
let fungsiPenjumlahan = (param1, param2) => param1 + param2;
```

## process.argv
Selama ini kan kita menggunakan file .js secara langsung kita panggil misal `node index.js`  
tapi bagaimana yah caranya kita ingin menangkap suatu nilai yang dilempar pada saat kita  
memanggil node tersebut? misalnya `node index.js "Cetak aku mas"`  

Solusinya? gunakan built-in `process.argv` dari nodejs

Code:
```javascript
let argv = process.argv;

// Outputnya adalah dalam bentuk array
// array0 => Posisi node dipanggil dari mana
// array1 => Posisi file .js dipanggil dari mana
// array2..n ==> Data / Value yang kita lemparkan
console.log(argv);
console.log(argv[2]);
```

Bagaimana bila kita menginginkan 2 parameter input dari process.argv?  
Misal:  
Inginkan mencetak `.` dengan baris `x` dan kolom `y` dipisah dengan `|`

Contoh input:
```javascript
node index.js 5 15
```

Contoh output
```javascript
|.|.|.|.|.|.|.|.|.|.|.|.|.|.|.|
|.|.|.|.|.|.|.|.|.|.|.|.|.|.|.|
|.|.|.|.|.|.|.|.|.|.|.|.|.|.|.|
|.|.|.|.|.|.|.|.|.|.|.|.|.|.|.|
|.|.|.|.|.|.|.|.|.|.|.|.|.|.|.|
```

Code:
```javascript
let argv = process.argv;
let param1 = argv[2];
let param2 = argv[3];

let arr = [];

for(let i = 0; i < param1; i++) {
  let output;
  
  arr[i] = [];

  for(let j = 0; j < param2; j++) {
    arr[i][j] = '.';
  }

  output = '|' + arr[i].join('|') + '|';
  
  console.log(output);
}
```

## Referensi
* [Perbedaan var, const, let - Medium](https://medium.com/coderupa/es6-var-let-const-apa-bedanya-1cd4daaee9f0)
* [Javascript Array Objects - TutorialsPoint](https://www.tutorialspoint.com/javascript/javascript_arrays_object.htm)
* [process.Argv - NodeJS](https://nodejs.org/docs/latest/api/process.html#process_process_argv)
* [Use Strict - W3Schools](https://www.w3schools.com/js/js_strict.asp)
* [Strict Mode - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)