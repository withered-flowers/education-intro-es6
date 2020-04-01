// ----------------------------------------------------------------------------
// Arrow Function
// ----------------------------------------------------------------------------
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
