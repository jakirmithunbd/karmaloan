
(function($){
  "use strict";
    /*** Sticky header */
    $(window).scroll(function() {

        if ($(window).scrollTop() > 0) {
          $(".header").addClass("sticky");
        } 
        else {
          $(".header").removeClass("sticky");
        }
    });

    /*** Header height = gutter height */

    function setGutterHeight(){
        var header = document.querySelector('.header'),
            gutter = document.querySelector('.header_gutter');
            gutter.style.height = header.offsetHeight + 'px';
    }

    window.onload = setGutterHeight;
    window.onresize = setGutterHeight;

    $('.loan-process-slider').slick({
        slidesToShow: 4,
        infinite: true,
        dots: false,
        slidesToScroll: 2,
        arrows: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                arrows: false,
                slidesToShow: 2
              }
            }
          ]
    });

    

})(jQuery);