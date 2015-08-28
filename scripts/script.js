"use strict";

var start_button = document.getElementById('start'),
    stop_button = document.getElementById('stop'),
    clock_min = document.getElementById('minutes'),
    clock_sec = document.getElementById('seconds'),
    msec = 0,
    sec = 0,
    min = 0,
    timeout,
    message = document.getElementsByClassName('message')[0],
    msg = '';

function add() {
  msec++;
  if (msec >= 100) {
    msec = 0;
    sec++;
    if (sec >= 60) {
      sec = 0;
      min++;
    }
  }
  timer();
}
function timer() {
  timeout = setTimeout(add, 10);
}

function start_animate() {
  clock_min.classList.add('run', 'animate');
  clock_sec.classList.add('run', 'animate');
}
function stop_animate() {
  clock_min.classList.remove('run');
  clock_sec.classList.remove('run');
}
function reset_animate() {
  clock_min.classList.remove('animate');
  clock_sec.classList.remove('animate');
}
function get_time() {
  message.classList.add('show');
  msg ='<p>'+
      (min ? (min > 9 ? min : '0' + min) : '00')
      +'m : '+
      (sec ? (sec > 9 ? sec : '0' + sec) : '00')
      +'s : '+
      (msec ? (msec > 9 ? msec : '0' + msec) : '00')
      +'ms</p>';
  message.innerHTML = msg;
}
function reset_time() {
  msec = sec = min = 0;
}

stop_button.disabled = true;

start_button.addEventListener('click', function() {
  reset_time();
  message.classList.remove('show');
  start_button.disabled = true;
  stop_button.disabled = false;
  start_animate();
  timer();
});

stop_button.addEventListener('click', function(){
  stop_animate();
  get_time();
  clearTimeout(timeout);
  start_button.disabled = false;
  stop_button.disabled = true;
  reset_animate();
})
