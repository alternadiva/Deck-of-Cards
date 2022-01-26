let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let deckDiv = document.getElementById("deckk");

function getDeck() {
    let deck = [];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let card = {suit: suits[i], value: values[j]};
            deck.push(card);
        }
    }
    return deck;
}

function shuffle() {
    for (let i = 0; i < 100; i++) {
        let location1 = Math.floor(Math.random() * deck.length);
        deck = location1;
    }
    renderDeck();
}


function renderDeck() {
    deckDiv.innerHTML = "";
    for (let i = 0; i < deck.length; i++) {
        let card = document.createElement("div");
        let icon = "";
        
        if (deck[i].suit == "spades") {
            icon = "&spades";
        }
        else if (deck[i].suit == "diamons") {
            icon = "&diams";
        }
        else if (deck[i].suit == "clubs") {
            icon = "&clubs";
        }
        else {
            icon = "&hearts";
        }

        card.innerHTML = deck[i].value + "" + icon;
        card.classList.add("card");
        card.classList.add(deck[i].suit);

        deckDiv.appendChild(card);
    }
}

