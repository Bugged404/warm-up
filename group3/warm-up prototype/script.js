const totalCard_num = 54; // 52 + 2 jokers
let cards = [];
const deckEl = document.getElementById('deck'); // create 

function renderDeck() {
  deckEl.innerHTML = '';
  for (let index = 0; index < cards.length; index++) {
    const filename = cards[index];

    const card = document.createElement('playing-card');
    card.style.zIndex = index;

    const inner_element = document.createElement('div');
    inner_element.className = 'card_trans';

    const front = document.createElement('div');
    front.className = 'card_front';
    front.style.backgroundImage = `url("card_images/${filename}")`;

    const back = document.createElement('div');
    back.className = 'card_back';

    inner_element.appendChild(front);
    inner_element.appendChild(back);
    card.appendChild(inner_element);

    // we can only click the top card so make it as cards.length - 1
    if (index === cards.length - 1) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        // Remove top card from deck
        const flippedCard = cards.pop();
        renderDeck();
        revealCard(flippedCard);
      });
    }

    deckEl.appendChild(card);
  }
}

function revealCard(filename) {
  const revealedEl = document.getElementById('revealed');
  revealedEl.innerHTML = ''; 

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
  revealedEl.appendChild(card);
}

function shuffleCardArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function cardStack_init() {
  cards = [];
  for (let i = 1; i <= totalCard_num; i++) {
    cards.push(`${i}.png`);
  }  
  
  shuffleCardArray(cards); // we need to shuffle at first, which can avoid the case of "in order" case when we refresh the page 
}

function shuffleDeck() {
  cardStack_init(); // Reset the full deck
  shuffleCardArray(cards); // Shuffle it
  renderDeck(); 

  const revealedEl = document.getElementById('revealed');
  revealedEl.innerHTML = ''; // reset that to the empty
}

cardStack_init();
renderDeck();
