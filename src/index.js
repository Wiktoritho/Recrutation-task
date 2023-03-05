import { offers } from "../data/data.js";
const slides = document.querySelectorAll(".container");
const description = document.querySelectorAll(".container__description");
const price = document.querySelectorAll(".container__price");
const discount = document.querySelectorAll(".container__discount");
const box = document.querySelectorAll(".container__box");
const image = document.querySelectorAll(".container__image");
const button = document.querySelectorAll(".container__button");
const navlinks = document.querySelectorAll(".list__dot");
let timerContainer = null;
let timerBox = null;


function createDataFromObject() {
  for (let i = 0; i < box.length; i++) {
    description[i].innerHTML = offers[i].name;
    price[i].innerHTML = offers[i].currency + " " + offers[i].price;
    discount[i].innerHTML = offers[i].ribbon;
    image[i].setAttribute("src", `../images/${offers[i].image}`);
  }
}

function cutText() {
  for (let z = 0; z < description.length; z++) {
    if (description[z].innerText.length > 40) {
      description[z].innerText = description[z].innerText.substring(0, 39) + "...";
    }
  }
}

function setTimer() {
  timerContainer = setInterval(changeSlideAutomatic, 5000);
  timerBox = setInterval(changeOfferAutomatic, 2500);
}

function changeOfferAutomatic() {
  for (let j = 0; j < box.length; j++) {
    image[j].classList.toggle("active__image");
    button[j].classList.toggle("active__button");
  }
}

function changeSlideAutomatic() {
  for (let jj = 0; jj < slides.length; jj++) {
    slides[jj].classList.toggle("none");
    navlinks[jj].classList.toggle("active");
  }
}

function stopSlideAutomatic() {
  for (let iii = 0; iii < box.length; iii++) {
    box[iii].addEventListener("mouseover", () => {
      clearInterval(timerContainer);
      clearInterval(timerBox);
      for (let jjj = 0; jjj < box.length; jjj++) {
        if (image[jjj].classList.contains("active__image")) {
          image[jjj].classList.remove("active__image");
          button[jjj].classList.remove("active__button");
        }
      }
    });
    box[iii].addEventListener("mouseout", () => {
      image[0].classList.add("active__image");
      button[0].classList.add("active__button");
      image[2].classList.add("active__image");
      button[2].classList.add("active__button");
      setTimer();
    });
  }
}


setTimer();
stopSlideAutomatic();
createDataFromObject();
cutText();