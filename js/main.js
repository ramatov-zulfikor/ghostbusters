$(document).ready(function () {

   $('.header__burger').on('click', function () {
      $('.header__burger').toggleClass('active');
      $('.header__menu').toggleClass('active');
      $('.header__buttons').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.cast__title').on('click', function (e) {
      e.preventDefault();

      $('.cast__title').removeClass('active');
      $('.cast__row').removeClass('active');

      $(this).addClass('active');
      $($(this).attr('href')).addClass('active');
   });

   $('.slider').slick({
      infinite: true,
      slidesPerRow: 4,
      slidesToScroll: 2,
      slidesToShow: 4,
      arrows: true,
      prevArrow: '.news__prev-arrow',
      nextArrow: '.news__next-arrow',
      responsive: [{
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 2
         }
      }, {
         breakpoint: 767,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1
         }
      }, {
         breakpoint: 599,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }]
   });

});