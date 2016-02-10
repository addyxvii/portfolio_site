$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
});
$(window).on("load",function() {
    function fade() {
        $('.description, .aboutMe').each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            /* If the object is completely visible in the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css('opacity')==0) {$(this).fadeTo(500,1);}
            } else { //object goes out of view (scrolling up)
                if ($(this).css('opacity')==1) {$(this).fadeTo(500,0);}
            }
        });
    }
    fade(); //Fade in completely visible elements during page-load
    $(window).scroll(function() {fade();}); //Fade in elements during scroll
});
