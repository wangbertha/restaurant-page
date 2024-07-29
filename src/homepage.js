import bentoImg from './bento.jpg';

const homePage = () => {
    const content = document.querySelector('#content');

    // <div class="banner">BANNER</div>
    const banner = document.createElement('div');
    banner.classList.add('banner');
    banner.textContent = "BERRY'S BENTOS";
    content.appendChild(banner);

    // <div class="welcome-info">WELCOME INFO</div>
    const welcomeInfo = document.createElement('div');
    welcomeInfo.classList.add('welcome-info');
    welcomeInfo.textContent = "Welcome to Berry's Bentos! We are a small blahblahblah with great, healthy food to fuel your day!";
    const welcomeImg = new Image();
    welcomeImg.src = bentoImg;
    welcomeImg.height = 200;
    welcomeInfo.appendChild(welcomeImg);
    content.appendChild(welcomeInfo);

    // <div class="menu-favorites">MENU FAVORITES</div>
    const menuFavorites = document.createElement('div');
    menuFavorites.classList.add('menu-favorites');
    menuFavorites.textContent = 'MENU FAVORITES';
    content.appendChild(menuFavorites);

    // <div class="about-snapshot">ABOUT (SNAPSHOT)</div>
    const aboutSnapshot = document.createElement('div');
    aboutSnapshot.classList.add('about-snapshot');
    aboutSnapshot.textContent = 'ABOUT (SNAPSHOT)';
    content.appendChild(aboutSnapshot);
};

export default homePage;