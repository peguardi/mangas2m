// MENÚ DE NAVEGACIÓN FIJADO POR SCROLL  **************************
window.addEventListener('scroll', function () {
  let menu = document.querySelector('header');
  menu.classList.toggle('sticky', window.scrollY > 0);
});

// SELECCIÓN ACTIVA EN MENÚ DE NAVEGACIÓN POR SCROLL **************************
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 4) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach((li) => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  });
});

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName('dropdown-btn');
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener('click', function () {
    // this.classList.toggle('active');
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  });
}

// ANIMACIÓN Y FUNCIONALIDAD DEL BOTÓN DE MENÚ **************************
const menuBtn = document.querySelector('.menuBtn');
const menuNav = document.querySelector('.navMenu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('change');
    menuOpen = true;
    openNav();
    document.getElementById('overlay').style.display = 'block';
  } else {
    menuBtn.classList.remove('change');
    menuOpen = false;
    closeNav();
    document.getElementById('overlay').style.display = 'none';
  }
});

function cierraBtn() {
  if (window.innerWidth < 769) {
    menuBtn.classList.remove('change');
    menuOpen = false;
    closeNav();
    document.getElementById('overlay').style.display = 'none';
  }
  document.getElementById('dropContent1').style.display = 'none';
  document.getElementById('dropContent2').style.display = 'none';
}

function openNav() {
  menuNav.classList.add('change');
}

function closeNav() {
  menuNav.classList.remove('change');
}
