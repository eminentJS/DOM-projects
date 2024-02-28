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
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// the date format below is year, month, day, hours, minutes, seconds
let futureDate = new Date(2020, 3, 25, 11, 30, 0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// month array is 0 index based
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

// the weekday is also 0 index based
const weekday = weekdays[futureDate.getDay()];
console.log(weekday);

giveaway.textContent = `giveaway ends of ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
