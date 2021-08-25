// MENÚ DE NAVEGACIÓN FIJADO POR SCROLL  **************************
window.addEventListener('scroll', function () {
  let menu = document.querySelector('.menu');
  menu.classList.toggle('sticky', window.scrollY > 0);
});

// SELECCIÓN ACTIVA EN MENÚ DE NAVEGACIÓN  **************************
addEventListener('DOMContentLoaded', () => {
  const secciones = document.querySelectorAll('.seccion');
  const menuItems = document.querySelectorAll('.menu__link');

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
