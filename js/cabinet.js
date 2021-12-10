const cabinet = () => {
  //переключение табов для личного кабинета

  let newWindowWidth = $(window).width();

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
};

cabinet();
