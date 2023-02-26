import { offers } from "../data/data.js";

const slides = document.querySelectorAll(".container");
const description = document.querySelectorAll(".container__description");
const price = document.querySelectorAll(".container__price");
const discount = document.querySelectorAll(".container__discount");
const box = document.querySelectorAll(".container__box");
const image = document.querySelectorAll(".container__image");
const button = document.querySelectorAll(".container__button");
const navlinks = document.querySelectorAll(".list__dot");
const arrow = document.querySelectorAll(".arrow");
let currentSlide = 0;

function createDataFromObject() {
  for (let i = 0; i < description.length; i++) {
    description[i].innerHTML = offers[i].name;
    price[i].innerHTML = offers[i].currency + " " + offers[i].price;
    discount[i].innerHTML = offers[i].ribbon;
    image[i].setAttribute("src", `../images/${offers[i].image}`);
  }
}

function createHoverEffect() {
  for (let j = 0; j < box.length; j++) {
    box[j].addEventListener("mouseover", () => {
      image[j].style.opacity = "0.5";
      button[j].style.cursor = "pointer";
      button[j].style.display = "block";
      image[j].style.transition = "0.5s";
      button[j].style.transition = "0.5s";
    });
  }
}

function removeHoverEffect() {
  for (let ii = 0; ii < box.length; ii++) {
    box[ii].addEventListener("mouseout", () => {
      image[ii].style.opacity = "1";
      button[ii].style.cursor = "arrow";
      button[ii].style.display = "none";
    });
  }
}

function changeSlide(n) {
  if (n >= slides.length) {
    n = 0;
  }
  if (n < 0) {
    n = slides.length - 1;
  }
  slides[currentSlide].classList.toggle("none");
  navlinks[currentSlide].classList.toggle("active");
  slides[n].classList.toggle("none");
  navlinks[n].classList.toggle("active");
  currentSlide = n;
  console.log(currentSlide);
  for (let jj = 0; jj < arrow.length; jj++) {
    if (currentSlide === 1) {
      arrow[0].classList.remove("none");
      arrow[1].classList.add("none");
    } else {
      arrow[0].classList.add("none");
      arrow[1].classList.remove("none");
    }
  }
}

navlinks.forEach((bullet, bulletIndex) => {
  bullet.addEventListener("click", () => {
    if (currentSlide !== bulletIndex) {
      changeSlide(bulletIndex);
    }
  });
});

arrow.forEach((bullet, bulletIndex) => {
  bullet.addEventListener("click", () => {
    if (currentSlide !== bulletIndex) {
      changeSlide(bulletIndex);
    }
  });
});

createDataFromObject();
createHoverEffect();
removeHoverEffect();
