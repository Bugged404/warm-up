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
        cardDeck: function(){
            const deck = [];
            for(let i=0; i<values.length;i++){
                for(const s in suits){
                    deck.push(cardSetup(values[i],s));
                }
            }
            deck.forEach(item => {
                console.log(item);
            });
        }
    };
})();

deckSetup.cardDeck();