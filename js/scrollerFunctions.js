// scroller_sliderWrapperTop IS RESET AFTER AJAX IN makeIndexFunctions.js
var scroller_sliderWrapperTop = 0

function scroller_mainMenutoggleLayout(offset) {
    if (offset > 56) {
        if ($('.mainMenu').hasClass('splashAway')) {
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


    //
    // if (document.body.scrollTop > 10) {
    //     $('.mainMenu').addClass('splashAway')
    //
    // }

    if (Modernizr.touch) {

        var firstTouch = false

        $(window).bind('touchstart touchend', function(e) {
            if(!firstTouch){
              $('.mainMenu').addClass('splashAway')
              $(window).disablescroll({
                  handleScrollbar: false
              });
              window.setTimeout(function() {
                  $(window).disablescroll('undo');
                  // window.scrollTo(0, 0)
              }, 1300)

              window.setTimeout(function() {
                  router_initPostSplashFunctions()
              }, 800)

              firstTouch = true
              // alert('first')
            }
        });

    } else {

      var scrollDebounceDesktop = debounce(function() {
        // All the taxing stuff you do
        if (!$('.mainMenu').hasClass('splashAway')) {
          // alert('splashawayyyy')
            $('.mainMenu').addClass('splashAway')
            $(window).disablescroll({
                handleScrollbar: false
            });
            window.scrollTo(0, 0)
            window.setTimeout(function() {
                $(window).disablescroll('undo');
                // window.scrollTo(0, 0)

            }, 1300)

            window.setTimeout(function() {
                router_initPostSplashFunctions()
            }, 800)

        }
        // console.log('hay')
      }, 150);

      window.addEventListener('scroll', scrollDebounceDesktop);

    }

}

function scroller_toggleStudioCam(){

      var scroller_toggleStudioCamCheck = debounce(function() {

        swiper_checkStudioCamToggle()
      }, 100);

      window.addEventListener('scroll', scroller_toggleStudioCamCheck);

}

function init_ScrollerFunctions() {
    scroller_scrollerFunctions()
    scroller_scrollToPart()
    scroller_scrollSplashAway()
    scroller_toggleStudioCam()
}
