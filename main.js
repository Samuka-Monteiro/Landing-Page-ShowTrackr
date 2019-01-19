$(document).ready(function () {
    $('.slick').slick({
        infinite: true,
        slidesToShow: 5.55,
        swipe: true,
        autoplay: true,
        autoplaySpeed: 1000,

    });

    $('.left').slick({
        infinite: true,
        slidesToShow: 3.5,
        swipe: true,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false

    });
    $('.right').slick({
      infinite: true,
      slidesToShow: 4.5,
      swipe: true,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false

  });


    $(function() {
        // Smooth Scrolling
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });
});