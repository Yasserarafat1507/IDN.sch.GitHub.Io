// toggle icon navbar
let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// scroll section active link

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']');
            });
        };
    });
    //remove toggle and navbar when scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
    //typed js
    const typed = new Typed('.multiple-text',{
        strings:['Exper IT','pintar ngaji?'],
        teypSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    });

    //scroll reveal
ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration: 2000,
    dalay: 200
});
    ScrollReveal().reveal('.home-content,.heading,', { origin: 'top' });
    ScrollReveal().reveal('.achivement-box, .contact form, .skill-box,.about-container',  { origin: 'bottom' });
    ScrollReveal().reveal('.home-content p, .about-content p,.text', { origin: 'right' });
    ScrollReveal().reveal('.about-img', { origin: 'left' });