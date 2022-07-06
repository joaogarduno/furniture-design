// PROJECT NAME: postElement
// MENU SLIDE - navMenu
const navSlide = () => {
    const burger = document.querySelector('.header__nav--burger');
    const nav = document.querySelector('.header__nav--menu')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}
navSlide();