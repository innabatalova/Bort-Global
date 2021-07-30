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


});