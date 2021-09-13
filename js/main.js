$(document).ready(function () {

  //console.log("Hello");

  //выпадающее меню выбора языка
  let chooseLanguage = $(".arrow")

  chooseLanguage.on("click", function () {
    //  console.log ("Клик по кнопке меню")
    $(".language__select").slideToggle(550)


  });


  //создание кликабельности для всего блока карточки categories

  let linkCard = $(".categories-card")

  linkCard.on("click", function () {
    //  console.log ("Клик по кнопке меню")
    location.href = '#' //ссылки на странички категорий

  });


  //создание кликабельности стрелочки banner с открытием в новой вкладке

  let linkArrow = $(".banner__arrow")

  linkArrow.on("click", function () {
    //  console.log ("Клик по кнопке меню")
    window.open('#') //ссылки на странички категорий

  });

  //карусель для секции news (slide-category)

  $(function () {
    $(".slide-category").owlCarousel();

  });

  //Адаптив карусели для секции news
  $('.slide-category').owlCarousel({

    items: 1,
    margin: -30,

    responsive: {
      // Ширина от 530 пикселей
      530: {
        // Количество элементов 2

        items: 2,

      },
      // Ширина от 740 пикселей
      740: {
        // Количество элементов 3
        items: 3,
        margin: 0

      },
      // Ширина от 866 пикселей
      866: {
        // Количество элементов 4
        items: 4,
        margin: 0

      }
    }


  });

  //создание кликабельности для стрелочки "вверх"

  let topArrow = $(".mobile-arrow")

  topArrow.on("click", function () {
    //  console.log ("Клик по кнопке меню")
    location.href = '#'

  });

 

  $(function() {
  // при нажатии на кнопку scrollup
  $('.scroll-arrow').click(function() {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})
// при прокрутке окна (window)
$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>200) {
    // то сделать кнопку scrollup видимой
    $('.scroll-arrow').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scroll-arrow').fadeOut();
  }
});


  $(".bort-phone").mask('+7 (900) 000 00 00', minlength = 10);


//раскрывающийся пункт меню (дизайн-система)

let openBortMenu = $(".bort-submenu-top")


openBortMenu.on("click", function(){
  //  console.log ("Клик по кнопке меню")
   $(".bort-submenu-list").slideToggle(400),

   $(".bort-submenu-arrows").toggleClass('bort-submenu-arrows-transform')

  

});

  


//карусель index main-slider

  $(function () {
    $(".main-slider").owlCarousel();

  });

$('.main-slider').owlCarousel({

    items: 1,
    loop: true,
    dots: true,
    nav: true,
    navContainer: ".main-slider-navigation",
    dotsEach: true,
    navText: ["<img src='image/main-prev.svg'>", "<img src='image/main-next.svg'>"]
      }


  );


//карусель index novelty-slider

  $(function () {
    $(".novelty-slider").owlCarousel();

  });

$('.novelty-slider').owlCarousel({

    items: 1,
    margin: -40,
    loop: true,
    dots: false,
    nav: false,
    navContainer: ".novelty-slider-navigation",
    navText: ["<img src='image/novelty-slider-prev.svg'>", "<img src='image/novelty-slider-next.svg'>"],
    responsive:{

      360:{
        margin: -70


      },

      400:{
        margin: -160


      },

      530:{
        items: 2,
        margin: 0


      },

      680:{
        items: 3,
        margin: 0


      },

      1150: {

        items: 4,
        margin: 0
        
      
      }




    }
    
  
  }

    
      


  );


//карусель index popular-slider

  $(function () {
    $(".popular-slider").owlCarousel();

  });

$('.popular-slider').owlCarousel({

    items: 1,
    margin: -40,
    loop: true,
    dots: false,
    nav: false,
    navContainer: ".popular-slider-navigation",
    navText: ["<img src='image/novelty-slider-prev.svg'>", "<img src='image/novelty-slider-next.svg'>"],
    responsive:{

      360:{
        margin: -70


      },

      400:{
        margin: -160


      },

      530:{
        items: 2,
        margin: 0


      },

      680:{
        items: 3,
        margin: 0


      },

      1150: {

        items: 4,
        margin: 0
        
      
      }




    }
    
  
  }

    
      


  );

  //создание кликабельности для ссылки "Где купить?" с открытием в новой вкладке

  let linkNoveltyCardArrow = $(".novelty-card-wrapper-link")

  linkNoveltyCardArrow.on("click", function () {
    //  console.log ("Клик по кнопке меню")
    window.open('#') //ссылки на странички категорий

  });

  let linkpopularCardArrow = $(".popular-card-wrapper-link")

  linkpopularCardArrow.on("click", function () {
    //  console.log ("Клик по кнопке меню")
    window.open('#') //ссылки на странички категорий

  });


//раскрывающийся пункт меню (index decktop)

$(".searchbar__item__tool").click(function(){
    if(!$(".searchbar__menu__wrapper__tool").hasClass("slided")) return $(".searchbar__menu__wrapper__tool").addClass("slided").slideDown(400);
    $(".searchbar__menu__wrapper__tool").removeClass("slided").slideUp(400);
});



$(".searchbar__item__clining").click(function(){
    if(!$(".searchbar__menu__wrapper__clining").hasClass("slided")) return $(".searchbar__menu__wrapper__clining").addClass("slided").slideDown(400);
    $(".searchbar__menu__wrapper__clining").removeClass("slided").slideUp(400);
});


$(".searchbar__item__car").click(function(){
    if(!$(".searchbar__menu__wrapper__car").hasClass("slided")) return $(".searchbar__menu__wrapper__car").addClass("slided").slideDown(400);
    $(".searchbar__menu__wrapper__car").removeClass("slided").slideUp(400);
});

$(".searchbar__item__tech").click(function(){
    if(!$(".searchbar__menu__wrapper__tech").hasClass("slided")) return $(".searchbar__menu__wrapper__tech").addClass("slided").slideDown(400);
    $(".searchbar__menu__wrapper__tech").removeClass("slided").slideUp(400);
});

$(".searchbar__item__handtool").click(function(){
    if(!$(".searchbar__menu__wrapper__handtool").hasClass("slided")) return $(".searchbar__menu__wrapper__handtool").addClass("slided").slideDown(400);
    $(".searchbar__menu__wrapper__handtool").removeClass("slided").slideUp(400);
});

//закрытие меню при клике вне элементов меню

$(document).mouseup(function (e){ // событие клика по веб-документу
		let closeMenuTool = $(".searchbar__menu__wrapper__tool"); // тут указываем ID элемента
    let closeMenuClining = $(".searchbar__menu__wrapper__clining");
    let closeMenuCar = $(".searchbar__menu__wrapper__car");
    let closeMenuTech = $(".searchbar__menu__wrapper__tech");
    let closeMenuHandtool = $(".searchbar__menu__wrapper__handtool");

		if (!closeMenuTool.is(e.target) // если клик был не по блоку
		    && closeMenuTool.has(e.target).length === 0) { // и не по его дочерним элементам
			  closeMenuTool.hide(); // скрываем его
		}

    if (closeMenuClining.has(e.target).length === 0){
         closeMenuClining.hide();
     }
     if (closeMenuCar.has(e.target).length === 0){
         closeMenuCar.hide();
     }
     if (closeMenuTech.has(e.target).length === 0){
        closeMenuTech.hide();
     }
     if (closeMenuHandtool.has(e.target).length === 0){
         closeMenuHandtool.hide();
    }

	});


//раскрывающийся пункт подменю (index decktop)

let openSubMenuTool = $(".searchbar-menu-item-grinders")

openSubMenuTool.on("mouseover", function(){
  //  console.log ("Клик по кнопке меню")

   $(".searchbar__submenu__wrapper__grinders").toggleClass('searchbar__submenu__wrapper__grinders__visability')

  

});

let openSubMenuCordless = $(".searchbar-menu-item-cordless")

openSubMenuCordless.on("mouseover", function(){
  //  console.log ("Клик по кнопке меню")

   $(".searchbar__submenu__wrapper__cordless").toggleClass('searchbar__submenu__wrapper__cordless__visability')

  

});

//открытие мобильного меню

let openMobileTool = $(".searchmobile-tool")
let openMobileClining = $(".searchmobile-clining")
let openMobileCar = $(".searchmobile-car")
let openMobileTech = $(".searchmobile-tech")
let openMobileHandtool = $(".searchmobile-handtool")

 openMobileTool.on("click", function () {
    //  console.log ("Клик по кнопке меню")
    $(".menu-tool").slideToggle(500)


  });

  

  openMobileClining.on("click", function () {
    //  console.log ("Клик по кнопке меню")
    $(".menu-clining").slideToggle(500)


  });

   openMobileCar.on("click", function () {
    //  console.log ("Клик по кнопке меню")
    $(".menu-car").slideToggle(500)


  });

   openMobileTech.on("click", function () {
    //  console.log ("Клик по кнопке меню")
    $(".menu-tech").slideToggle(500)


  });

   openMobileHandtool.on("click", function () {
    //  console.log ("Клик по кнопке меню")
    $(".menu-handtool").slideToggle(500)


  });


//замена значка + на -, смена цвета фона 

let plusMinusMenu = $(".plus")
let subPlusMinusMenu = $(".subplus")

plusMinusMenu.on("click", function(){
  
   if (this.innerText == "+")
    this.innerText = "–",
    $(this).css({backgroundColor: 'black', color: 'white'});
    

  else {
    this.innerText = "–";
    this.innerText = "+";
    $(this).css({backgroundColor: '#F5F5F5', color: 'black'});
    
  }
  

});

subPlusMinusMenu.on("click", function(){
  
   if (this.innerText == "+")
    this.innerText = "–",
    $(this).css({backgroundColor: 'black', color: 'white'});
    

  else {
    this.innerText = "–";
    this.innerText = "+";
    $(this).css({backgroundColor: '#E3E3E3', color: 'black'});
    
  }
  

});



//открытие мобильного подменю

let openMobileSubmenuSaws = $(".searchmobile-saws")
let openMobileSubmenuDrill = $(".searchmobile-drill")
let openMobileSubmenuCordless = $(".searchmobile-cordless")
let openMobileSubmenuGrinder = $(".searchmobile-grinder")
let openMobileSubmenuMeasuring = $(".searchmobile-measuring")
let openMobileSubmenuWelding = $(".searchmobile-welding")


 openMobileSubmenuSaws.on("click", function () {
    //  console.log ("Клик по кнопке меню")
    $(".submenu-saws").slideToggle(500)


  });

  openMobileSubmenuDrill.on("click", function () {
    //  console.log ("Клик по кнопке меню")
    $(".submenu-drill").slideToggle(500)


  });

   openMobileSubmenuCordless.on("click", function () {
    //  console.log ("Клик по кнопке меню")
    $(".submenu-cordless").slideToggle(500)


  });

  openMobileSubmenuGrinder.on("click", function () {
    //  console.log ("Клик по кнопке меню")
$(".submenu-grinder").slideToggle(500)


});

  openMobileSubmenuMeasuring.on("click", function () {
    //  console.log ("Клик по кнопке меню")
$(".submenu-measuring").slideToggle(500)


});

  openMobileSubmenuWelding.on("click", function () {
    //  console.log ("Клик по кнопке меню")
$(".submenu-welding").slideToggle(500)


});

//открытие строки поиска и закрытие по клику на "лупу"

let openSearchInput = $(".logo-search-image")

openSearchInput.on("click", function(){
  //  console.log ("Клик по кнопке меню")
if ( $('.logo-search').hasClass('logo-search') ){
 $(".logo-search").addClass('logo-search-visible').removeClass('logo-search'),
 $(".logo-search-input").fadeIn(),
 $(".logo-search-reset").fadeIn()   
}
 else {
  $(".logo-search-visible").addClass('logo-search').removeClass('logo-search-visible'),
 $(".logo-search-input").fadeOut(),
 $(".logo-search-reset").fadeOut() 
   
   };
  
  });

//переключение на мобильное меню при клике на "бургер"

let openMobileMenu = $(".logo-mobile")

openMobileMenu.on("click", function(){
  //  console.log ("Клик по кнопке меню")
   $(".searchmobile").fadeIn(),
   $(".logo-close").fadeIn(1)

  });

let closeMobileMenu = $(".logo-close")

closeMobileMenu.on("click", function(){
  //  console.log ("Клик по кнопке меню")
    $(".searchmobile").fadeOut(),
    $(".logo-close").fadeOut(1)

  });


});