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
    count = sliderCard.length - 5;
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
  once: true,
});

//  ============================   sliderBig  =============================
const sliderSes = document.querySelector(".sliderses");
const sliderLines = document.querySelector(".slider-line");
const sliderImages = document.querySelectorAll(".slider-area-card");

const nextt = document.querySelector(".slider__ne");
const prevv = document.querySelector(".slider__pr");

let countt = 0;
let widthh = sliderSes.offsetWidth;

// чтобы не было в конце пробела и слайдер был заполнен(картинкам их ширину)
function init() {
  sliderImages.forEach((item) => {
    item.style.width = widthh + "px";
    item.style.height = "auto";
  });
}

// window.addEventListener(init); НЕ НАДО !!!!! ЕСТЬ ВЫШЕ ПРАВИЛО РАБОТАЕТ
// window.addEventListener(rollSlider); прочитать ошибку !!!!

function rollSliderES() {
  sliderLines.style.transform = `translateX(${-countt * widthh}px)`;
}

function nextSliderEs() {
  countt++;
  if (countt >= sliderImages.length) {
    countt = 0;
  }
  rollSliderES();
}

nextt.addEventListener("click",  nextSliderEs);

function prevSliderEs() {
  countt--;
  if (countt < 0) {
    countt = sliderImages.length - 1;
  }
  rollSlideES();
}
prevv.addEventListener("click",prevSliderEs);

// =============================   BURGER  ===================================

const burger = document.querySelector("#button");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("display");
});
