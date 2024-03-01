var cardState = false;
let cards=[];

class Card{
    constructor(){

    }
}

function flipCard(card) {
    card.classList.toggle('flip');
    cardState = !cardState;
    console.log(cardState);
}


// Obtén el modal
var modal = document.getElementById("myModal");

// Obtén el botón que abre el modal
var btn = document.getElementById("openModalButton");

// Obtén el elemento <span> que cierra el modal
var span = document.getElementById("closeModalButton");

// Cuando el usuario haga clic en el botón, abre el modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario haga clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier lugar fuera del modal, ciérralo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}