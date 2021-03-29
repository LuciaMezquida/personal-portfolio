"use strict";

//Bubbles entrance
const bubbles = document.querySelectorAll(".about__column2--bubble");
window.addEventListener("scroll", () => {
  let scrollPixel = window.scrollY;
  if (scrollPixel > 1111) {
    bubbles.forEach((item) => {
      item.classList.add("bigEntrance");
    });
  }
});
