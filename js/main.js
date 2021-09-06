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

let openMenuTool = $(".searchbar__item__tool")

openMenuTool.on("click", function(){
  //  console.log ("Клик по кнопке меню")
   $(".searchbar__menu__wrapper__tool").slideToggle(400)

});

let openMenuClining = $(".searchbar__item__clining")

openMenuClining.on("click", function(){
  //  console.log ("Клик по кнопке меню")
   $(".searchbar__menu__wrapper__clining").slideToggle(400)

});

let openMenuCar = $(".searchbar__item__car")

openMenuCar.on("click", function(){
  //  console.log ("Клик по кнопке меню")
   $(".searchbar__menu__wrapper__car").slideToggle(400)

});

let openMenuTech = $(".searchbar__item__tech")

openMenuTech.on("click", function(){
  //  console.log ("Клик по кнопке меню")
   $(".searchbar__menu__wrapper__tech").slideToggle(400)

});

let openMenuHandtool = $(".searchbar__item__handtool")

openMenuHandtool.on("click", function(){
  //  console.log ("Клик по кнопке меню")
   $(".searchbar__menu__wrapper__handtool").slideToggle(400)

});

//раскрывающийся пункт подменю (index decktop)

let openSubMenu = $(".searchbar-menu-item-grinders")

openSubMenu.on("mouseover", function(){
  //  console.log ("Клик по кнопке меню")

   $(".searchbar__submenu__wrapper__grinders").toggleClass('searchbar__submenu__wrapper__grinders__visability')

  

});


});