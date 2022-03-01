let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = [];
let deckDiv = document.getElementById("deck");

window.addEventListener("load", start);

function getDeck() {
  let deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      let card = { value: values[j], suit: suits[i] };
      deck.push(card);
    }
  }
  return deck;
}

let fragment = document.createDocumentFragment();

function shuffle() {
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);
    let temporaryCard = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = temporaryCard;
  }
  renderDeck();
}

function renderDeck() {
  for (let i = 0; i < deck.length; i++) {
    let card = document.createElement("div");

    let backFace = document.createElement("div");
    backFace.className = "back-face";

    let frontFace = document.createElement("div");
    frontFace.className = "front-face";

    let cardValue1 = document.createElement("p");
    let cardSuit1 = document.createElement("p");
    let cardSuit2 = document.createElement("p");
    let cardValue2 = document.createElement("p");
    let icon;

    if (deck[i].suit == "spades") {
      icon = "&spades;";
    } else if (deck[i].suit == "diamonds") {
      icon = "&diams;";
      card.style.color = "red";
    } else if (deck[i].suit == "clubs") {
      icon = "&clubs;";
    } else {
      icon = "&hearts;";
      card.style.color = "red";
    }

    cardValue1.innerHTML = deck[i].value;
    cardSuit1.innerHTML = icon;
    cardSuit2.innerHTML = icon;
    cardValue2.innerHTML = deck[i].value;
    card.classList.add("card");
    card.classList.add(deck[i].suit);

    frontFace.append(cardValue1, cardSuit1, cardSuit2, cardValue2);
    card.append(backFace, frontFace);
    deckDiv.appendChild(card);
  }
  deckDiv.childNodes.forEach((card) => card.addEventListener("click", flip));
}

function flip() {
  this.classList.add("flip");
}

function start() {
  deck = getDeck();
  shuffle();
  renderDeck();
}
