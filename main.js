const sliderElement = document.querySelector('.slider');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const workElement = document.querySelector('.work');
const images = document.querySelectorAll('.slider .image');

const getInitialLeftMargin = () => {
  const workElementWidth = getComputedStyle(workElement).width;
  const workElementWidthNumber = +workElementWidth.split('px')[0];

  const imageWidth = getComputedStyle(images[0]).width;
  const imageElementNumber = +imageWidth.split('px')[0];

  const leftMargin = workElementWidthNumber / 2 - imageElementNumber / 2;

  return leftMargin;
};

const getMoveAmount = () => {
  const imageRightMargin = getComputedStyle(images[0]).marginRight;
  const imageRightMarginNumber = +imageRightMargin.split('px')[0];

  const imageWidth = getComputedStyle(images[0]).width;
  const imageElementNumber = +imageWidth.split('px')[0];

  return imageRightMarginNumber + imageElementNumber;
};

const initialMargin = getInitialLeftMargin();
let margin = getInitialLeftMargin();
let currentImage = 1;

const setInitialSliderMargin = () => {
  sliderElement.style.marginLeft = `${margin}px`;
};

setInitialSliderMargin();

leftBtn.addEventListener('click', () => {
  if (margin === initialMargin) return;
  currentImage--;
  margin += getMoveAmount();
  sliderElement.style.marginLeft = `${margin}px`;
  console.log(currentImage);
});

rightBtn.addEventListener('click', () => {
  const totalImages = images.length;
  if (currentImage >= totalImages) return;
  currentImage++;
  margin -= getMoveAmount();
  sliderElement.style.marginLeft = `${margin}px`;
  console.log(currentImage);
});
