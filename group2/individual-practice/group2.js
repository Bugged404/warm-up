// program to shuffle the deck of cards

// declare card elements
const cardUnicode = {
  Spades: {
    Ace: "\u{1F0A1}",
    Jack: "\u{1F0AB}",
    Queen: "\u{1F0AD}",
    King: "\u{1F0AE}",
  },
  Diamonds: {
    Ace: "\u{1F0C1}",
    Jack: "\u{1F0CB}",
    Queen: "\u{1F0CD}",
    King: "\u{1F0CE}",
  },
};

const suits = Object.keys(cardUnicode); 
const values = [
"Ace",
"Jack",
"Queen",
"King",
];

// Unicode front side mapping

const cardUnicodeBack = "\u{1F0A0}";
// empty array to contain cards
let deck = [];

// create a deck of cards
for (let suit of suits) {
for (let value of values) {
  deck.push({
    value,
    suit,
    symbol: cardUnicode[suit][value]  // will always exist
  });
}
}

function drawCard() {
  const shuffle = [];
  for(let i = 0; i < 3;i++){
    const idx = Math.floor(Math.random() * deck.length);
    shuffle.push(deck[idx]);
  }
  return shuffle[0];
}

window.addEventListener("DOMContentLoaded", () => {
  const cardEl = document.getElementById("card");
  const infoEl = document.getElementById("info");
  const btn    = document.getElementById("draw");
  console.log("Deck contains:", deck);
  btn.addEventListener("click", () => {
    const c = drawCard();
    cardEl.textContent = c.symbol;
    infoEl.textContent = `${c.value} of ${c.suit}`;
  
    cardEl.style.transform = "rotateY(180deg) translate(0, 300px)";
  });
});
//shuffle

// Flip
