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

    window.onscroll = function() { alert("Scrolled"); };
    var scrollSplashOnce = false
    // window.scrollTo(0, 0)
    if(document.body.scrollTop>10){
      $('.mainMenu').addClass('splashAway')

    }
    window.setTimeout(function() {
    $(window).scroll(function() {

          // $('.mainMenu').addClass('splashAway')
          // $(window).disablescroll({
          //     handleScrollbar: false
          // });
          // alert('scrollllllllllllllll')

          if (!$('.mainMenu').hasClass('splashAway')) {
              $('.mainMenu').addClass('splashAway')
              $(window).disablescroll({
                  handleScrollbar: false
              });
              window.scrollTo(0, 0)
              window.setTimeout(function() {
                  $(window).disablescroll('undo');
              }, 1300)

          }

          console.log('scroll')
            // if (!$('.mainMenu').hasClass('splashAway')) {
            //     $('.mainMenu').addClass('splashAway')
            //     $(window).disablescroll({
            //         handleScrollbar: false
            //     });
            //     window.scrollTo(0, 0)
            // } else {
            //     if (!scrollSplashOnce) {
            //         // alert('once')
            //         window.setTimeout(function() {
            //             // window.scrollTo(0, 0)
            //
            //             $(window).disablescroll('undo');
            //         }, 1000)
            //         scrollSplashOnce = true
            //     }
            // }

    })
  }, 100)

}

// function scroller_scrollToSwiper() {
//     $(document).on('click', '.swiper-button-next, .swiper-button-prev', function(event) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: $('.main-swiper-wrapper').offset().top - $('.mainMenu').outerHeight() +1
//         }, 500);
//     });
// }


function init_ScrollerFunctions() {
    scroller_scrollerFunctions()
    scroller_scrollToPart()
    // scroller_scrollSplashAway()
        // scroller_scrollSplashAway()
        // scroller_scrollToSwiper()
}
