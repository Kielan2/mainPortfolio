let a;
let time;
setInterval(() => {
  a = new Date();
  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById("sideNote").innerHTML = time;
}, 1000);

document.getElementById("aboutLink").addEventListener("click", showAbout);
document.getElementById("contactLink").addEventListener("click", showContact);
let aboutSection = document.querySelector(".tvAbout");
let circle = document.querySelector(".circles");
let contactSection = document.querySelector(".tvContact");

function showAbout() {
  circle.classList.toggle("hidden");
  aboutSection.classList.toggle("hidden");
}

function showContact() {
  circle.classList.toggle("hidden");
  contactSection.classList.toggle("hidden");
  aboutSection.classList.toggle("hidden");
}


