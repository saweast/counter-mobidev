"use strict";

var start_button = document.getElementById('start'),
    stop_button = document.getElementById('stop'),
    clock_min = document.getElementById('minutes'),
    clock_sec = document.getElementById('seconds'),
    msec = 0,
    sec = 0,
    min = 0,
    timeout;

function add() {
  msec++;
  if (msec >= 10) {
    msec = 0;
    sec++;
    if (sec >= 60) {
      sec = 0;
    }
  }
  timer();
}

function stop_show_reset () {

}

function timer() {
  timeout = setTimeout(add, 100);
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

stop_button.disabled = true;

start_button.addEventListener('click', function() {
  reset_animate();
  start_animate();
  timer();
  start_button.disabled = true;
  stop_button.disabled = false;
});

stop_button.addEventListener('click', function(){
  stop_animate();
  window.alert(min+' : '+sec+' : '+msec);
  start_button.disabled = false;
  stop_button.disabled = true;
  reset_animate();
}, false)
