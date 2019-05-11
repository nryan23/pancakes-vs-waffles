var date = new Date();
var waffleDate = new Date('August 24, 1860 00:00:00');

var year = date.getFullYear();

var footerYear = document.getElementById('currentYear');
footerYear.innerHTML = year;

var millisecsElapsed = date - waffleDate;
var daysElapsed = millisecsElapsed/86400000;

var wafflesEaten = daysElapsed*360000000;
var stringWafflesEaten = wafflesEaten.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

var waffleNumber = document.getElementById('waffleNumber');
waffleNumber.innerHTML = stringWafflesEaten;