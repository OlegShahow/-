"use strict";

// ========================    slider  -=============================

const slider = document.querySelector(".slider");
const sliderLine = document.querySelector(".main__menu-cards");
const sliderCard = document.querySelectorAll(".menu-card");


const prev = document.querySelector(".slider__prev");
const next = document.querySelector(".slider__next");

let count = 0;
let width = slider.offsetWidth;


// чтобы не было в конце пробела и слайдер был заполнен(картинкам их ширину)
function init() {
    sliderCard.forEach((item) => {
      item.style.width = width + "px";
      item.style.height = "auto";
    });
  }

  function rollSlider() {
    sliderLine.style.transform = `translateX(${-count * width}px)`;
  }

  function nextSlider() {
    count++;
    if (count >= sliderCard.length - 4) {
      
      count = 0;
    }
    rollSlider();
  }
  
  next.addEventListener("click", nextSlider);

  function prevSlider() {
    count--;
    if (count < 0) {
      count =sliderCard.length - 5;
    }
    rollSlider();
  }
  prev.addEventListener("click", prevSlider);

// =======================================================================================================
  // ЗАПУСКАЕМ БИБЛИОТЕКУ ИЗ УРОКА 
// она срабатывает постоянно при скролле
// AOS.init();
// чтобы раз сработала и больше при скролле на мелькала
AOS.init({
    once:true
 });