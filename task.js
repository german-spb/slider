let sliders = document.querySelectorAll('.slider__item');
let arrowPrev = document.querySelector('.slider__arrow_prev');
let arrowNext = document.querySelector('.slider__arrow_next');
let activIndex = [...sliders].findIndex(obj => obj.classList.contains('slider__item_active'))

let sliderShow = (index) => {
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].classList.remove('slider__item_active');
    }
    sliders[index].classList.add('slider__item_active');
}

let prevSlide = () => {
    activIndex++;
    if (activIndex >= sliders.length) {
        activIndex = 0;
    }
    sliderShow(activIndex);
}

let nextSlide = () => {
    activIndex--;
    if (activIndex < 0) {
        activIndex = sliders.length - 1;
    }
    sliderShow(activIndex);
}

arrowNext.addEventListener('click', nextSlide);
arrowPrev.addEventListener('click', prevSlide);
