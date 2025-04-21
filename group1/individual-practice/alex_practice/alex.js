import {Card} from "./card.js";

const camera = document.getElementById("camera");
let context = camera.getContext("2d");
let deck = [];
let playerCards = [];
let dealerCards = [];

window.onload = function(){
    shuffleDeck();
    dealDeck();
    requestAnimationFrame(update);
    document.addEventListener("click", updateKeysDown);
    document.addEventListener("keyup", updateKeysUp);
}
function update(){
    requestAnimationFrame(update);
}

function dealDeck(){
    shuffleDeck();
    //dealing cards
    dealerCards.length = 0; //clearing player/dealer hands
    playerCards.length = 0; 
    for(let i = 0; i < 5; i++){
        dealerCards[i] = shift(deck);
        playerCards[i] = shift(deck);
    }
}

function shuffleDeck(){
    deck.length = 0;
    for(let i = 0; i < 52; i++)
        deck.push(new Card(i));
    for(let i = 0; i < 7; i++){
        for(let j = 0; j < 52; j++){
            let randNum = Math.random() * 52;
            switchCards(deck[j], deck[randNum]);
        }
    }
}

//function switches card1's and card2's info
function switchCards(card1, card2){
    let oldVal = card1.val;
    card1.val = card2.val;
    card2.val = oldVal;
    card1.valToCard();
    card2.valToCard();
}