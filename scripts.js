let cardCounter = 1;

function deleteCard(card) {
    //delete parent of parent of button. In essence the entire card class
    if(cardCounter>1) {
        card.parentNode.parentNode.remove();
        cardCounter--;
    }
    else
        alert("You can't delete cards if there is one left. ");

}

function addCard() {

    //adds a new card by making a copy of the first card and resetting all three input fields
    let card = document.querySelector(".card");
    let newCard = card.cloneNode(true);
    
    //reseting class name (input) and both textareas
    newCard.querySelector("input").value = ''; 
    let textareas = newCard.querySelectorAll("textarea"); 
    for(let i = 0; i<2; i++) {
        textareas[i].value = '';
    }
    

    //appending the newly made card
    let cardList = document.querySelector(".card-list");
    cardList.appendChild(newCard);

    cardCounter++;
    

}

function start() {

    console.log("Webpage has loaded.");

}
window.addEventListener("load", start);