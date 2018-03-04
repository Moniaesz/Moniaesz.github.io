let carousel = document.querySelector('.carousel');
let stage = document.querySelector('.carousel-stage');
let prev = document.querySelector('.carousel-prev');
let next = document.querySelector('.carousel-next');

let slides = document.querySelectorAll('.single-slide');

let slideWidth = slides[0].clientWidth;
console.log(slides);

let currentIndex = 0;

let slidesNumber = slides.length -1;

function goToSlide(index) {

    if (index < 0) {
        index = slidesNumber;
    }

    else if (index > slidesNumber) {
        index = 0;
    }

    carousel.style.left = index * (-slideWidth);
    currentIndex = index;
}

function slideToNext() {
    goToSlide(currentIndex + 1);
}

function slideToPrev() {
    goToSlide(currentIndex - 1);
}

function bindEvents() {
    prev.addEventListener('click', slideToPrev);
    next.addEventListener('click', slideToNext);
}

bindEvents();

// function autorotate() {
//     setInterval(slideToNext, 2000);
// }

// autorotate();