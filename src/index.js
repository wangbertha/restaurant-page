import homePage from './homepage.js';
import menuPage from './menupage.js';
import aboutPage from './aboutpage.js';
import './style.css';
import logo from './logo.png';

function clearPage() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

let selected = 'home';
function underlineSelection(option) {
    if (selected !== option) {
        const oldSelectedElement = document.querySelector('#'+selected);
        oldSelectedElement.classList.remove('nav-selected');
        const newSelectedElement = document.querySelector('#'+option);
        newSelectedElement.classList.add('nav-selected');
        selected = option;
    }
}

// Load logo into header
const header = document.querySelector('header');
const logoHeader = new Image();
logoHeader.src = logo;
logoHeader.height = 50;
logoHeader.width = 50;
header.prepend(logoHeader);
const nav = document.querySelector('nav');
const restaurantName = document.createElement('h1');
restaurantName.textContent = "BERRY'S BENTOS";
nav.prepend(restaurantName);

// Set up event handlers
const homeNav = document.querySelector('#home');
homeNav.addEventListener('click', () => {
    clearPage();
    homePage();
    underlineSelection('home');
});

const menuNav = document.querySelector('#menu');
menuNav.addEventListener('click', () => {
    clearPage();
    menuPage();
    underlineSelection('menu');
});

const aboutNav = document.querySelector('#about');
aboutNav.addEventListener('click', () => {
    clearPage();
    aboutPage();
    underlineSelection('about');
});

// Default content
homePage();