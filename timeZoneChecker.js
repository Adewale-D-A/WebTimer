const timeChecker = ({ year, month, day, hr, minute }) => {
  const now = new Date();
  const expectedDate = new Date(year, month, day, hr, minute, 0, 0);
  const milisecondsToTime = expectedDate - now;
  return {
    time: milisecondsToTime,
    isTime: milisecondsToTime > 0 ? false : true,
    isTimeExceeded:
      milisecondsToTime > 0
        ? false
        : milisecondsToTime * -1 > 7200000
        ? true
        : false, //this returns true if time is after 2hrs
  };
};
const { time, isTime, isTimeExceeded } = timeChecker({
  year: 2023,
  month: 11, //JS's month is 0-indexeds
  day: 14,
  hr: 11,
  minute: 0,
});
console.log({ time, isTime, isTimeExceeded });
