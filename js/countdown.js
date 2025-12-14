"use strict"

function countdown() {
  let now = new Date();

  let hoursLeft = 23 - now.getHours();
  let minutesLeft = 59 - now.getMinutes();
  let secondsLeft = 59 - now.getSeconds();

  let secondWord = "seconden";
  let minuteWord = "minuten ";
  let hourWord = "uur ";
  let normalWord = "nog"
  if (secondsLeft === 1) {
    secondWord = "seconde ";
  }
  if (minutesLeft === 1) {
    minuteWord = "minuut ";
  }
  if (hoursLeft === 0) {
    normalWord = "Wees snel! Nog maar "
  }

  document.getElementById("countdownword").innerHTML = normalWord;
  document.getElementById("countdown").innerHTML =
    hoursLeft + " " + hourWord +
    minutesLeft + " " + minuteWord +
    secondsLeft + " " + secondWord;
}

countdown();
setInterval(countdown, 1000);