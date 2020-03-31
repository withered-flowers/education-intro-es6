// ----------------------------------------------------------------------------
// Array of Object
// ----------------------------------------------------------------------------
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
