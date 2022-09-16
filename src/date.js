const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function getDate(date, time) {
  const day = date + ' ' + time;
  return new Date(day);
}

function displayDate(date, time) {
  const goalDate = getDate(date, time);
  const goalDay = goalDate.getDate();
  const goalMonth = goalDate.getMonth();
  const goalYear = goalDate.getFullYear();
  const goalHours = goalDate.getHours();
  const goalMinutes = goalDate.getMinutes();
  const goalTime = `${goalHours}:${
    goalMinutes > 10 ? goalMinutes : '0' + goalMinutes
  }`;
  let daySuffixed = '';
  if (goalDay === 1 || goalDay === 21 || goalDay === 31) {
    daySuffixed = `${goalDay}st`;
  } else if (goalDay === 2 || goalDay === 22) {
    daySuffixed = `${goalDay}nd`;
  } else {
    daySuffixed = `${goalDay}th`;
  }
  const output = `${daySuffixed} of ${months[goalMonth]} ${goalYear}, ${goalTime}`;
  return output;
}

export { displayDate, getDate };
