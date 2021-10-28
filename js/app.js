const navOpen = document.querySelector('.navHamburger');
const navClose = document.querySelector('.closeToggle');
const  menu= document.querySelector('.navMenu');
const navContainer = document.querySelector('.navMenu');

navOpen.addEventListener('click', ()=>{
    menu.classList.add('open');
    document.body.classList.add('active');
    navContainer.style.left = '0';
    navContainer.style.width = "30rem";

});

navClose.addEventListener('click', ()=>{
    menu.classList.remove('open');
    document.body.classList.remove('active');
    navContainer.style.left = '-30rem';
    navContainer.style.width = "0";

});

AOS.init();