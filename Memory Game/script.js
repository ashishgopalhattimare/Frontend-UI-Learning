const numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const sets = ['C','D','H','S'];

let allCards = [];
for(const num of numbers) {
    for(const set of sets) allCards.push(`${num}${set}`)
}

const CARD_MATCH = "card-match";
const TOTAL_CARD = 15;

let correctCards = 1, seconds = 0, moves = 0;
let firstCard, secondCard;
let firstPick = true, nextMove = true;
let gameStart = false;
let timer;

const timeElement = document.getElementById("timeText");
const moveElement = document.getElementById("moveText");

const randomCard = () => Math.floor(Math.random() * allCards.length);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// TOTAL 15 CARD : 14 USEFULL, 1 USELESS
function generateCard()
{
    shuffle(allCards);
    let setCard = new Set(), gameCards = [];

    for(let i = 1; i <= TOTAL_CARD; ) {
        const card = allCards[randomCard()];

        if(!setCard.has(card)) {
            gameCards.push(card, card);
            setCard.add(card);
            i+=2;
        }
    }
    gameCards.pop();
    shuffle(gameCards);

    const gameScreen = document.getElementById('gamescreen');
    gameScreen.innerHTML = ''

    gameCards.forEach(card => {
        let divElement = document.createElement('div');
        divElement.classList.add("memory-card");
        divElement.id = card;

        divElement.innerHTML = `\
        <img class="front-face" src="52_Cards/PNG/gray_back.png">\
        <div class="back-face"><img class="front-face" src="52_Cards/PNG/${card}.png"></div>\
        `
        divElement.addEventListener('click', flipCard);
        gameScreen.append(divElement);
    });
}

function incrementSeconds() {
    seconds += 1;
    timeElement.innerText = `${seconds} sec`;
}

function flipCard() {

    if(gameStart === false) {
        timer = setInterval(incrementSeconds, 1000);
        gameStart = true;
    }

    function compareCards(card1, card2) {
        return card1.id === card2.id;
    }

    if(this.classList.contains(CARD_MATCH) || nextMove === false) {
        return;
    }

    if(firstPick) { // first card
        firstPick = !firstPick;
        firstCard = this;

        this.classList.toggle('flip'); // flip the first card

        moveElement.innerText = ++moves;
    }
    else {
        // if the firstCard is again clicked, then firstPick is false
        if(this === firstCard) {
            console.log('Same Card ', this);
        }
        else {

            firstPick  = !firstPick;
            secondCard = this;

            this.classList.toggle('flip'); // flip the second card

            if(compareCards(firstCard, secondCard)) {
                secondCard.classList.add(CARD_MATCH);
                firstCard.classList.add(CARD_MATCH);

                correctCards += 2;
                if(correctCards === TOTAL_CARD) {
                    clearInterval(timer);
                    gameStart = false;

                    $("#playerwon").modal();
                }
            }
            else {
                nextMove = false; // Do not continue the next move, wait for the animation
                setTimeout(() => {
                    secondCard.classList.toggle('flip');
                    firstCard.classList.toggle('flip');

                    nextMove = true; // Continue with the next move
                }, 1000);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    generateCard();
});