let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = [];
let deckDiv = document.getElementById("deck");

function getDeck() {
    let deck = [];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let card = {value: values[j], suit: suits[i]};
            deck.push(card);
        }
    }
    return deck;
}

let fragment = document.createDocumentFragment();

function shuffle() {
    for (let i = 0; i < 1000; i++) {
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let temporaryCard = deck[location1];

		deck[location1] = deck[location2]; 
		deck[location2] = temporaryCard; 
  
    }
    renderDeck();
}


function renderDeck() {
    deckDiv.innerHTML = "";
    for (let i = 0; i < deck.length; i++) {
        let card = document.createElement("div");
        let icon = "";
        
        if (deck[i].suit == "spades") {
            icon = "&spades;";
        }
        else if (deck[i].suit == "diamons") {
            icon = "&diams;";
        }
        else if (deck[i].suit == "clubs") {
            icon = "&clubs;";
        }
        else {
            icon = "&hearts;";
        }

        card.innerHTML = (deck[i].value + "" + icon) + (deck[i].value + "" + icon);
        card.classList.add("card");
        card.classList.add(deck[i].suit);

        deckDiv.appendChild(card);
    }
}

function start() {
    deck = getDeck();
    shuffle();
    renderDeck();
}

window.addEventListener('load', start);