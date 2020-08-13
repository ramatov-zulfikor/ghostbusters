$(document).ready(function () {
   $('.header__burger').on('click', function () {
      $('.header__burger').toggleClass('active');
      $('.header__menu').toggleClass('active');
      $('.header__buttons').toggleClass('active');
      $('body').toggleClass('lock');
   });
});