const textArray = ["Web Developer", "Java Programmer", "Civil Engineer"];
let index = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 60;
const delayBetween = 2000;

const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

function type() {
  if (charIndex < textArray[index].length) {
    typedText.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, delayBetween);
});
