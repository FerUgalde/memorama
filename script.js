var cardsFlipped = [];
let matches = [];

function flipCard(card) {
  if (cardsFlipped.length < 2) {
    card.classList.toggle("flip");
    cardsFlipped.push(card);
  }
  if (cardsFlipped.length === 2) {
    matchVerify();
  }
}

function matchVerify() {
  if (cardsFlipped[0].dataset.framework === cardsFlipped[1].dataset.framework) {
    matches.push(cardsFlipped[0].dataset.framework);
    cardsFlipped.forEach((card) => {
      card.setAttribute("disabled", true);
      card.onclick = null;
    });
    cardsFlipped = [];
    console.log("Done!");
    showModal();
  } else {
    console.log("Nope");
    setTimeout(() => {
      cardsFlipped.forEach((card) => {
        card.classList.toggle("flip");
      });
      cardsFlipped = [];
    }, 1000);
  }
}
// Obtén el modal
var modal = document.getElementById("myModal");
// Obtén el elemento <span> que cierra el modal
var span = document.getElementById("closeModalButton");
// Cuando el usuario haga clic en <span> (x), cierra el modal
span.onclick = function () {
  modal.style.display = "none";
};
var cardContents = {
  'card4': 'Este es el contenido para el par card4.',
  'card5': 'Este es el contenido para el par card5.',

};

function showModal() {

  var lastPair = matches[matches.length - 1];
  console.log(lastPair);

  var content = cardContents[lastPair];

  if (!content) {
    content = 'Contenido por defecto';
  }

  var modalContent = document.querySelector('.modal-content p');
  modalContent.textContent = content;

  modal.style.display = "block";
}


// Cuando el usuario haga clic en cualquier lugar fuera del modal, ciérralo
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// // Obtén el botón que abre el modal
// var btn = document.getElementById("openModalButton");

// // Cuando el usuario haga clic en el botón, abre el modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };
window.onload = function() {
  let cards = Array.from(document.querySelectorAll('.card'));
  let content = document.querySelector('.content');

  cards.sort(() => Math.random() - 0.5);

  cards.forEach(card => content.appendChild(card));
};
