let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let deckDiv = document.getElementById("deck");

function getDeck() {
    let deck = new Array();
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let card = {suit: suits[i], value: values[j]};
            deck.push(card);
        }
    }
    return deck;
}

getDeck();

function shuffle() {
    for (let i = 0; i < 20; i++) {
        let location1 = Math.floor(Math.random * deck.length);
        return location1;
    }
}


