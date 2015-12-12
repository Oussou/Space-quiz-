var life = 2;
function lose(){
    life = life-1;
    document.getElementById("Life").innerHTML = "Lives: "+ life;
    if (life == 0){
    alert("You lost, Try again")
    window.location.href = "lose.html";
}

}
function myFunction1(){
  alert("You got it right");
  window.location.href = "mercury.html";
  document.getElementById("Life").innerHTML = life;
}
function myFunction2(){
  alert("You got it right");
  window.location.href = "jupiter.html";
  document.getElementById("Life").innerHTML = life;
}
function myFunction3(){
  alert("You got it right");
  window.location.href = "asteroid.html";
  document.getElementById("Life").innerHTML = life;
}
function myFunction4(){
  alert("You got it right");
  window.location.href = "mars.html";
  document.getElementById("Life").innerHTML = life;
}
function myFunction5(){
  alert("You got it right");
  window.location.href = "earth.html";
  document.getElementById("Life").innerHTML = life;
}
function myFunction6(){
  alert("You got it right");
  window.location.href = "win.html";
  document.getElementById("Life").innerHTML = life;
}


