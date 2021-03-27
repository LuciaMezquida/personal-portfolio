"use strict";

const messages = [
  "Soy creativa",
  "Me gusta aprender cosas nuevas",
  "Soy Frontend Developer",
];
let index = 0;
const changeHeaderMessage = () => {
  const headerMessage = document.querySelector(".js-welcome-job");
  if (index >= 3) {
    index = 0;
  }
  headerMessage.innerHTML = messages[index];
  index++;
};
setInterval(changeHeaderMessage, 2000);
var slideIndex = [1, 1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
