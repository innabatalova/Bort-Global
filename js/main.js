$(document).ready(function () {
  //выпадающее меню выбора языка

  $(".language-wrapper").click(function () {
    $(".language__select").slideToggle(550);
  });

  //создание кликабельности для стрелочки "вверх"

  $(function () {
    $(".scroll-arrow").click(function () {
      // переместиться в верхнюю часть страницы
      $("html, body").animate({ scrollTop: 0 }, 200);
    });
  });
  // при прокрутке окна (window)
  $(window).scroll(function () {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop() > 200) {
      // то сделать кнопку scroll-arrow видимой
      $(".scroll-arrow").fadeIn();
    }
    // иначе скрыть кнопку scroll-arrow
    else {
      $(".scroll-arrow").fadeOut();
    }
  });

  //получение размера отступа для внутреннего контента в main-slider
  let left = $(".grid-container").offset().left;
  let marginLeft = left + 15;
  $(".main-card-wrapper").css("left", marginLeft + "px");

  //создание кликабельности для всего блока карточки categories

  let linkCard = $(".categories-card");

  linkCard.on("click", function () {
    location.href = "#"; //ссылки на странички категорий
  });

  //создание кликабельности для кнопки "Стать дилером"

  let linkDealer = $(".be-dealer-button-link");

  linkDealer.on("click", function () {
    window.open("be-dealer.html"); //ссылки на странички категорий
  });

  //создание кликабельности для кнопки "Стать дилером"

  let indexLogoLink = $(".index-link");

  indexLogoLink.on("click", function () {
    window.open("index.html"); //ссылки на странички категорий
  });

  //создание кликабельности стрелочки banner с открытием в новой вкладке

  let linkBannerCard = $(".banner-card");

  linkBannerCard.on("click", function () {
    window.open("#"); //ссылки на странички категорий
  });

  //карусель для секции news (slide-category)

  //инициализация слайдера

  $(function () {
    $(".slide-category").owlCarousel();
  });

  //адаптив карусели для секции news

  $(".slide-category").owlCarousel({
    items: 1,
    margin: -30,

    responsive: {
      530: {
        items: 2,
      },

      740: {
        items: 3,
        margin: 0,
      },

      866: {
        items: 4,
        margin: 0,
      },
    },
  });

  //маска для проверки ввода номера

  $(".bort-phone").mask("+7 (900) 000 00 00", (minlength = 10));

  //карусель index main-slider

  //инициализация слайдера

  $(function () {
    $(".main-slider").owlCarousel();
  });

  //адаптив карусели index main-slider

  $(".main-slider").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    navContainer: ".main-slider-navigation",
    dotsEach: true,
    navText: [
      "<img src='image/main-prev.svg'>",
      "<img src='image/main-next.svg'>",
    ],
  });

  $(".main__button").on("click", function () {
    location.href = "product-card.html"; //ссылки на странички категорий
  });

  //карусель index novelty-slider

  //инициализация слайдера

  $(function () {
    $(".novelty-slider").owlCarousel();
  });

  //адаптив карусели index novelty-slider

  $(".novelty-slider").owlCarousel({
    items: 1,
    margin: -40,
    loop: true,
    dots: false,
    nav: false,
    navContainer: ".novelty-slider-navigation",
    navText: [
      "<img src='image/novelty-slider-prev.svg'>",
      "<img src='image/novelty-slider-next.svg'>",
    ],
    responsive: {
      360: {
        margin: -70,
      },

      400: {
        margin: -160,
      },

      530: {
        items: 2,
        margin: 0,
      },

      680: {
        items: 3,
        margin: 0,
      },

      1150: {
        items: 4,
        margin: 0,
      },
    },
  });

  //карусель index popular-slider

  //инициализация слайдера

  $(function () {
    $(".popular-slider").owlCarousel();
  });

  //адаптив карусели popular-slider

  $(".popular-slider").owlCarousel({
    items: 1,
    margin: -40,
    loop: true,
    dots: false,
    nav: false,
    navContainer: ".popular-slider-navigation",
    navText: [
      "<img src='image/novelty-slider-prev.svg'>",
      "<img src='image/novelty-slider-next.svg'>",
    ],
    responsive: {
      360: {
        margin: -70,
      },

      400: {
        margin: -160,
      },

      530: {
        items: 2,
        margin: 0,
      },

      680: {
        items: 3,
        margin: 0,
      },

      1150: {
        items: 4,
        margin: 0,
      },
    },
  });

  //создание кликабельности для ссылки "Где купить?" с открытием в новой вкладке

  let linkNoveltyCard = $(".novelty-card");

  linkNoveltyCard.on("click", function () {
    window.open("product-card.html"); //ссылки на странички категорий
  });

  let linkPopularCard = $(".popular-card");

  linkPopularCard.on("click", function () {
    window.open("product-card.html"); //ссылки на странички категорий
  });

  //выпадающее меню searchbar
  let menuFocusTool = $(".searchbar__item__tool");
  let menuOpenTool = $(".searchbar__menu__wrapper__tool");
  let menuFocusClining = $(".searchbar__item__clining");
  let menuOpenClining = $(".searchbar__menu__wrapper__clining");
  let menuFocusCar = $(".searchbar__item__car");
  let menuOpenCar = $(".searchbar__menu__wrapper__car");
  let menuFocusTech = $(".searchbar__item__tech");
  let menuOpenTech = $(".searchbar__menu__wrapper__tech");
  let menuFocusHandtool = $(".searchbar__item__handtool");
  let menuOpenHandtool = $(".searchbar__menu__wrapper__handtool");

  menuFocusTool.on("mouseover", function () {
    menuOpenTool.show();
  });

  $(document).mouseout(function (e) {
    if (
      !menuFocusTool.is(e.target) && // если курсор не над элементом
      menuFocusTool.has(e.target).length === 0
    ) {
      // и не над дочерними элементами
      menuOpenTool.hide(); // скрываем меню
    }
  });

  menuFocusTool.on("click", function () {
    location.href = "listing.html"; //ссылки на странички категорий
  });

  menuFocusClining.on("mouseover", function () {
    menuOpenClining.show();
  });

  $(document).mouseout(function (e) {
    if (
      !menuFocusClining.is(e.target) && // если курсор не над элементом
      menuFocusClining.has(e.target).length === 0
    ) {
      // и не над дочерними элементами
      menuOpenClining.hide(); // скрываем меню
    }
  });

  menuFocusClining.on("click", function () {
    location.href = "listing.html"; //ссылки на странички категорий
  });

  menuFocusCar.on("mouseover", function () {
    menuOpenCar.show();
  });

  $(document).mouseout(function (e) {
    if (
      !menuFocusCar.is(e.target) && // если курсор не над элементом
      menuFocusCar.has(e.target).length === 0
    ) {
      // и не над дочерними элементами
      menuOpenCar.hide(); // скрываем меню
    }
  });

  menuFocusCar.on("click", function () {
    location.href = "listing.html"; //ссылки на странички категорий
  });

  menuFocusTech.on("mouseover", function () {
    menuOpenTech.show();
  });

  $(document).mouseout(function (e) {
    if (
      !menuFocusTech.is(e.target) && // если курсор не над элементом
      menuFocusTech.has(e.target).length === 0
    ) {
      // и не над дочерними элементами
      menuOpenTech.hide(); // скрываем меню
    }
  });

  menuFocusTech.on("click", function () {
    location.href = "listing.html"; //ссылки на странички категорий
  });

  menuFocusHandtool.on("mouseover", function () {
    menuOpenHandtool.show();
  });

  $(document).mouseout(function (e) {
    if (
      !menuFocusHandtool.is(e.target) && // если курсор не над элементом
      menuFocusHandtool.has(e.target).length === 0
    ) {
      // и не над дочерними элементами
      menuOpenHandtool.hide(); // скрываем меню
    }
  });

  menuFocusHandtool.on("click", function () {
    location.href = "listing.html"; //ссылки на странички категорий
  });

  //раскрывающийся пункт подменю (index decktop)

  let openSubMenuCordless = $(".searchbar-menu-item-cordless");
  let openSubMenuGrinders = $(".searchbar-menu-item-grinders");

  openSubMenuCordless.on("mouseover", function () {
    $(".searchbar__submenu__wrapper__cordless").addClass(
      "searchbar__submenu__wrapper__cordless__visability"
    );
  });

  $(document).mouseout(function (e) {
    if (
      !openSubMenuCordless.is(e.target) && // если курсор не над элементом
      openSubMenuCordless.has(e.target).length === 0
    ) {
      // и не над дочерними элементами
      $(".searchbar__submenu__wrapper__cordless").removeClass(
        "searchbar__submenu__wrapper__cordless__visability"
      );
    }
  });

  openSubMenuGrinders.on("mouseover", function () {
    $(".searchbar__submenu__wrapper__grinders").addClass(
      "searchbar__submenu__wrapper__grinders__visability"
    );
  });

  $(document).mouseout(function (e) {
    if (
      !openSubMenuGrinders.is(e.target) && // если курсор не над элементом
      openSubMenuGrinders.has(e.target).length === 0
    ) {
      // и не над дочерними элементами
      $(".searchbar__submenu__wrapper__grinders").removeClass(
        "searchbar__submenu__wrapper__grinders__visability"
      );
    }
  });

  //открытие мобильного меню

  let openMobileTool = $(".searchmobile-tool");
  let openMobileClining = $(".searchmobile-clining");
  let openMobileCar = $(".searchmobile-car");
  let openMobileTech = $(".searchmobile-tech");
  let openMobileHandtool = $(".searchmobile-handtool");

  openMobileTool.on("click", function () {
    $(".menu-tool").slideToggle(500);

    if (!openMobileTool.hasClass("minus")) {
      openMobileTool.addClass("minus"),
        $(this)
          .children(".plus")
          .html((innerText = "–"))
          .css({ backgroundColor: "black", color: "white" });
    } else {
      openMobileTool.removeClass("minus"),
        $(this)
          .children(".plus")
          .html((innerText = "+"))
          .css({ backgroundColor: "#F5F5F5", color: "black" })
          .removeClass("minus");
    }
  });

  openMobileClining.on("click", function () {
    $(".menu-clining").slideToggle(500);

    if (!openMobileClining.hasClass("minus")) {
      openMobileClining.addClass("minus"),
        $(this)
          .children(".plus")
          .html((innerText = "–"))
          .css({ backgroundColor: "black", color: "white" });
    } else {
      openMobileClining.removeClass("minus"),
        $(this)
          .children(".plus")
          .html((innerText = "+"))
          .css({ backgroundColor: "#F5F5F5", color: "black" })
          .removeClass("minus");
    }
  });

  openMobileCar.on("click", function () {
    $(".menu-car").slideToggle(500);

    if (!openMobileCar.hasClass("minus")) {
      openMobileCar.addClass("minus"),
        $(this)
          .children(".plus")
          .html((innerText = "–"))
          .css({ backgroundColor: "black", color: "white" });
    } else {
      openMobileCar.removeClass("minus"),
        $(this)
          .children(".plus")
          .html((innerText = "+"))
          .css({ backgroundColor: "#F5F5F5", color: "black" })
          .removeClass("minus");
    }
  });

  openMobileTech.on("click", function () {
    $(".menu-tech").slideToggle(500);

    if (!openMobileTech.hasClass("minus")) {
      openMobileTech.addClass("minus"),
        $(this)
          .children(".plus")
          .html((innerText = "–"))
          .css({ backgroundColor: "black", color: "white" });
    } else {
      openMobileTech.removeClass("minus"),
        $(this)
          .children(".plus")
          .html((innerText = "+"))
          .css({ backgroundColor: "#F5F5F5", color: "black" })
          .removeClass("minus");
    }
  });

  openMobileHandtool.on("click", function () {
    $(".menu-handtool").slideToggle(500);

    if (!openMobileHandtool.hasClass("minus")) {
      openMobileHandtool.addClass("minus"),
        $(this)
          .children(".plus")
          .html((innerText = "–"))
          .css({ backgroundColor: "black", color: "white" });
    } else {
      openMobileHandtool.removeClass("minus"),
        $(this)
          .children(".plus")
          .html((innerText = "+"))
          .css({ backgroundColor: "#F5F5F5", color: "black" })
          .removeClass("minus");
    }
  });

  //открытие мобильного подменю

  let openMobileSubmenuSaws = $(".searchmobile-saws");
  let openMobileSubmenuDrill = $(".searchmobile-drill");
  let openMobileSubmenuCordless = $(".searchmobile-cordless");
  let openMobileSubmenuGrinder = $(".searchmobile-grinder");
  let openMobileSubmenuMeasuring = $(".searchmobile-measuring");
  let openMobileSubmenuWelding = $(".searchmobile-welding");

  openMobileSubmenuSaws.on("click", function () {
    $(".submenu-saws").slideToggle(500);

    if (!openMobileSubmenuSaws.hasClass("subminus")) {
      openMobileSubmenuSaws.addClass("subminus"),
        $(this)
          .children(".subplus")
          .html((innerText = "–"))
          .css({ backgroundColor: "black", color: "white" });
    } else {
      openMobileSubmenuSaws.removeClass("subminus"),
        $(this)
          .children(".subplus")
          .html((innerText = "+"))
          .css({ backgroundColor: "#E3E3E3", color: "black" })
          .removeClass("minus");
    }
  });

  openMobileSubmenuDrill.on("click", function () {
    $(".submenu-drill").slideToggle(500);

    if (!openMobileSubmenuDrill.hasClass("subminus")) {
      openMobileSubmenuDrill.addClass("subminus"),
        $(this)
          .children(".subplus")
          .html((innerText = "–"))
          .css({ backgroundColor: "black", color: "white" });
    } else {
      openMobileSubmenuDrill.removeClass("subminus"),
        $(this)
          .children(".subplus")
          .html((innerText = "+"))
          .css({ backgroundColor: "#E3E3E3", color: "black" })
          .removeClass("minus");
    }
  });

  openMobileSubmenuCordless.on("click", function () {
    $(".submenu-cordless").slideToggle(500);

    if (!openMobileSubmenuCordless.hasClass("subminus")) {
      openMobileSubmenuCordless.addClass("subminus"),
        $(this)
          .children(".subplus")
          .html((innerText = "–"))
          .css({ backgroundColor: "black", color: "white" });
    } else {
      openMobileSubmenuCordless.removeClass("subminus"),
        $(this)
          .children(".subplus")
          .html((innerText = "+"))
          .css({ backgroundColor: "#E3E3E3", color: "black" })
          .removeClass("minus");
    }
  });

  openMobileSubmenuGrinder.on("click", function () {
    $(".submenu-grinder").slideToggle(500);

    if (!openMobileSubmenuGrinder.hasClass("subminus")) {
      openMobileSubmenuGrinder.addClass("subminus"),
        $(this)
          .children(".subplus")
          .html((innerText = "–"))
          .css({ backgroundColor: "black", color: "white" });
    } else {
      openMobileSubmenuGrinder.removeClass("subminus"),
        $(this)
          .children(".subplus")
          .html((innerText = "+"))
          .css({ backgroundColor: "#E3E3E3", color: "black" })
          .removeClass("minus");
    }
  });

  openMobileSubmenuMeasuring.on("click", function () {
    $(".submenu-measuring").slideToggle(500);

    if (!openMobileSubmenuMeasuring.hasClass("subminus")) {
      openMobileSubmenuMeasuring.addClass("subminus"),
        $(this)
          .children(".subplus")
          .html((innerText = "–"))
          .css({ backgroundColor: "black", color: "white" });
    } else {
      openMobileSubmenuMeasuring.removeClass("subminus"),
        $(this)
          .children(".subplus")
          .html((innerText = "+"))
          .css({ backgroundColor: "#E3E3E3", color: "black" })
          .removeClass("minus");
    }
  });

  openMobileSubmenuWelding.on("click", function () {
    $(".submenu-welding").slideToggle(500);

    if (!openMobileSubmenuWelding.hasClass("subminus")) {
      openMobileSubmenuWelding.addClass("subminus"),
        $(this)
          .children(".subplus")
          .html((innerText = "–"))
          .css({ backgroundColor: "black", color: "white" });
    } else {
      openMobileSubmenuWelding.removeClass("subminus"),
        $(this)
          .children(".subplus")
          .html((innerText = "+"))
          .css({ backgroundColor: "#E3E3E3", color: "black" })
          .removeClass("minus");
    }
  });

  //открытие строки поиска и закрытие по клику на "лупу"

  let openSearchInput = $(".logo-search-image");

  openSearchInput.on("click", function () {
    if ($(".logo-search").hasClass("logo-search")) {
      $(".logo-search")
        .addClass("logo-search-visible")
        .removeClass("logo-search"),
        $(".logo-search-input").fadeIn(),
        $(".logo-search-reset").fadeIn();
    } else {
      $(".logo-search-visible")
        .addClass("logo-search")
        .removeClass("logo-search-visible"),
        $(".logo-search-input").fadeOut(),
        $(".logo-search-reset").fadeOut();
    }
  });

  //переключение на мобильное меню при клике на "бургер"

  $(".logo-mobile").click(function () {
    $(".searchmobile").fadeIn(), $(".logo-close").fadeIn(1);
  });

  $(".logo-close").click(function () {
    $(".searchmobile").fadeOut(), $(".logo-close").fadeOut(1);
  });

  //фиксация меню и строки поиска в header

  $(window).scroll(function () {
    // если пользователь прокрутил страницу более чем на 100px
    if ($(this).scrollTop() > 100) {
      // то сделать меню и строку поиска видимыми
      $(".searchbar").addClass("searchbar-scrolling"),
        $(".searchbar-scrolling-wrapper").addClass(
          "searchbar-scrolling-wrapper-visible"
        ),
        $(".searchbar-scrolling-link").fadeIn();
    }
    // иначе скрыть меню и строку поиска
    else {
      $(".searchbar").removeClass("searchbar-scrolling"),
        $(".searchbar-scrolling-wrapper").removeClass(
          "searchbar-scrolling-wrapper-visible"
        ),
        $(".searchbar-scrolling-link").fadeOut();
    }
  });

  // галерея карточки товара

  $(".product-card-gallery").owlCarousel({
    margin: -190,
    loop: true,
    items: 1,
    nav: false,
    dots: false,
    mouseDrag: true,
    responsive: {
      400: {
        margin: -190,
        items: 2,
        mouseDrag: false,
      },

      470: {
        margin: -290,
        items: 2,
        mouseDrag: false,
      },

      740: {
        margin: -90,
        items: 4,
        mouseDrag: false,
      },

      1050: {
        items: 5,
        mouseDrag: false,
      },
    },
  });

  //вывод картинки в большую область просмотра по клику

  let smallBigBackground = $(".product-card-gallery-image");

  smallBigBackground.on("click", function () {
    let backgroungUrl = $(this).attr("src");
    $(".product-card-gallery-view").css({
      "background-image": "url(" + backgroungUrl + ")",
    });
  });

  //убрать прозрачность для выделенного блока в галерее

  $(".product-card-gallery-item").click(function () {
    $(this).addClass("view");
  });

  //смена прозрачности при переключении картинок

  $(".product-card-gallery").on("mouseup", function (e) {
    let s = $(".view");
    if (!s.is(".product-card-gallery")) {
      s.removeClass("view");
    }
  });

  //создание кликабельности плашек Bort и Extego

  let linkDieBort = $(".product-card-info__buy_bort");

  linkDieBort.on("click", function () {
    location.href = "#";
  });

  let linkDieExtego = $(".product-card-info__buy_extego");

  linkDieExtego.on("click", function () {
    location.href = "#";
  });

  //создание блоков с якорями для мобильного разрешения navline__item

  $(".navline__item").click(function () {
    if ($(window).width() < 740) {
      let clickN = $(this).children("a").attr("href");
      location.href = clickN;
    }
  });

  //карусель index related-slider

  $(function () {
    $(".related-slider").owlCarousel();
  });

  $(".related-slider").owlCarousel({
    items: 1,
    margin: -40,
    loop: true,
    dots: false,
    nav: false,
    navContainer: ".related-slider-navigation",
    navText: [
      "<img src='image/novelty-slider-prev.svg'>",
      "<img src='image/novelty-slider-next.svg'>",
    ],
    responsive: {
      360: {
        margin: -70,
      },

      400: {
        margin: -160,
      },

      530: {
        items: 2,
        margin: 0,
      },

      680: {
        items: 3,
        margin: 0,
      },

      1150: {
        items: 4,
        margin: 0,
      },
    },
  });

  //ссылка по клику на кнопку "news-view-button"
  $(".news-view-button").click(function () {
    location.href = "news-preview.html";
  });

  //всплывающее окно с формой обратной связи
  $(".bort-button-orange45_ready").click(function () {
    $(".modal-overlay").addClass("modal-overlay-visible");
  });

  //закрытие всплывающего окна с формой обратной связи по клику вне формы/дочерных элементов
  $(document).mouseup(function (e) {
    let closeModalOverlay = $(".modal-overlay-form-modal");

    if (
      !closeModalOverlay.is(e.target) &&
      closeModalOverlay.has(e.target).length === 0
    ) {
      $(".modal-overlay-visible").removeClass("modal-overlay-visible");
    }
  });

  //отправка окна с формой обратной связи из кнопки "Написать нам"
  $(".modal-overlay-modal-form").submit(function (e) {
    e.preventDefault();

    $(".modal-overlay").fadeOut(200),
      setTimeout(function () {
        $(".modal-open").addClass("modal-open__visible");
      }, 1000);
  });

  //закрытие окна успешной отправки формы
  $(".modal-open__button").click(function () {
    $(".modal-open__visible").removeClass("modal-open__visible");
  });

  //отправка окна с формой обратной связи со страницы "Контакты"
  $(".contacts-info-form").submit(function (e) {
    e.preventDefault();

    $(".modal-overlay").fadeOut(200),
      setTimeout(function () {
        $(".modal-open").addClass("modal-open__visible");
      }, 1000),
      $(this).get(0).reset();
  });

  //отправка окна с формой обратной связи со страницы "Гарантия"
  $(".bort-modal-form").submit(function (e) {
    e.preventDefault();

    $(".modal-overlay").fadeOut(200),
      setTimeout(function () {
        $(".modal-open").addClass("modal-open__visible");
      }, 1000),
      $(this).get(0).reset();
  });

  //отправка окна с формой обратной связи со страницы "Стать дилером"
  $(".be-dealer__form__wrapper").submit(function (e) {
    e.preventDefault();

    $(".modal-overlay").fadeOut(200),
      setTimeout(function () {
        $(".modal-open").addClass("modal-open__visible");
      }, 1000),
      $(this).get(0).reset();
  });

  //переключение табов для дропшипинга

  let newWindowWidth = $(window).width();

  $(".dropshipping-menu-item-drop").click(function () {
    if (newWindowWidth > 740) {
      $(".dropshipping-info-block").removeClass(
        "dropshipping-info-block-visible"
      ),
        $(".dropshipping-info-block-drop").addClass(
          "dropshipping-info-block-visible"
        ),
        $(this).addClass("dropshipping-menu-item-active");
    } else {
      $(".dropshipping-info-block-drop").slideToggle(400),
        $(this).toggleClass("dropshipping-menu-item-transform");
    }
  });

  $(".dropshipping-menu-item-work").click(function () {
    if (newWindowWidth > 740) {
      $(".dropshipping-info-block").removeClass(
        "dropshipping-info-block-visible"
      ),
        $(".dropshipping-info-block-work").addClass(
          "dropshipping-info-block-visible"
        ),
        $(this).addClass("dropshipping-menu-item-active");
    } else {
      $(".dropshipping-info-block-work").slideToggle(400),
        $(this).toggleClass("dropshipping-menu-item-transform");
    }
  });

  $(".dropshipping-menu-item-site").click(function () {
    if (newWindowWidth > 740) {
      $(".dropshipping-info-block").removeClass(
        "dropshipping-info-block-visible"
      ),
        $(".dropshipping-info-block-site").addClass(
          "dropshipping-info-block-visible"
        ),
        $(this).addClass("dropshipping-menu-item-active");
    } else {
      $(".dropshipping-info-block-site").slideToggle(400),
        $(this).toggleClass("dropshipping-menu-item-transform");
    }
  });

  $(".dropshipping-menu-item-delivery").click(function () {
    if (newWindowWidth > 740) {
      $(".dropshipping-info-block").removeClass(
        "dropshipping-info-block-visible"
      ),
        $(".dropshipping-info-block-delivery").addClass(
          "dropshipping-info-block-visible"
        ),
        $(this).addClass("dropshipping-menu-item-active");
    } else {
      $(".dropshipping-info-block-delivery").slideToggle(400),
        $(this).toggleClass("dropshipping-menu-item-transform");
    }
  });

  $(".dropshipping-menu-item-api").click(function () {
    if (newWindowWidth > 740) {
      $(".dropshipping-info-block").removeClass(
        "dropshipping-info-block-visible"
      ),
        $(".dropshipping-info-block-api").addClass(
          "dropshipping-info-block-visible"
        ),
        $(this).addClass("dropshipping-menu-item-active");
    } else {
      $(".dropshipping-info-block-api").slideToggle(400),
        $(this).toggleClass("dropshipping-menu-item-transform");
    }
  });

  $(".dropshipping-menu-item-docapi").click(function () {
    if (newWindowWidth > 740) {
      $(".dropshipping-info-block").removeClass(
        "dropshipping-info-block-visible"
      ),
        $(".dropshipping-info-block-docapi").addClass(
          "dropshipping-info-block-visible"
        ),
        $(this).addClass("dropshipping-menu-item-active");
    } else {
      $(".dropshipping-info-block-docapi").slideToggle(400),
        $(this).toggleClass("dropshipping-menu-item-transform");
    }
  });

  $(".dropshipping-menu-item-opendrop").click(function () {
    if (newWindowWidth > 740) {
      $(".dropshipping-info-block").removeClass(
        "dropshipping-info-block-visible"
      ),
        $(".dropshipping-info-block-opendrop").addClass(
          "dropshipping-info-block-visible"
        ),
        $(this).addClass("dropshipping-menu-item-active");
    } else {
      $(".dropshipping-info-block-opendrop").slideToggle(400),
        $(this).toggleClass("dropshipping-menu-item-transform");
    }
  });

  $(".dropshipping-menu-item-docs").click(function () {
    if (newWindowWidth > 740) {
      $(".dropshipping-info-block").removeClass(
        "dropshipping-info-block-visible"
      ),
        $(".dropshipping-info-block-docs").addClass(
          "dropshipping-info-block-visible"
        ),
        $(this).addClass("dropshipping-menu-item-active");
    } else {
      $(".dropshipping-info-block-docs").slideToggle(400),
        $(this).toggleClass("dropshipping-menu-item-transform");
    }
  });

  //переключение выделения цветом у активного блока меню дропшипинг

  $(".dropshipping-menu-item").on("mouseup", function (e) {
    let s = $(".dropshipping-menu-item-active");
    if (!s.is(e.target) && s.has(e.target).length === 0) {
      s.removeClass("dropshipping-menu-item-active");
    }
  });

  // переключение на поле ввода данных по кнопке "подключить дропшиппинг"

  $(".dropshipping-info-button").click(function () {
    if (newWindowWidth > 740) {
      $(".dropshipping-menu-item-opendrop").addClass(
        "dropshipping-menu-item-active"
      ),
        $(".dropshipping-menu-item-drop").removeClass(
          "dropshipping-menu-item-active"
        ),
        $(".dropshipping-info-block").removeClass(
          "dropshipping-info-block-visible"
        ),
        $(".dropshipping-info-block-opendrop").addClass(
          "dropshipping-info-block-visible"
        ),
        $(this).addClass("dropshipping-menu-item-active");
    } else {
      $(".dropshipping-info-block-opendrop").slideToggle(400),
        $(this).toggleClass("dropshipping-menu-item-transform");
    }
  });

  //проверка вложенности для элементов меню (если есть подпункты - показывается стрелочка вложенности)

  let nestingСheck = $(".searchbar-menu-item");

  nestingСheck.each(function (item, value) {
    if (!(value.childElementCount == 2)) {
      this.style = "background-image:none;";
    }
  });

  // переключение на поле ввода данных по ссылке "подключить дропшиппинг"
  $(".dropshipping-info-link-opendrop").click(function () {
    if (newWindowWidth > 740) {
      $(".dropshipping-menu-item-opendrop").addClass(
        "dropshipping-menu-item-active"
      ),
        $(".dropshipping-menu-item-work").removeClass(
          "dropshipping-menu-item-active"
        ),
        $(".dropshipping-info-block").removeClass(
          "dropshipping-info-block-visible"
        ),
        $(".dropshipping-info-block-opendrop").addClass(
          "dropshipping-info-block-visible"
        ),
        $(this).addClass("dropshipping-menu-item-active");
    } else {
      $(".dropshipping-info-block-opendrop").slideToggle(400),
        $(this).toggleClass("dropshipping-menu-item-transform");
    }
  });

  // переключение на поле ввода данных по ссылке "документация API"
  $(".dropshipping-info-link-docapi").click(function () {
    if (newWindowWidth > 740) {
      $(".dropshipping-menu-item-docapi").addClass(
        "dropshipping-menu-item-active"
      ),
        $(".dropshipping-menu-item-work").removeClass(
          "dropshipping-menu-item-active"
        ),
        $(".dropshipping-info-block").removeClass(
          "dropshipping-info-block-visible"
        ),
        $(".dropshipping-info-block-docapi").addClass(
          "dropshipping-info-block-visible"
        ),
        $(this).addClass("dropshipping-menu-item-active");
    } else {
      $(".dropshipping-info-block-docapi").slideToggle(400),
        $(this).toggleClass("dropshipping-menu-item-transform");
    }
  });

  // переключение на поле ввода данных по ссылке "регистрация дропшиппинг партнера"
  $(".dropshipping-info-link-regdrop").click(function () {
    if (newWindowWidth > 740) {
      $(".dropshipping-menu-item-opendrop").addClass(
        "dropshipping-menu-item-active"
      ),
        $(".dropshipping-menu-item-api").removeClass(
          "dropshipping-menu-item-active"
        ),
        $(".dropshipping-info-block").removeClass(
          "dropshipping-info-block-visible"
        ),
        $(".dropshipping-info-block-opendrop").addClass(
          "dropshipping-info-block-visible"
        ),
        $(this).addClass("dropshipping-menu-item-active");
    } else {
      $(".dropshipping-info-block-opendrop").slideToggle(400),
        $(this).toggleClass("dropshipping-menu-item-transform");
    }
  });

  //переключение табов для личного кабинета

  $(".cabinet-menu-item-userinfo").click(function () {
    if (newWindowWidth > 980) {
      $(".cabinet-info-block").removeClass("cabinet-info-block-visible"),
        $(".cabinet-info-block-userinfo").addClass(
          "cabinet-info-block-visible"
        ),
        $(this).addClass("cabinet-menu-item-active");
    } else {
      $(".cabinet-info-block-userinfo").slideToggle(400),
        $(this).toggleClass("cabinet-menu-item-transform");
    }
  });

  $(".cabinet-menu-item-sert").click(function () {
    if (newWindowWidth > 980) {
      $(".cabinet-info-block").removeClass("cabinet-info-block-visible"),
        $(".cabinet-info-block-sert").addClass("cabinet-info-block-visible"),
        $(this).addClass("cabinet-menu-item-active");
    } else {
      $(".cabinet-info-block-sert").slideToggle(400),
        $(this).toggleClass("cabinet-menu-item-transform");
    }
  });

  //переключение выделения цветом у активного блока меню личного кабинета

  $(".cabinet-menu-item").on("mouseup", function (e) {
    let s = $(".cabinet-menu-item-active");
    if (!s.is(e.target) && s.has(e.target).length === 0) {
      s.removeClass("cabinet-menu-item-active");
    }
  });

  //переключение на страничку "стать дилером" со страницы partners
  $(".partners-board-button").click(function () {
    location.href = "be-dealer.html";
  });

  //не применяется на рабочих страничках (удалить при необходимости)
  //раскрывающийся пункт меню (дизайн-система)

  $(".bort-submenu-top").click(function () {
    $(".bort-submenu-list").slideToggle(400),
      $(".bort-submenu-arrows").toggleClass("bort-submenu-arrows-transform");
  });
});
