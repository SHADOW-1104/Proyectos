/* Configurndo NavBar Toggle */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/* Configurando el selector "active" para los Links Sections */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });
    /* Configurando el navbar a sticky */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    /* Configurando el remover el menu cuando se le hace click */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* Scroll reveal */

ScrollReveal({
    reset: false,
    distance: '100px',
    duration: 2000,
    delay: 300
});

ScrollReveal().reveal('.home-content, .heading, .contenido-contacto', { origin: 'top' });
ScrollReveal().reveal('.home-img, .proyectos-container, .container-cards, .social-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content p, .about-content h3', { origin: 'right' });