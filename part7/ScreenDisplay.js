function screen1Display(){
  document.getElementById("screen1").style.display = "block";
  document.getElementById("screen2").style.display = "none";
  document.getElementById("screen3").style.display = "none";
}
function screen2Display(){
  document.getElementById("screen2").style.display = "block";
  document.getElementById("pageTwoBtns").style.display = "block";
  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen3").style.display = "none";
}
function screen3Display(){
  document.getElementById("screen3").style.display = "block";
  document.getElementById("screen2").style.display = "none";
  document.getElementById("screen1").style.display = "none";
}