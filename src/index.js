import homePage from './homepage.js';
import menuPage from './menupage.js';
import aboutPage from './aboutpage.js';

function clearPage() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

// Set up event handlers
const homeNav = document.querySelector('#home');
homeNav.addEventListener('click', () => {
    clearPage();
    homePage();
});

const menuNav = document.querySelector('#menu');
menuNav.addEventListener('click', () => {
    clearPage();
    menuPage();
});

const aboutNav = document.querySelector('#about');
aboutNav.addEventListener('click', () => {
    clearPage();
    aboutPage();
});

// Default content
homePage();