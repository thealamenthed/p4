function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

/* 
1.Écouter l'événement submit sur le formulaire
2.Empêcher l'envoi du formulaire si les conditions ne sont pas respectées
3.Vérifier chaque condition de validation et afficher un message d'erreur si nécessaire
4.Conserver les données saisies même si la validation échoue
*/

// Gestion de l'événement submit sur le formulaire.
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Réinitialiser les messages d'erreur
  const errorMessages = document.getElementById("errorMessages");
  errorMessages.innerHTML = " ";

  // Collecter les données du formulaire
  const prenom = document.getElementById("first");
  const nom = document.getElementById("last");
  const email = document.getElementById("email");
  const birthdate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const locationChecked = document.querySelector('input[name="location"]');
  const checkboxCondition = document.getElementById("checkbox1");

  const isValid = true;

  if (prenom.value.trim().length < 2) {
    errorMessages.innerHTML +=
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
  }

  if (nom.value.trim().length < 2) {
    errorMessages.innerHTML +=
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  }

  const emailRegex = /[a-z0-9.-_]+@[a-z0-9.-_]+\.[a-z0-9.-_]+/;
  if (!emailRegex.test(email.value.trim())) {
    errorMessages.innerHTML += "L'email n'est pas valide";
  }

  if (!birthdate.value) {
    errorMessages.innerHTML +=
      "Veuillez entrer une date de naissance valide (mois/jour/année).";
  }

  console.log("--------");
  console.log(quantity.value.length);
  console.log(email.value.length);

  if (quantity.value.length <= 0) {
    errorMessages.innerHTML += "Veuillez entrer un nombre en chiffres";
  }

  if (!locationChecked.checked) {
    errorMessages.innerHTML += "Veuillez choisir un tournoi";
  }

  if (!checkboxCondition.checked) {
    errorMessages.innerHTML +=
      "Vous devez vérifier que vous acceptez les termes et conditions.";
  }

  // if (isValid === true) {
  //   alert("ok");
  // }
});
