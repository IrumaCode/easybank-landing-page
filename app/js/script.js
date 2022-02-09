const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeMenu = document.querySelectorAll('.fade-menu');

btnHamburger.addEventListener('click', () => {
    console.log('open hamburger');

    if (header.classList.contains('open')) { //closed hamburger toggle
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeMenu.forEach((element) => {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');

        });
    } else { // open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeMenu.forEach((element) => {
        element.classList.remove('fade-out');
        element.classList.add('fade-in');

        });
    }
});