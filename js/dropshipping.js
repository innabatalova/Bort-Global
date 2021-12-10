const dropshipping = () => {
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
};

dropshipping();
