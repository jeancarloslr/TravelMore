chatHelp = document.querySelector('.chatHelp');
var navbar = document.querySelector('nav');
var bannerHeight = document.querySelector('.container').offsetHeight;
var recursosNav = document.querySelector('.linksNav');

function ajudar(){
    chat = document.querySelector('.talk-message');
    chat.classList.toggle('active');
}

chatHelp.addEventListener('click', ajudar);

    window.addEventListener('scroll', function () {
      if (window.scrollY >= bannerHeight) {
        navbar.classList.add('scrolled');
        recursosNav.style.color = "black";
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  

