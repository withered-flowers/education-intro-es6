// ----------------------------------------------------------------------------
// Argument Dependency - with Object
// ----------------------------------------------------------------------------
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
