//Representing playing cards
const deckSetup = (function() {
    //ascii representation
    const suits = { //getting unicode values for each suite
        'C':'\u2660',
        'S':'\u2665',
        'H':'\u2666',
        'D':'\u2663'
    }; //start with 3
    const values = ['A','J','Q','K',2,3,4,5,6,7,8,9,10];
    // make a card
    function cardSetup(rank,suit){
        // error gaurd
        if(!values.includes(rank)||!Object.keys(suits).includes(suit)){
            throw new console.error("Invalid rank or suit! Pick an existing card value and suit.");
        }
        //ascii card design
        const card = [
            '┌-----------┐',
            `| ${rank===10 ? rank:rank+' '}        |`,
            '|           |',
            '|     '+suits[suit]+'     |',
            '|           |',
            `|         ${rank===10 ? rank:rank+' '}|`,
            '└-----------┘'
        ];
        return card.join('\n');
    }

    return {
        createDeck: function(){
            const deck = [];
            for(let i=0; i<values.length;i++){
                for(const s in suits){
                    deck.push(cardSetup(values[i],s));
                }
            }
            return deck;
        }
    };
})();

function shuffleDeck(deck){
    if(deck.length===0){
        deck = deckSetup.createDeck();
    }
    let currentIndex = deck.length;
    while(currentIndex != 0){
        // get random location in bounds
        let rand = Math.floor(Math.random()*currentIndex);
        currentIndex--;
        // swap locations
        [deck[currentIndex],deck[rand]] = [deck[rand],deck[currentIndex]];
    }
}

function drawCard(deck,count){
    if(count<=0){
        throw new error("Drawing 0 cards: cannot draw negative cards.");

    }
    if(count>deck.length){
        throw new error(`Requesting to draw ${count} cards when there are only ${deck.length} remaining in the deck.`);
    }
    const drawn = [];
    for(let i=0; i<count; i++){
        drawn.push(deck.pop());
    }
    drawn.forEach(item => {
        console.log(item);
    });
    console.log(`${deck.length} cards remaining.`)
}

let deck = deckSetup.createDeck();
drawCard(deck,10);
