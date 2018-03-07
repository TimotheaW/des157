// //fullscreen ENTER button
// var full = document.getElementById("enter");

// full.addEventListener('click', function(){
//   fullscreenchange;
// });


// //overlay timed event
// var overlay = document.getElementById("overlay");

// overlay=setInterval(overlaydisappear, 4000);

// function overlaydisappear (){
//   overlay.style.display="none";
// }

var timerId = document.getElementById('timerId');
var overlay = document.getElementsByClassName("overlay");
var enterbtn = document.getElementById('enterbtn');

enterbtn.addEventListener('click', showOv);

function showOv(){
  overlay.classList.add('show');
  //fade up overlay
  timerId=setTimeout(hideOv, 4000);
}

function hideOv(){
  //fade down overlay
  overlay.classList.add('hide');
  clearTimeout(timerId);
}