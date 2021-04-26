## Table of Content
1. [Data Structures](#data-structures)
    * [Array](#array)
    * [Object](#object)
    * [Passed by Value and Reference](#passed-by-value-and-reference)
1. [Arrow Function](#arrow-function)
1. [module.exports](#module.exports)
1. [Basic Destructuring](#basic-destructuring)
1. [process.argv](#process.argv)
1. [Referensi](#referensi)

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
console.log(objStudent2['nama']);
```

### Passed by Value and Reference
**Warning**   
Tipe data primitif dalam javascript (`Boolean`, `null`, `undefined`, `String`, `number`)   
umumnya bersifat *passed by value*, yaitu value dalam tipe data tersebut akan dikirimkan  
apa adanya.

Code:
```javascript
let paramInt = 5;
let paramString = 'Tulisan';

let copyParamInt = paramInt;
let copyParamString = 'Copyan';

paramInt = 10;
paramString = 'Ubah Tulisan';

console.log(paramInt, paramString, copyParamInt, copyParamString);
```

Kode di atas bila direpresentasikan dalam memori:
| Parameter | Value |
| :-------- | ----: |
| paramInt  | 10     |
| paramString | 'Ubah Tulisan' |
| copyParamInt | 5 |
| copyParamString | 'Copyan' |

Berbeda dengan tipe data Object, yang meliputi `Array`, `Function`, dan `Object` itu  
sendiri bersifat *passed by reference*, yaitu value dalam tipe data tersebut akan dikirimkan  
berupa alamat.

Code:
```javascript
let paramArray = [];
let copyParamArray = paramArray;

paramArray.push(1);

console.log(paramArray, copyParamArray);
```

Kode di atas bila direpresentasikan dalam memori:
| Parameter | Value | &nbsp; | Alamat | Object |
| :-------- | ----: | ------ | :----- | -----: | 
| paramArray | `<#001>` | &nbsp; | `<#001>` | `[ 1 ]` |
| copyParamArray | `<#001>` | &nbsp; | &nbsp; | &nbsp; |

## Arrow Function
Membuat penulisan function menjadi lebih singkat

Code:
```javascript
// Cara menulis fungsi yang umum digunakan
function fungsiPenjumlahan(param1, param2) {
  return param1 + param2;
}

// Alternatif cara menulis fungsi
var fungsiPenjumlahan2 = function (param1, param2) {
  return param1 + param2;
}

// Cara penulisan function dengan arrow function
let fungsiPenjumlahan3 = (param1, param2) => {
  return param1 + param2;
}

// Bila akan langsung mereturn, arrow function tanpa curly bracket { }
let fungsiPenjumlahan4 = (param1, param2) => param1 + param2;
```

## module.exports
Dalam dunia programming, sebisa mungkin kita harus memodularisasikan kode yang
kita miliki. nah salah satu caranya adalah dengan memecah-mecah kode yang dibuat
ke dalam beberapa file.

Untuk itu di javascript sendiri kita bisa menggunakan `export` dan `import` kode
supaya bisa terhubung walau ada dalam file yang berbeda.

Mari kita lihat kembali fungsi yang sudah kita buat dalam pembelajaran arrow
function tadi dan melakukan `export` dan `import` terhadap kode tersebut

```javascript
// Export File

// Cara menulis fungsi yang umum digunakan
function fungsiPenjumlahan1(param1, param2) {
  return param1 + param2;
}

// Alternatif cara menulis fungsi
var fungsiPenjumlahan2 = function (param1, param2) {
  return param1 + param2;
}

// Cara penulisan function dengan arrow function
let fungsiPenjumlahan3 = (param1, param2) => {
  return param1 + param2;
}

// Bila akan langsung mereturn, arrow function tanpa curly bracket { }
let fungsiPenjumlahan4 = (param1, param2) => param1 + param2;

// kita akan melakukan export supaya bisa digunakan pada file lain
// supaya bisa menampung banyak, kita akan menggunakan object
module.exports = {
  fungsiPenjumlahan1,
  fungsiPenjumlahan2,
  fungsiPenjumlahan3,
  fungsiPenjumlahan4
};
```

Sedangkan untuk importnya adalah kita menggunakan
```javascript
// Imported data (function)
const fungsiPenjumlahan1 = require('./path/to/file/exported/js.js').fungsiPenjumlahan;
const fungsiPenjumlahan2 = require('./path/to/file/exported/js.js').fungsiPenjumlahan2;
const fungsiPenjumlahan3 = require('./path/to/file/exported/js.js').fungsiPenjumlahan3;
const fungsiPenjumlahan4 = require('./path/to/file/exported/js.js').fungsiPenjumlahan4;

// driver code
fungsiPenjumlahan1(10, 20);
fungsiPenjumlahan2(20, 30);
```

## Basic Destructuring
Mari kita lihat sedikit lagi mengenai kode fungsi penjumlahan kita yang ada di atas.
Pada saat melakukan import, kita menuliskan cukup banyak repetisi kode kita yah !
Ada tidak yah cara untuk mempersingkat kode kita lagi?

Tentu saja ada !

Please welcome `destructuring`.

`destructuring` atau `destructuring assignment` adalah suatu sintaks pada javascript
yang memungkinkan kita untuk mengeluarkan seluruh isi dari array atau object (dalam
kasus kita berarti kita akan mengeluarkan isi dari object).

Contoh:
```javascript
const anObject = {
  id: 1,
  name: "Destructuring"
};

// destructuring object
const { id, name } = anObject;

console.log(id);
console.log(name);
```

Apabila kita kembali pada kode import fungsi penjumlahan yang ada di atas,
maka akan berubah menjadi

```javascript
const { 
  fungsiPenjumlahan1,
  fungsiPenjumlahan2,
  fungsiPenjumlahan3,
  fungsiPenjumlahan4
} = require('./source-06a-module-exports.js')

// driver code start here
fungsiPenjumlahan1(10, 20);
fungsiPenjumlahan2(20, 30);
```

Terlihat lebih simpel dan lebih `malas` bukan?

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

**Warning**  
Hasil tangkapan value dari argv semuanya dalam bentuk `String` sekalipun input yang kita  
masukkan berupa `Number`, sehingga apabila kita menginginkan `Number`, jangan lupa untuk  
dikonversi terlebih dahulu input yang diterima dengan built-in function yang disediakan  
oleh Javascript.

Sekarang,  
Bagaimana bila kita menginginkan 2 parameter input dari process.argv?  

Misal:  
Mencetak simbol `.` dengan jumlah baris `x` dan kolom `y` dipisah dengan `|`

Contoh input:
```javascript
// node index.js x y
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

for(let ctr1 = 0; ctr1 < param1; ctr1++) {
  let output;
  
  arr[ctr1] = [];

  for(let ctr2 = 0; ctr2 < param2; ctr2++) {
    arr[ctr1][ctr2] = '.';
  }

  output = '|' + arr[ctr1].join('|') + '|';
  
  console.log(output);
}
```

## Referensi
* [Perbedaan var, const, let - Medium](https://medium.com/coderupa/es6-var-let-const-apa-bedanya-1cd4daaee9f0)
* [Javascript Array Objects - TutorialsPoint](https://www.tutorialspoint.com/javascript/javascript_arrays_object.htm)
* [process.Argv - NodeJS](https://nodejs.org/docs/latest/api/process.html#process_process_argv)
* [Use Strict - W3Schools](https://www.w3schools.com/js/js_strict.asp)
* [Strict Mode - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
* [Destructuring - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Value vs Reference - Codeburst](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)