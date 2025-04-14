var b = 0;
var g = 0;

  function bg() {
      setTimeout(intb,500);
      setTimeout(intg,250);
     setTimeout(intb1,1000);
     setTimeout(intg1,750);
     setTimeout(intb2,1500);
     setTimeout(intg2,1250);
     setTimeout(f,1550);
     setTimeout(s,3050);

    }


function intb() {
      document.getElementById('text').style.backgroundColor ="red";
}
function intg() {
  document.getElementById('text').style.backgroundColor ="green";
}

function intb1() {
      document.getElementById('text').style.backgroundColor ="red";
}

function intg1() {
  document.getElementById('text').style.backgroundColor ="green";
}
function intb2() {
      document.getElementById('text').style.backgroundColor ="red";
}

function intg2() {
  document.getElementById('text').style.backgroundColor ="green";
}

function f() {
var random= Math.ceil(Math.random()*2);
  if (random==2) {
     document.getElementById('text').style.backgroundColor ="green";
  }
  else {
    document.getElementById('text').style.backgroundColor ="red";

  }
}

function s() {
    document.getElementById('text').style.backgroundColor ="blue";
}
