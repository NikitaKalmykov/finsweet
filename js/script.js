window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu-nav '),
    menuItem = document.querySelectorAll('.menu-list '),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('menu-nav-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('menu-nav-active');
        })
    })
})