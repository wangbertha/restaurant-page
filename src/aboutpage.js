const aboutPage = () => {
    const content = document.querySelector('#content');

    // <div class="banner">BANNER</div>
    const banner = document.createElement('div');
    banner.classList.add('banner');
    banner.textContent = 'BANNER for ABOUT PAGE';
    content.appendChild(banner);
}

export default aboutPage;