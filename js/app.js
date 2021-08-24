window.addEventListener('scroll', function () {
  let menu = document.querySelector('.menu');
  menu.classList.toggle('sticky', window.scrollY > 0);
});
