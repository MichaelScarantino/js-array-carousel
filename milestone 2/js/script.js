// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini 
// e i testi delle immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. 
// Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.

// Array declaration
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


const mainImage = document.querySelector('.main-img');
const thumbImage = document.querySelector('.thumb');

// scroll trrough the ithems array and hang it on the html
for( let i = 0; i < items.length; i++ ) {
    const thisImage = items[i];
    const thisTitle = title[i];
    const thisText = text[i];

    // fold the container main img
     const newDiv = `
    <div class="single-main-img">
        <img src="${thisImage}" alt="${i}">
            <div class="single-main-img-text">
            <h3>${thisTitle}</h3>
            <p>${thisText}</p>
        </div>
    </div>
    `;
    mainImage.innerHTML += newDiv;

    // fold the container thumb img
    const newDivThumb = `
    <div class="single-thumb">
        <img src="${thisImage}" alt="${i}">
        <div class="overlay">
        </div>
    </div>
    `;

    thumbImage.innerHTML += newDivThumb;
}

// let's give the active class to the element
let activeClass = 0;
const allImages = document.getElementsByClassName('single-main-img');
const allThumb = document.getElementsByClassName('single-thumb');
const allOverlay = document.getElementsByClassName('overlay');

// add the active class
allImages[activeClass].classList.add('active');
allThumb[activeClass].classList.add('active');
allOverlay[activeClass].classList.add('active');

