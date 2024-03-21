const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;
console.log(slidesLength);

let activeSlideIndex = 0;

let width_res = (slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`);
console.log(width_res);

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  console.log(direction);
  const sliderHeight = sliderContainer.clientHeight;
  console.log(sliderHeight);
  if (direction === "up") {
    activeSlideIndex++;
    console.log(activeSlideIndex);
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
      console.log(activeSlideIndex);
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    console.log(activeSlideIndex)
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
      console.log(activeSlideIndex)
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
