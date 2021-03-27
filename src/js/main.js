"use strict";

const messages = [
  "Soy creativa",
  "Me gusta aprender cosas nuevas",
  "Soy Frontend Developer Jr.",
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
