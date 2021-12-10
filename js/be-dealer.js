const beDealer = () => {
  //отправка окна с формой обратной связи со страницы "Стать дилером"
  $(".be-dealer__form__wrapper").submit(function (e) {
    e.preventDefault();

    $(".modal-overlay").fadeOut(200),
      setTimeout(function () {
        $(".modal-open").addClass("modal-open__visible");
      }, 1000),
      $(this).get(0).reset();
  });
};

beDealer();
