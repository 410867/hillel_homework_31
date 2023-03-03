const nameImg = [
    'img_1.jpeg',
    'img_2.jpeg',
    'img_3.jpeg',
    'img_4.jpeg',
    'img_5.jpeg',
    'img_6.jpeg',
    'img_7.jpeg',
    'img_8.jpeg',
];

const sliderItem = document.querySelector('.slider__item');
const btnPrev = document.querySelector('.btn__prev');
const btnNext = document.querySelector('.btn__next');
let counter = 0;
let listImg = [];

nameImg.forEach((item, i) => {
    const img = document.createElement('img');
    img.src = `/img/${item}`;
    listImg.push(img);
});

sliderItem.append(listImg[counter]);
btnPrev.classList.add('visibility__hide');

btnPrev.addEventListener('click', () => {
    counter--;

    sliderItem.innerHTML = ``;
    sliderItem.append(listImg[counter]);

    if(counter === 0) {
        btnPrev.classList.add('visibility__hide');
    }
    if(counter !== (listImg.length - 1)) {
        btnNext.classList.remove('visibility__hide');
    }

});

btnNext.addEventListener('click', () => {
    counter++;

    sliderItem.innerHTML = ``;
    sliderItem.append(listImg[counter]);

    if(counter === (listImg.length - 1)) {
        btnNext.classList.add('visibility__hide');
    }
    if(counter !== 0) {
        btnPrev.classList.remove('visibility__hide');
    }
});