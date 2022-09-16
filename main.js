const sliderElement = document.querySelector('.slider');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const workElement = document.querySelector('.work');
const images = document.querySelectorAll('.slider .image');

const getWidth = (element) => {
  const width = Number(getComputedStyle(element).width.split('px')[0]);
  return width;
};

const getMoveAmount = (image, imageWidth) => {
  const imageRightMargin = getComputedStyle(image).marginRight;
  const imageRightMarginNumber = +imageRightMargin.split('px')[0];

  return imageRightMarginNumber + imageWidth;
};

const initSlider = () => {
  let currentImage = Math.ceil(images.length / 2);

  const imageWidth = getWidth(images[0]);
  const moveAmount = getMoveAmount(images[0], imageWidth);
  const initialLeftMargin = getWidth(workElement) / 2 - imageWidth / 2 - moveAmount * (currentImage - 1);

  sliderElement.style.marginLeft = `${initialLeftMargin}px`;

  let margin = initialLeftMargin;

  leftBtn.addEventListener('click', () => {
    if (currentImage === 1) return;
    currentImage--;
    margin += getMoveAmount(images[0], imageWidth);
    sliderElement.style.marginLeft = `${margin}px`;
    return;
  });

  rightBtn.addEventListener('click', () => {
    const totalImages = images.length;
    if (currentImage >= totalImages) return;
    currentImage++;
    margin -= getMoveAmount(images[0], imageWidth);
    sliderElement.style.marginLeft = `${margin}px`;
  });
};

initSlider();
