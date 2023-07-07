
// Menu hamburguer
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
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