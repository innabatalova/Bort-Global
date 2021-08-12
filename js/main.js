$(document).ready(function(){

  //console.log("Hello");

//выпадающее меню выбора языка
let chooseLanguage = $(".arrow")

chooseLanguage.on("click", function(){
  //  console.log ("Клик по кнопке меню")
   $(".language__select").slideToggle(550)
  

});


//создание кликабельности для всего блока карточки categories

let linkCard = $(".categories-card")

linkCard.on("click", function(){
  //  console.log ("Клик по кнопке меню")
  location.href='#' //ссылки на странички категорий

});


//создание кликабельности стрелочки banner с открытием в новой вкладке

let linkArrow = $(".banner__arrow")

linkArrow.on("click", function(){
  //  console.log ("Клик по кнопке меню")
  window.open ('#') //ссылки на странички категорий

});

//карусель для секции news

$(function() {
 $(".owl-carousel").owlCarousel();
 
});

//Адаптив карусели для секции news
$('.owl-carousel').owlCarousel({
  
  items: 1,
  margin: -30,
  
responsive: {
  // Ширина от 530 пикселей
    530: {
      // Количество элементов 3

      items: 2,
      
    },
  // Ширина от 740 пикселей
    740: {
      // Количество элементов 3
      items: 3,
      
    },
    // Ширина от 866 пикселей
    866: {
      // Количество элементов 3
      items: 4,
      
    }
  }

  
});

//создание кликабельности для стрелочки "вверх"

let topArrow = $(".mobile-arrow")

topArrow.on("click", function(){
  //  console.log ("Клик по кнопке меню")
  location.href='#' 

});

//появление при пролистывании кнопки "вверх"
$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('.scroll-arrow').fadeIn();
 
} else {
 
$('.scroll-arrow').fadeOut();
 
}
 
});
 
$('.scroll-arrow').click(function() {
 
$('body,html').animate({scrollTop:0},400);
 
});
 
});

});