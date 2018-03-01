console.log("reading");
"use strict";

var results = document.getElementById("results");
var msg = document.getElementById("msg");
var container = document.getElementById("container");
var bottomReset = document.getElementById("bottom-reset");

document.f.onsubmit=processForm;

document.f.onreset=resetForm;
bottomReset.onclick=resetForm;

function processForm() {
  results.setAttribute('class','show');
  container.style.marginTop = '-40%';

  var userName= document.f.userName.value;
  var noun1= document.f.noun1.value;
  var designSpecialization= document.f.designSpecialization.value;
  var famousCompany= document.f.famousCompany.value;
  var num= document.f.num.value;
  var color= document.f.color.value;
  var animal= document.f.animal.value;
  var noun2= document.f.noun2.value;
  var noun3= document.f.noun3.value;

  msg.innerHTML = "Hello <strong>" + userName + "</strong>, I stumbled upon your portfolio and I love your work. Could you design a <strong>" + noun1 +"</strong> for me? I've searched all over for a <strong>" + designSpecialization + "</strong> designer to work with and I think your style is the one I’ve been looking for. I want it to look like the popular design by <strong>" + famousCompany+ "</strong>, but don’t copy it, just make it different enough but keep it the same!<br><br> I was thinking we could also use comic sans for a fun, casual, and trendy vibe. I’ll pay you <strong>$"+ num + "</strong> in cash for the job. We need this done ASAP, so just start and figure it out on your own, yeah?<br><br> Thanks! <br> Bad <strong>"+color+" "+animal+"</strong> <br> Representative of <strong>"+noun2+" " +noun3+"</strong>";

  return false;
}
