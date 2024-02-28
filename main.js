var typed = new Typed(".text", {
  strings: ["Фронтенд Разработчик", "Веб Программист"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});





/* Nav Toggle button */


const toggleBtn = document.querySelector('.nav__toggle');
// const navbar = document.getElementsByClassName('header');
const navList = document.querySelector('.nav-list');
const navigation1 = document.getElementById('nav-list-link1');
const navigation2 = document.getElementById('nav-list-link2');
const navigation3 = document.getElementById('nav-list-link3');
const navigation4 = document.getElementById('nav-list-link4');
const navigation5 = document.getElementById('nav-list-link5');


toggleBtn.addEventListener('click', function () {
  toggleShow();
});

/* navigation1.addEventListener('click', function () {
  if (window.innerWidth > 900){
    toggleShow();
  }
});
navigation2.addEventListener('click', function () {
  if (window.innerWidth > 900){
    toggleShow();
  }
});
navigation3.addEventListener('click', function () {
  if (window.innerWidth > 900){
    toggleShow();
  }
});
navigation4.addEventListener('click', function () {
  if (window.innerWidth > 900){
    toggleShow();
  }
});
navigation5.addEventListener('click', function () {
  if (window.innerWidth > 900){
    toggleShow();
  }
  
}); */


function toggleShow(){
  navList.classList.toggle('show');
}


window.addEventListener('load', function() {
  if (window.innerWidth > 900) {
    // Проверка наличия класса 'show' перед удалением
    if (navListOrigin.classList.contains('show')) {
      navListOrigin.classList.remove('show');
    }
  }
  console.log('Страница полностью загружена');
});




var navListOrigin = document.getElementById('nav-list-origin'); 

window.addEventListener('resize', function () {
  if (window.innerWidth > 900) {
    // Проверка наличия класса 'show' перед удалением
    if (navListOrigin.classList.contains('show')) {
      navListOrigin.classList.remove('show');
    }
  }
});