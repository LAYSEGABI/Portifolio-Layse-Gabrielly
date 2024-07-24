
// Menu hamburguer
function menuOnClick() {
  const menuButton = document.getElementById("menu-bar")
  menuButton.classList.toggle("change");

  const nav = document.getElementById("nav");
  nav.classList.toggle("change");

  if(nav.classList.contains("change")) {
     menuButton.setAttribute("aria-expanded", true);
  } else {
    menuButton.setAttribute("aria-expanded", false);
    
  }
 
  const links = document.querySelectorAll('.nav a, #menu-bar');

  links.forEach((link, index) => {
    link.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          // Shift+Tab
          if (index === 0) {
            event.preventDefault();
            links[links.length - 1].focus();
          }
        } else {
          // Tab
          if (index === links.length - 1) {
            event.preventDefault();
            links[0].focus();
          }
        }
      }
    });
  });

  document.getElementById("menu-bg").classList.toggle("change-bg");
}


// Header troca o background-color ao descer a pagina
const desiredElement = document.getElementById('header');
const pixelsAmount = '50';

window.addEventListener('scroll', function () {
  if (window.scrollY > pixelsAmount) {
    desiredElement.classList.add('changeStyle');
  } else {
    desiredElement.classList.remove('changeStyle');
  }
});


//Animacao de entrada e saida de conteudo ao rolar a página
const elementos = document.querySelectorAll('[data-anima]');
const animacaoClass = 'animacao';

function animaScroll() {
  const topoPaginaNaJanela = window.pageYOffset + ((window.innerHeight * 3 / 4));
  elementos.forEach(function (elemento) {
    if (topoPaginaNaJanela > elemento.offsetTop) {
      elemento.classList.add(animacaoClass);
    } else {
      elemento.classList.remove(animacaoClass);
    }
});
}

if(elementos.length){
  window.addEventListener('scroll', function(){
    animaScroll()
  })
}