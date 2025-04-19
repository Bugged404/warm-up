const totalCards = 54; // 52 + 2 jokers
let cards = [];
const deckEl = document.getElementById('deck');

function collectDeck() {
  cards = [];
  for (let i = 1; i <= totalCards; i++) {
    cards.push(`${i}.png`);
  }
}

function renderDeck() {
  deckEl.innerHTML = '';
  for (let filename of cards) {
    const card = document.createElement('playing-card');
    const inner = document.createElement('div');
    inner.className = 'card_trans';

    const front = document.createElement('div');
    front.className = 'card_front';
    front.style.backgroundImage = `url("card_images/${filename}")`;

    const back = document.createElement('div');
    back.className = 'card_back';

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    card.addEventListener('click', () => {
      inner.classList.toggle('flipped');
    });

    deckEl.appendChild(card);
  }
}

function shuffleDeck() {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  renderDeck();
}

collectDeck();
renderDeck();
