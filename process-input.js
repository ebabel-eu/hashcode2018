const fs = require('fs');

const options = { encoding: 'utf8' };

const processInput = (path) => {
  const input  = fs.readFileSync(path, options);

  const array = input.split('\n').filter( data => data);

  const setup = array[0].split(' ');

  return {
    rides: array.splice(1, array.length).map(ride => {
      const rideArray = ride.split(' ');

      return {
        // the row of the start intersection (0 ≤ a < R)
        fromRows: parseInt(rideArray[0]),

        // the column of the start intersection (0 ≤ b < C )
        fromColumns: parseInt(rideArray[1]),

        // the row of the finish intersection (0 ≤ x < R)
        toRows: parseInt(rideArray[2]),

        // the column of the finish intersection (0 ≤ y < C )
        toColumns: parseInt(rideArray[3]),

        // theearlieststart(0≤s<T)
        earliestStart: parseInt(rideArray[4]),

        // thelatestfinish(0≤f ≤T), (f ≥s+|x−a|+|y−b|)
        latestFinish: parseInt(rideArray[5]),
      };
    }),
    setup: {
      // numberofrowsofthegrid (1≤R≤10000)
      rows: parseInt(setup[0]),

      // number of columns of the grid (1 ≤ C ≤ 10000)
      columns: parseInt(setup[1]),

      // number of vehicles in the fleet (1 ≤ F ≤ 1000)
      vehicles: parseInt(setup[2]),

      // numberofrides (1≤N ≤10000)
      rides: parseInt(setup[3]),

      // per-ride bonus for starting the ride on time (1 ≤ B ≤ 10000)
      bonus: parseInt(setup[4]),

      // number of steps in the simulation (1 ≤ T ≤ 109)
      steps: parseInt(setup[5]),
    },
  };
};

module.exports = processInput;
