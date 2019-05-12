var date = new Date();
var waffleDate = new Date('August 24, 1860 00:00:00');
var pancakeDate  = new Date('January 1, 1860 00:00:00')

var year = date.getFullYear();

var footerYear = document.getElementById('currentYear');
footerYear.innerHTML = year;

var waffleMillisecsElapsed = date - waffleDate;
var waffleDaysElapsed = waffleMillisecsElapsed/86400000;

var wafflesEaten = waffleDaysElapsed*360000000;
var stringWafflesEaten = wafflesEaten.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

var waffleNumber = document.getElementById('waffleNumber');
waffleNumber.innerHTML = stringWafflesEaten;

var pancakeMillisecsElapsed = date - pancakeDate + 108483840000000;
var pancakeDaysElapsed = pancakeMillisecsElapsed/86400000;

var pancakesEaten = pancakeDaysElapsed*360000000;
var stringPancakesEaten = pancakesEaten.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

var pancakeNumber = document.getElementById('pancakeNumber');
pancakeNumber.innerHTML = stringPancakesEaten;