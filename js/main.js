const main = () => {
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
    } else {
      $(".scroll-arrow").fadeOut();
    }
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

  //проверка вложенности для элементов меню (если есть подпункты - показывается стрелочка вложенности)

  let nestingСheck = $(".searchbar-menu-item");

  nestingСheck.each(function (item, value) {
    if (!(value.childElementCount == 2)) {
      this.style = "background-image:none;";
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
};

main();
