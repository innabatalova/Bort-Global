const categories = () => {
  //создание кликабельности для всего блока карточки categories

  let linkCard = $(".categories-card");

  linkCard.on("click", function () {
    location.href = "#"; //ссылки на странички категорий
  });
};

categories();
