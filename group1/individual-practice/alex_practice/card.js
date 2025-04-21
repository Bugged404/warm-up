const CARD_FACES = ["2",'3','4','5','6','7','8','9','10', 'J', 'Q', 'K', 'A'];
const CARD_SUITS =["Spades", "Clubs", "Hearts", "Diamonds"]

export class Card{
    constructor(val, frontFacing = false){
        this.val = val;
        this.frontFacing = frontFacing;
        this.valToCard(val);
    }

    valToCard(val){
        this.face = valToFace(val);
        this.suit = valToSuit(val);
        this.color = valToColor(val);
    }

    valToFace(val){
        let faceNum = (val / 4);
        return CARD_FACES[faceNum];
    }

    valToSuit(val){
        let suitNum = val % 4;
        return CARD_SUITS[suitNum];
    }

    valToColor(val){
        let colorNum = val % 4;
        let trick = colorNum * (colorNum - 3); //if trick is 0, then it is clubs or spades
        if(trick)
            return "red";
        else
            return "black";
    }

    flipCard(){
        this.frontFacing = this.frontFacing? false : true;
    }

    compareTo(card){
        return this.val - card.val;
    }
    // drawCardImg(){ //for later
    
    // }
}