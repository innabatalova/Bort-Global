$(document).ready(function(){

  //console.log("Hello");

//выпадающее меню выбора языка
let chooseLanguage = $(".arrow")

chooseLanguage.on("click", function(){
  //  console.log ("Клик по кнопке меню")
   $(".language__select").slideToggle(550)
  

});


//создание кликабельности для всего блока карточки

let linkCard = $(".categories-card")

linkCard.on("click", function(){
  //  console.log ("Клик по кнопке меню")
  location.href='#' //ссылки на странички категорий

});


});