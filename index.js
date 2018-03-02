const fs = require('fs');

const options = { encoding: 'utf8' };
const input = {
  example: fs.readFileSync('./input/a_example.in', options),
  easy: fs.readFileSync('./input/b_should_be_easy.in', options),
  noHurry: fs.readFileSync('./input/c_no_hurry.in', options),
  metropolis: fs.readFileSync('./input/d_metropolis.in', options),
  bonus: fs.readFileSync('./input/e_high_bonus.in', options),
};

console.log(input.easy);
