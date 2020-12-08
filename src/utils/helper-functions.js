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

export { genTimeSeriesData };
