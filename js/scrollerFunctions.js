// scroller_sliderWrapperTop IS RESET AFTER AJAX IN makeIndexFunctions.js
var scroller_sliderWrapperTop = 0

function scroller_mainMenutoggleLayout(offset) {
    if (offset > 56) {
      if($('.mainMenu').hasClass('splashAway')){
          $('.mainMenu h1').addClass('collapsedMenu')
      }
    } else {
        $('.mainMenu h1').removeClass('collapsedMenu')
    }
}

function scroller_scrollerFunctions() {
    $(window).scroll(function() {
        scroller_mainMenutoggleLayout($(this).scrollTop())
    });
}

function scroller_scrollToPart() {
    $(document).on('click', '.mainMenu h1', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#" + $(this).attr('goto')).offset().top - $('.mainMenu').outerHeight()
        }, 500);
    });
}

function scroller_scrollSplashAway() {

  if(document.body.scrollTop>10){
    $('.mainMenu').addClass('splashAway')

  }

  if (Modernizr.touch) {
    $(window).bind('touchstart touchend', function(e) {
        // alert('ey')
        $('.mainMenu').addClass('splashAway')
        $(window).disablescroll({
            handleScrollbar: false
        });
        window.setTimeout(function() {
            $(window).disablescroll('undo');
            // window.scrollTo(0, 0)
        }, 1300)

    });

  } else {
    $(window).scroll(function() {

          if (!$('.mainMenu').hasClass('splashAway')) {
              $('.mainMenu').addClass('splashAway')
              $(window).disablescroll({
                  handleScrollbar: false
              });
              window.scrollTo(0, 0)
              window.setTimeout(function() {
                  $(window).disablescroll('undo');
                  // window.scrollTo(0, 0)
              }, 1300)

          }

    })
  }

}

function init_ScrollerFunctions() {
    scroller_scrollerFunctions()
    scroller_scrollToPart()
    scroller_scrollSplashAway()
}
