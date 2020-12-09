import { DateTime } from 'luxon';

/* Returns an array of 'num' strings representing the previous 'num' units of time,
starting from passed in dateTime.
For now -Units are defaulted to minutes with an interval of 1. */
const genTimeSeriesData = (num, dateTimeToUse) => {
  let timeStrings = [];

  for (let i = num - 1; i >= 0; i--) {
    const previousTime = dateTimeToUse
      .minus({ minutes: i })
      .toLocaleString(DateTime.TIME_24_SIMPLE);
    timeStrings.push(previousTime);
  }
  return timeStrings;
};

/*
Generates an array of 'numVals' random numbers,
no larger than 'maxval'
*/
function generateRandomVals(numVals, maxVal) {
  // Add one to maxVal if a positive value was passed.
  if (maxVal) maxVal += 1;

  let randomVals = [];
  for (let i = 0; i < numVals; i++) {
    let nextVal = maxVal
      ? Math.floor(Math.random() * Math.floor(maxVal))
      : Math.random();
    randomVals.push(nextVal);
  }
  return randomVals;
}

/* Sets random data on Device's programs, and roll up values onto each Device. */
async function createInitalRandomData(devices) {
  devices.forEach((nextDevice) => {
    // init Device's CPU and memory arrays to a blank size 10 array
    nextDevice.cpuUsage = new Array(10).fill(0);
    nextDevice.memoryUsage = new Array(10).fill(0);

    nextDevice.programs.forEach((nextProgram) => {
      nextProgram.cpuUsage.push(...generateRandomVals(10, 25));
      nextProgram.memoryUsage.push(...generateRandomVals(10, 200));
      // Sum the program data on the device
      nextDevice.cpuUsage = nextDevice.cpuUsage.map(
        (nextVal, i) => nextVal + nextProgram.cpuUsage[i]
      );

      nextDevice.memoryUsage = nextDevice.memoryUsage.map(
        (nextVal, i) => nextVal + nextProgram.memoryUsage[i]
      );
    });
  });
}

export { genTimeSeriesData, generateRandomVals, createInitalRandomData };
