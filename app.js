var date = new Date();
var year = date.getFullYear();

var footerYear = document.getElementById('currentYear');
footerYear.innerHTML = year;

var milliseconds = date.getMilliseconds();
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hours = date.getHours();
var days = date.getDay();
var months = date.getMonth();

var secsElapsedSinceInventionOfWaffle = (milliseconds/60) + seconds + minutes*60 + hours*3600
+ days*60*60*24 + months*60*60*24*30 + year*60*60*24*365;

var wafflesEaten = secsElapsedSinceInventionOfWaffle * 4167;
var stringWafflesEaten = wafflesEaten.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

var waffleNumber = document.getElementById('waffleNumber');
waffleNumber.innerHTML = stringWafflesEaten;