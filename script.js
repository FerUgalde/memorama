var cardsFlipped = [];
let matches = [];
let all = 0;

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
  if (
    cardsFlipped[0].dataset.framework === cardsFlipped[1].dataset.framework &&
    cardsFlipped[0] !== cardsFlipped[1]
  ) {
    matches.push(cardsFlipped[0].dataset.framework);
    cardsFlipped.forEach((card) => {
      card.setAttribute("disabled", true);
      card.onclick = null;
    });
    cardsFlipped = [];
    console.log("Done!");
    showModal();
    all += 1;
    if (all === 5) {
      setTimeout(() => {
        var content = cardContents["text_win"];
        var modalContent = document.querySelector(".modal-content p");
        var p = document.getElementById("modal_p");
        p.style.textAlign = "left";
        modalContent.innerHTML = content;

        modal.style.display = "block";
      }, 5000);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
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
  card1:
    "Las declaraciones if y else son estructuras de control fundamentales en la programación que permiten tomar decisiones en el código basadas en ciertas condiciones. La declaración if se utiliza para ejecutar un bloque de código si una condición específica es verdadera.<br><br> La declaración else se utiliza junto con if para ejecutar un bloque de código si la condición en la declaración if es falsa<br><br>if (condicion) {<br><br> &nbsp &nbsp// Bloque de código que se ejecuta si la condición es verdadera<br><br>} else {<br><br> &nbsp &nbsp// Bloque de código que se ejecuta si la condición es falsa<br><br>}",
  card2:
    "La declaración else if verifica una serie de condiciones en orden. Si una condición es falsa, se prueba la siguiente. Si todas son falsas, se ejecuta el código en else, si existe.<br><br>if (condicion) {<br><br> &nbsp &nbsp // Código que se ejecuta si condicion1 es verdader<br><br>} else if (condicion2) {<br><br> &nbsp &nbsp // Código que se ejecuta si condicion1 es falsa y condicion2 es verdadera<br><br>} else {<br><br> &nbsp &nbsp// Código que se ejecuta si todas las condiciones anteriores son falsas<br><br>}<br><br>.El operador && verifica si todas las condiciones son verdaderas. Si alguna es falsa, el resultado es falso<br><br>if (condicion1 && condicion2) {<br><br> &nbsp &nbsp // Código que se ejecuta si tanto condicion1 como condicion2 son verdaderas<br><br>}",
  card3:
    "La declaración switch en programación se utiliza para seleccionar uno de muchos bloques de código para ser ejecutado. Se basa en el valor de una expresión o variable. Cada valor posible de la expresión tiene un case asociado. Si el valor de la expresión coincide con un case, se ejecuta el bloque de código correspondiente. Si no hay coincidencia, se ejecuta el bloque de código bajo default, si existe.<br><br>switch (expresion) {<br><br> &nbsp &nbsp case valor1:<br><br> &nbsp &nbsp &nbsp &nbsp // Código que se ejecuta si expresion es igual a valor1 <br><br> &nbsp &nbsp &nbsp &nbsp break;<br><br> &nbsp &nbsp case valor2:<br><br> &nbsp &nbsp &nbsp &nbsp // Código que se ejecuta si expresion es igual a valor2 <br><br> &nbsp &nbsp &nbsp &nbsp break;<br><br> &nbsp &nbsp default: <br><br> &nbsp &nbsp &nbsp &nbsp // Código que se ejecuta si expresion no es igual a ninguno de los valores anteriores <br><br>}",
  card4:
    "El operador or (representado como || en muchos lenguajes de programación) se utiliza para comprobar si al menos una de dos o más condiciones es verdadera. Si alguna de las condiciones es verdadera, el resultado es verdadero. Si todas las condiciones son falsas, el resultado es falso.<br><br> if (condicion1 || condicion2) { <br><br> &nbsp &nbsp // Código que se ejecuta si condicion1 o condicion2 (o ambas) son verdaderas <br><br>}",
  card5:
    "La declaración switch en programación puede trabajar con números o texto para acceder a los case. Dependiendo del lenguaje de programación, switch evalúa una expresión y compara su valor con los valores especificados en los case. Si encuentra una coincidencia, ejecuta el bloque de código correspondiente.<br><br>// Ejemplo con números <br><br> switch (numero) { <br><br> &nbsp &nbsp case 1: <br><br> &nbsp &nbsp &nbsp &nbsp // Código que se ejecuta si numero es igual a 1 <br><br> &nbsp &nbsp &nbsp &nbsp break; <br><br> &nbsp &nbsp case 2: <br><br> &nbsp &nbsp &nbsp &nbsp // Código que se ejecuta si numero es igual a 2 <br><br> &nbsp &nbsp &nbsp &nbsp break; <br><br> &nbsp &nbsp default: <br><br> &nbsp &nbsp &nbsp &nbsp // Código que se ejecuta si numero no es igual a ninguno de los valores anteriores <br><br> }",
  text_win:
    "<span class='win'>¡Felicidades! Has completado el juego. <br> ¡Sigue practicando para mejorar tus habilidades de programación!</span>",
};

function showModal() {
  var lastPair = matches[matches.length - 1];
  console.log(lastPair);

  var content = cardContents[lastPair];

  if (!content) {
    content = "Contenido por defecto";
  }

  var modalContent = document.querySelector(".modal-content p");
  modalContent.innerHTML = content;

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
window.onload = function () {
  let cards = Array.from(document.querySelectorAll(".card"));
  let content = document.querySelector(".content");

  cards.sort(() => Math.random() - 0.5);

  cards.forEach((card) => content.appendChild(card));
};
