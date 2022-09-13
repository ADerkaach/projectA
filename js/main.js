$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  });

  $("a").on("click", function (e) {
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
  
  $('.project-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.project-tabs__top-item').removeClass('project-tabs__top-item--active');
    $(this).addClass('project-tabs__top-item--active');

    $('.project-tabs__content-item').removeClass('project-tabs__content-item--active');
    $($(this).attr('href')).addClass('project-tabs__content-item--active');
  });
  $(".blog__items").each(function () {
    let more = $(this).find(".blog__btn");
    let hide = $(this).find(".hide-content");
    hide.hide();
    more.click(function () {
      hide.slideToggle();
    });
  });
})