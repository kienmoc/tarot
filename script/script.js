let cardLove = document.querySelector ('.card-love');
let cardCareer = document.querySelector ('.card-career');
let cardLife = document.querySelector ('.card-life');
let mainCard = document.querySelector ('.main-card');



const allCard = document.querySelectorAll ('.card-content');
const mainButton = document.querySelectorAll ('.main-button');
const mainImg = document.querySelector ('.main-img');
const divImg = document.querySelector ('.div-img');


cardLove.addEventListener ('click', clickLove);
cardCareer.addEventListener ('click', clickCareer);
cardLife.addEventListener ('click', clickLife);
mainButton.addEventListener ('click', clickButton);

function clickLove () {
    for (let card of allCard) {
        let op = 1;
        while (op > 0) {
            card.style.opacity = op;
            op -= 0.2;
        }
    }
    let dImg = document.createElement ('div');
    dImg.classList.add ('div-img');
    mainCard.appendChild (dImg);
    let img = document.createElement ('img');
    img.src = './img/witch.jpg';
    img.classList.add ('main-img');

    let op = 0;
    img.style.opcacity = op;
    while (op < 1) {
        img.style.opcacity = op;
        op += 0.025;
    }
    dImg.appendChild (img);
    let button = document.createElement ('button');
    button.classList.add ('main-button');
    button.innerText = 'See your result';
    op = 0;
    button.style.opcacity = op;
    while (op < 1) {
        button.style.opcacity = op;
        op += 0.025;
    }
    dImg.appendChild (button);
}

function clickButton () {
    
}

function clickCareer () {
    for (let card of allCard) {
        let op = 1;
        while (op > 0) {
            card.style.opacity = op;
            op -= 0.2;
        }
    }
}

function clickLife() {
    for (let card of allCard) {
        let op = 1;
        while (op > 0) {
            card.style.opacity = op;
            op -= 0.2;
        }
    }
}
