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
        // Количество элементов 3

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
        // Количество элементов 3
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

  //появление при пролистывании кнопки "вверх"
  $(function () {

    $(window).scroll(function () {

      if ($(this).scrollTop() != 0) {

        $('.scroll-arrow').fadeIn();

      } else {

        $('.scroll-arrow').fadeOut();

      }

    });

    $('.scroll-arrow').click(function () {

      $('body,html').animate({ scrollTop: 0 }, 400);

    });

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


//карусель index main-slider

  $(function () {
    $(".owl-carousel").owlCarousel();

  });

$('.owl-carousel').owlCarousel({

    items: 4,
    loop: true,
    dots: false,
    nav: true,
    navContainer: ".novelty-slider-navigation",
    navText: ["<img src='image/novelty-slider-prev.svg'>", "<img src='image/novelty-slider-next.svg'>"]
    // navText: ["<img src='image/novelty-slider-prev.svg'>", "<img src='image/novelty-slider-next.svg'>"]
    //   }
    
      }


  );

  //создание кликабельности для ссылки "Где купить?" с открытием в новой вкладке

  let linkNoveltyCardArrow = $(".novelty-card-wrapper-link")

  linkNoveltyCardArrow.on("click", function () {
    //  console.log ("Клик по кнопке меню")
    window.open('#') //ссылки на странички категорий

  });

});