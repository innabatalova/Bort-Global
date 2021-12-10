const productCard = () => {
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
};

productCard();
