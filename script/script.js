let cardLove = document.querySelector ('.card-love');
let cardCareer = document.querySelector ('.card-career');
let cardLife = document.querySelector ('.card-life');
const allCard = document.querySelectorAll ('.card-content');



cardLove.addEventListener ('click', clickLove);
cardCareer.addEventListener ('click', clickCareer);
cardLife.addEventListener ('click', clickLife);

function clickLove () {
    for (let card of allCard) {
        let op = 1;
        while (op > 0) {
            card.style.opacity = op;
            op -= 0.2;
        }
    }
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
