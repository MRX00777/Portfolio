var typed = new Typed(".text", {
    strings: ["Frontend Developer", "YouTuber", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



/* Nav Toggle button */


    const toggleBtn = document.querySelector('.nav__toggle');
    // const navbar = document.getElementsByClassName('header');
    const navList = document.querySelector('.nav-list');
    const navigation = document.querySelectorAll('#nav-list-link1');


    toggleBtn.addEventListener('click', function () {
      navList.classList.toggle('show');
      console.log('click');
    });

    navigation.addEventListener('click', function () {
      navList.classList.toggle('show');
      console.log('click');
    });
  
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) {
        navList.classList.remove('show');
      }
    });
 