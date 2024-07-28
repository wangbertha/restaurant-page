const menuPage = () => {
    const content = document.querySelector('#content');

    // <div class="banner">BANNER</div>
    const banner = document.createElement('div');
    banner.classList.add('banner');
    banner.textContent = 'BANNER for MENU PAGE';
    content.appendChild(banner);
}

export default menuPage;