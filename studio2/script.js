console.log("reading this");
"use strict";

//variables---------------------------------------
var actionH3 = document.getElementById ("action-h3");
var pencilCase = document.getElementById('pencil-case');
var highlight = document.getElementById('highlight');
var whiteout = document.getElementById('whiteout');
var pen = document.getElementById('pen');
var earphones = document.getElementById('earphones');

//overlay variable ids
var highlightOverlay = document.getElementById('highlight-overlay');
var whiteoutOverlay = document.getElementById('whiteout-overlay');
var penOverlay = document.getElementById('pen-overlay');
var earphonesOverlay = document.getElementById('earphones-overlay');

//close variable ids
var highlightClose = document.getElementById('highlight-close');
var whiteoutClose = document.getElementById('whiteout-close');
var penClose = document.getElementById('pen-close');
var earphonesClose = document.getElementById('earphones-close');


//pencil case open and close toggle--------------------------------------------------------------
pencilCase.addEventListener("click", function(){
  console.log(pencilCase.src);
  if(pencilCase.src=="https://timotheaw.github.io/des157/studio2/images/bad-closed.png"){
    pencilCase.src="https://timotheaw.github.io/des157/studio2/images/open_case_crop.png";
    highlight.setAttribute("class","show");
    whiteout.setAttribute("class","show");
    pen.setAttribute("class","show");
    earphones.setAttribute("class","show");
    actionH3.innerHTML="click on the icons to learn more!";
  } else {
    pencilCase.src="https://timotheaw.github.io/des157/studio2/images/bad-closed.png";
    highlight.setAttribute("class","hide");
    whiteout.setAttribute("class","hide");
    pen.setAttribute("class","hide");
    earphones.setAttribute("class","hide");
  }
  pencilCase.style.cursor="pointer";
});

//search javascript string manipulation to make the comparison correct (for finding the file)



//HIGHLIGHT overlays and close buttons--------------------------------------------------------------
highlight.addEventListener("click", function(){
    highlightOverlay.style.display="block";
});

highlightClose.addEventListener("click", function(){
    highlightOverlay.style.display="none";
});

//WHITEOUT overlays and close buttons--------------------------------------------------------------
whiteout.addEventListener("click", function(){
  whiteoutOverlay.style.display="block";
});

whiteoutClose.addEventListener("click", function(){
    whiteoutOverlay.style.display="none";
});

//PEN overlays and close buttons--------------------------------------------------------------
pen.addEventListener("click", function(){
  penOverlay.style.display="block";
});

penClose.addEventListener("click", function(){
    penOverlay.style.display="none";
});

//earphones overlays and close buttons--------------------------------------------------------------
earphones.addEventListener("click", function(){
  earphonesOverlay.style.display="block";
});

earphonesClose.addEventListener("click", function(){
    earphonesOverlay.style.display="none";
});
