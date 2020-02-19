$(document).ready(function() {
$('.carousel').slick({
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
  ],
  prevArrow: '<img class="slick-prev" src="images/leftarrow.png">',
  nextArrow: '<img class="slick-next" src="images/rightarrow.png">',
});
});
