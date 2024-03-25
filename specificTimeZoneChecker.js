const timeChecker = ({ month, day, hour, minutes }) => {
  //get current time in Lagos Nigeria
  const nowToString = new Date().toLocaleDateString("en-US", {
    hour12: false,
    timeZone: "Africa/Lagos",
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  const nowToDate = new Date(nowToString);

  //create an object of year, month, day, hour and minutes currently in Lagos/Nigeria
  const currentLagosTime = {
    year: nowToDate.getFullYear(),
    month: nowToDate.getMonth(),
    day: nowToDate.getDate(),
    hour: nowToDate.getHours(),
    minutes: nowToDate.getMinutes(),
  };

  //compare months and day to confirm if it matches the set month and day
  const isMonth_and_day =
    currentLagosTime?.month === month && currentLagosTime?.day === day;
  //compare hour and minute to confirm if it matches the set hour and minute
  const isHour_and_minutes =
    currentLagosTime?.hour >= hour && currentLagosTime?.minutes >= minutes;
  return {
    time: currentLagosTime,
    isTime: isMonth_and_day && isHour_and_minutes ? true : false,
    isTimeExceeded: currentLagosTime?.hour > hour + 2 ? true : false,
  };
};
export default timeChecker;
