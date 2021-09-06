// MENÚ DE NAVEGACIÓN FIJADO POR SCROLL  **************************
window.addEventListener('scroll', function () {
  let menu = document.querySelector('header');
  menu.classList.toggle('sticky', window.scrollY > 0);
});

// SELECCIÓN ACTIVA EN MENÚ DE NAVEGACIÓN POR SCROLL **************************
addEventListener('DOMContentLoaded', () => {
  const secciones = document.querySelectorAll('.seccion');
  const menuItems = document.querySelectorAll('.nav-link');

  const funcionObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const itemActual = Array.from(menuItems).find(
          (item) => item.dataset.url === entry.target.id
        );
        itemActual.classList.add('active');
        for (const item of menuItems) {
          if (item != itemActual) {
            item.classList.remove('active');
          }
        }
      }
    });
  };

  const observer = new IntersectionObserver(funcionObserver, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  });

  secciones.forEach((seccion) => observer.observe(seccion));
});

// DESPLIEGUE DE OVERLAY EN MENÚ RESPONSIVE **************************

document.addEventListener('DOMContentLoaded', () => {
  // const nav = document.querySelector('header');

  // document.querySelector('#check').addEventListener('click', () => {
  //   nav.classList.add('nav--open');
  // });

  // document.querySelector('.nav__overlay').addEventListener('click', () => {
  //   nav.classList.remove('nav--open');
  // });

  const nav = document.querySelector('header');
  let menuOpen = false;
  document.querySelector('#check').addEventListener('click', () => {
    if (!menuOpen) {
      nav.classList.add('nav--open');
      menuOpen = true;
    } else {
      nav.classList.remove('nav--open');
      menuOpen = false;
    }
  });
});
