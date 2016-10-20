// scroller_sliderWrapperTop IS RESET AFTER AJAX IN makeIndexFunctions.js
var scroller_sliderWrapperTop = 0

function scroller_mainMenutoggleLayout(offset) {
    if (offset > scroller_sliderWrapperTop) {
        $('.mainMenu h1').addClass('collapsedMenu')
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
    // scroller_scrollToSwiper()
}
