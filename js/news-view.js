const newsView = () => {
  //ссылка по клику на кнопку "news-view-button"
  $(".news-view-button").click(function () {
    location.href = "news-preview.html";
  });
};

newsView();
