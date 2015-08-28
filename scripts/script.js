"use strict";

var startButton = document.getElementById('start'),
    stopButton = document.getElementById('stop'),
    clockMin = document.getElementById('minutes'),
    clockSec = document.getElementById('seconds'),
    msec = 0,
    sec = 0,
    min = 0,
    timeout,
    message = document.getElementsByClassName('message')[0],
    msg = '';

function add() {
  msec++;
  if (msec > 9) {
    msec = 0;
    sec++;
    if (sec > 59) {
      sec = 0;
      min++;
    }
  }
  timer();
}
function timer() {
  timeout = setTimeout(add, 100);
}
function startAnimate() {
  clockMin.classList.add('run', 'animate');
  clockSec.classList.add('run', 'animate');
}
function stopAnimate() {
  clockMin.classList.remove('run');
  clockSec.classList.remove('run');
}
function resetAnimate() {
  clockMin.classList.remove('animate');
  clockSec.classList.remove('animate');
}
function getTime() {
  message.classList.add('show');
  msg ='<p>'+(min ? (min > 9 ? min : '0' + min) : '00')+'m : '+
    (sec ? (sec > 9 ? sec : '0' + sec) : '00')+'s : '+
    (msec ? (msec > 9 ? msec : '0' + msec) : '00')+'ms</p>';
  message.innerHTML = msg;
}
function resetTime() {
  msec = sec = min = 0;
}
function startCount() {
  resetTime();
  message.classList.remove('show');
  startButton.disabled = true;
  stopButton.disabled = false;
  startAnimate();
  timer();
}
function stopCount() {
  stopAnimate();
  getTime();
  clearTimeout(timeout);
  startButton.disabled = false;
  stopButton.disabled = true;
  resetAnimate();
}

stopButton.disabled = true;

startButton.addEventListener('click', startCount, false);
stopButton.addEventListener('click', stopCount, false);
