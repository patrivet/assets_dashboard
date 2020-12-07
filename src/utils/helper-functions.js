import { DateTime } from 'luxon';

/* Returns an array of 'num' strings representing the previous 'num' units of time,
starting from current time.
For now -Units are defaulted to minutes with an interval of 1. */
const genTimeSeriesData = (num) => {
  const now = DateTime.local();
  let timeArr = [];

  for (let i = num - 1; i >= 0; i--) {
    const previousTime = now
      .minus({ minutes: i })
      .toLocaleString(DateTime.TIME_24_SIMPLE);
    timeArr.push(previousTime);
  }
  return timeArr;
};

export { genTimeSeriesData };
