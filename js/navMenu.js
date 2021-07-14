// 
const navSlide = () => {
    const burger = document.querySelector('.nav__burger');
    const nav = document.querySelector('.nav__ul')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}
navSlide();