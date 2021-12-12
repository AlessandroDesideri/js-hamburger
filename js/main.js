// Inizializzo le variabili
//  Ham Menu
const hamburger = document.querySelector('.hamburger-menu');
// Apertura ham menu
const button = document.querySelector('.fa-bars');
// Chiusura ham menu
const closeButton = document.querySelector('.close');

// Funzione Apertura ham menu
button.addEventListener('click', function () {
    hamburger.classList.add('active');
})

// Funzione Chiusura ham menu
closeButton.addEventListener('click', function () {
    hamburger.classList.remove('active');
})