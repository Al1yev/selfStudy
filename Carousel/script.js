let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__item");
const totalSlides = slides.length;
const next = document.getElementById("carousel__action--next");
const prev = document.getElementById("carousel__action--prev");

console.log(next);
next.addEventListener("click", function () {
  moveToNextSlide();
});
prev.addEventListener("click", function () {
  moveToPrevSlide();
});

let updateSlide = function () {
  for (let slide of slides) {
    slide.classList.remove("carousel__item--vis");
    slide.classList.add("carousel__item");
  }

  slides[slidePosition].classList.add("carousel__item--vis");
};

const moveToNextSlide = function () {
  if (slidePosition == totalSlides - 1) slidePosition = 0;
  else slidePosition++;
  updateSlide();
};
const moveToPrevSlide = function () {
  if (slidePosition == 0) slidePosition = totalSlides - 1;
  else slidePosition--;
  updateSlide();
};
