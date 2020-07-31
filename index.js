// function myFunction(){
//   document.getElementById("hamburger").addEventListener("click",(ham)=>{
//     console.log("Working"); 
//     if (ham.style.display === "block") {
//     ham.style.display = "none";
//   } else {
//     ham.style.display = "block";
//   }})};


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}