const processInput = require('./process-input');

const input = {
  example: processInput('./input/a_example.in'),
  easy: processInput('./input/b_should_be_easy.in'),
  noHurry: processInput('./input/c_no_hurry.in'),
  metropolis: processInput('./input/d_metropolis.in'),
  bonus: processInput('./input/e_high_bonus.in'),
};

console.log(input.easy);
