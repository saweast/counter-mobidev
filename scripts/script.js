"use strict";
var start_button = document.getElementById('start'),
    stop_button = document.getElementById('stop'),
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


start_button.addEventListener('click', function() {
  timer();
});
stop_button.addEventListener('click', function(){
  window.alert(min+' : '+sec+' : '+msec);
}, false)
