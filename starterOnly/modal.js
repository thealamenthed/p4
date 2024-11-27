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

Ajouter le message d'erreur sous l'input :
1.Cibler la zone ou le message doit etre afficher
2.Vider tous les span errorMessage
3.Afficher un à un
*/

// Gestion de l'événement submit sur le formulaire
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Réinitialiser les messages d'erreurs
  const errorMessages = document.querySelectorAll(".errorMessage");

  for (i = 0; i < errorMessages.length; i++) {
    errorMessages[i].innerHTML = "";
  }

  // Collecter les données du formulaire
  const prenom = document.getElementById("first");
  const nom = document.getElementById("last");
  const email = document.getElementById("email");
  const birthdate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const locationChecked = document.querySelectorAll('input[name="location"]');
  const checkboxCondition = document.getElementById("checkbox1");

  const isValid = true;

  // Vérifier chaque condition de validation et afficher un message d'erreur
  if (prenom.value.trim().length < 2) {
    prenom.closest(".formData").querySelector(".errorMessage").innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
  }

  if (nom.value.trim().length < 2) {
    nom.closest(".formData").querySelector(".errorMessage").innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom";
  }

  const emailRegex = /[a-z0-9.-_]+@[a-z0-9.-_]+\.[a-z0-9.-_]+/;
  if (!emailRegex.test(email.value.trim())) {
    email.closest(".formData").querySelector(".errorMessage").innerHTML =
      "L'email n'est pas valide";
  }

  if (!birthdate.value) {
    birthdate.closest(".formData").querySelector(".errorMessage").innerHTML =
      "Veuillez entrer une date de naissance valide (mois/jour/année)";
  }

  if (quantity.value.length <= 0) {
    quantity.closest(".formData").querySelector(".errorMessage").innerHTML =
      "Veuillez entrer un nombre en chiffres";
  }

  let checkedFalse = 0;
  for (i = 0; i < locationChecked.length; i++) {
    if (!locationChecked[i].checked) {
      checkedFalse++;
    }
  }

  if (checkedFalse === locationChecked.length) {
    locationChecked[0]
      .closest(".formData")
      .querySelector(".errorMessage").innerHTML = "Veuillez choisir un tournoi";
  }

  if (!checkboxCondition.checked) {
    checkboxCondition
      .closest(".formData")
      .querySelector(".errorMessage").innerHTML =
      "Vous devez vérifier que vous acceptez les termes et conditions";
  }

  // if (isValid === true) {
  //   alert("ok");
  // }
});
