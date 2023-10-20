const HamburgerMenu = document.querySelector('.hamburger__menu')
const NavBarList = document.querySelector('.nav__bar__list')
const Buttons = document.querySelector('.buttons')

HamburgerMenu.addEventListener('click' ,()=>{
    NavBarList.classList.toggle('active')
    Buttons.classList.toggle('active')
})