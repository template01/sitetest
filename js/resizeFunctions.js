function resize_resizeCanvas() {
      $('#studioCamCanvas').css({
        'width': $('.swiper-container').width() + 'px',
        // 'height': $('.swiper-container').height() + 'px'
    })
}

function resize_positionNextFixedBehind() {
    // $('.fixedBehind').each(function() {
    //     $(this).css({
    //         'width': $(this).parents('.col1').width() + 'px',
    //         'margin-top': +$('.mainMenu').outerHeight() + 'px'
    //     })
    //     $(this).next('.row-full').css({
    //         'margin-top': $(this).outerHeight() + $('.mainMenu').outerHeight() + 'px'
    //     })
    //
    // })
}

function resize_positionPostHeaderWrapperNext(){
  $('.postContent').css({
      'margin-top': +$('.postHeaderWrapper').outerHeight() + 'px'
  })

}

function resize_resizeWindow() {
    var resizeTimer;
    $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            var sliderWrapperTop = $('.main-swiper-wrapper').offset().top
            resize_positionNextFixedBehind()
            resize_resizeCanvas()

        }, 150);


    });


}

function init_ResizeFunctions() {
    resize_resizeWindow()
}
