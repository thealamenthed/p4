// NavBar burger menu
function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Eléments DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const buttonModalSendMessage = document.querySelector(
  ".buttonModalSendMessage"
);

// Evénement "click" pour chaque bouton qui ouvre la modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Evénement "click" pour le bouton qui ferme la modal
modalCloseBtn.addEventListener("click", closeModal);
buttonModalSendMessage.addEventListener("click", closeModal);

// Affichage de la modal
function launchModal() {
  modalbg.style.display = "block";
  sendMessage.style.display = "none";
  form.style.display = "block";
  buttonModalSendMessage.style.display = "none";
}

// Fermeture de la modal
function closeModal() {
  modalbg.style.display = "none";
}

// Gestion de l'événement submit sur le formulaire
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Bloque le comportement par défaut du navigateur

  validForm();
});

function validForm() {
  // Réinitialise les messages d'erreurs
  const errorMessages = document.querySelectorAll(".errorMessage"); // Cible l'élement errorMessage
  const inputs = document.querySelectorAll(".text-control");

  // Efface les messages d'erreur
  for (i = 0; i < errorMessages.length; i++) {
    errorMessages[i].innerHTML = "";
  }
  // Retire la classe d'erreur des champs
  inputs.forEach((input) => input.classList.remove("error"));

  // Collecte les données du formulaire
  const prenom = document.getElementById("first");
  const nom = document.getElementById("last");
  const email = document.getElementById("email");
  const birthdate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const locationChecked = document.querySelectorAll('input[name="location"]');
  const checkboxCondition = document.getElementById("checkbox1");
  const sendMessage = document.getElementById("sendMessage");
  const content = document.querySelector(".content");

  // Initialisation du compteur de validations
  let inputsValid = 0;

  // Vérification des champs du formulaire
  if (prenom.value.trim().length < 2) {
    // J'utilise la fonction trim() pour ne pas prendre en compte les espaces
    prenom.closest(".formData").querySelector(".errorMessage").innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    prenom.classList.add("error");
  } else {
    inputsValid++;
  }

  if (nom.value.trim().length < 2) {
    nom.closest(".formData").querySelector(".errorMessage").innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    nom.classList.add("error");
  } else {
    inputsValid++;
  }

  const emailRegex = /[a-z0-9.-_]+@[a-z0-9.-_]+\.[a-z]{2,4}$/;
  if (!emailRegex.test(email.value.trim())) {
    email.closest(".formData").querySelector(".errorMessage").innerHTML =
      "L'email n'est pas valide";
    email.classList.add("error");
  } else {
    inputsValid++;
  }

  if (!birthdate.value) {
    birthdate.closest(".formData").querySelector(".errorMessage").innerHTML =
      "Veuillez entrer une date de naissance valide (jour/mois/année)";
    birthdate.classList.add("error");
  } else {
    inputsValid++;
  }

  if (quantity.value.length <= 0) {
    quantity.closest(".formData").querySelector(".errorMessage").innerHTML =
      "Veuillez entrer un nombre en chiffres";
    quantity.classList.add("error");
  } else {
    inputsValid++;
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
    locationChecked[0].classList.add("error");
  } else {
    inputsValid++;
  }

  if (!checkboxCondition.checked) {
    checkboxCondition
      .closest(".formData")
      .querySelector(".errorMessage").innerHTML =
      "Vous devez vérifier que vous acceptez les termes et conditions";
    checkboxCondition.classList.add("error");
  } else {
    inputsValid++;
  }
  // Si toutes les validations sont correctes
  if (inputsValid === 7) {
    form.style.display = "none";
    sendMessage.style.display = "block";
    buttonModalSendMessage.style.display = "block";
  }
}
