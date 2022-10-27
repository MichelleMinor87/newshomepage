const menu = document.querySelector('.hamburger');

const close = document.querySelector('.close');
const nav = document.querySelector('.links');

menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})