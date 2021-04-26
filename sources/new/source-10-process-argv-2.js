// ----------------------------------------------------------------------------
// process.argv - Advanced
// ----------------------------------------------------------------------------
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
