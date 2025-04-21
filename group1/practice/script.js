var deck = [];

function createDeck() {
    const suits = ["heart.jpg", "spade.jpg", "club.jpg", "diamond.jpg"];
    const ranks = ["A", "1", "2", "3", "4", "5", "6", "7",
            "8", "9", "10", "J", "Q", "K"];
    for (let i = 0; i < suits.length(); i++) {
        for (let j = 0; j < ranks.length(); j++) {
            let card = (suits[i], ranks[i]); 
            deck.push(card);
        }
    }
}

function randomCard() {
    if (deck.length() == 0) {
        createDeck();
    }
    let cardIndex = Math.floor(Math.random() * deck.length());
    let cardValue = deck[cardIndex];
    return cardValue;
}

function flip() {
    const card = document.getElementById("card");
    const rankUp = document.getElementById("rank-up");
    const rankDown = document.getElementById("rank-down");
    const suit = document.getElementById("suit");
    card.classList.toggle("back");
    card.classList.toggle("front");
    card.style.transform = rotateY(180);
    let cardValue = randomCard();
    rankUp.textContent = 'A';
    rankDown.textContent = "K";
    rankUp.style.borderColor = "red";
    rankDown.style.color = "black"
    // rankUp.textContent = cardValue[1];
    // rankDown.textContent = cardValue[1];
    suit.src = cardValue[0];
}