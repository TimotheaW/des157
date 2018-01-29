console.log("this is my script.js comment");
"use strict";

var results = document.getElementById("results");
var msg = document.getElementById("msg");
var container = document.getElementById("container");

document.f.onsubmit=processForm;

document.f.onreset=resetForm;

function processForm() {
  results.setAttribute('class','show');

  var userName= document.f.userName.value;
  var noun1= document.f.noun1.value;
  var designSpecialization= document.f.designSpecialization.value;
  var famousCompany= document.f.famousCompany.value;
  var num= document.f.num.value;
  var color= document.f.color.value;
  var animal= document.f.animal.value;
  var noun2= document.f.noun2.value;
  var noun3= document.f.noun3.value;

  msg.innerHTML = "Hello " + userName + ", I stumbled upon your portfolio and I love your work. Could you design a " + noun1 +" for me? I've searched all over for a " + designSpecialization + " designer to work with and I think your style is the one I’ve been looking for. <br> I want it to look like the design by " + famousCompany+ ", but don’t copy it, just make it different enough but keep it the same! I was thinking we could also use comic sans for a fun, casual vibe. <br> I’ll pay you "+ number + " in cash for the job. We need this done ASAP, so just start and figure it out on your own, yeah?<br> Thanks! <br> Bad "+color+" "+animal+"<br> Representative of "+noun2+" " +noun3;

  document.getElementById("container").style.top="-1000px";

  return false;
}

function resetForm (){
  msg.innerHTML="";
  results.setAttribute('class','hide');
}
