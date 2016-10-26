function swiper_swiperSetup(){
  var swiperH;
  var swiperH = new Swiper('.swiper-container-h', {
      pagination: '.swiper-pagination-h',
      paginationClickable: true,
      navigation: true,
      // resizeReInit: true,
      // autoHeight:true,
      observer: true,
      keyboardControl: true,
      nextButton: '.nav-next',
      prevButton: '.nav-prev',
      onSlideChangeEnd: function() {
          swiper_setCaptionNav()
      },
      onSlideChangeStart: function(){
        var changeTimer;
        clearTimeout(changeTimer);
        changeTimer = setTimeout(function() {
          $('html, body').animate({
              scrollTop: $('.main-swiper-wrapper').offset().top - $('.mainMenu').outerHeight() +1
          }, 250);
        }, 250);

      }
  });
  var resizeTimer;
  $(window).on('resize', function(e) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        // swiperH.reInit();
        swiperH.update()
      }, 160);
  });
}

function swiper_setCaptionNav() {
    $('.nav-caption').html('<span class="ignoreColor" data-load-work=' + $('.swiper-slide-active').attr('data-load-work') + '>' + $('.swiper-slide-active').find('.caption').text() + '</span>')
}

function swiper_hoverProject(){
  var orgText = $('.nav-helper').text()

  $('.swiper-wrapper').mouseenter(function() {
    $('.nav-next').addClass('nav-open')
    $('.nav-helper').text('Open project').css({'border-bottom':'2px solid black'})
  })
  .mouseleave(function() {
    $('.nav-next').removeClass('nav-open')
    $('.nav-helper').text(orgText).css({'border-bottom':'0px solid black'})

  });
}

function swiper_hoverPrevNext(){
  $('.swiper-button-prev, .swiper-button-next').mouseenter(function() {
    $('.nav-helper').css({'border-bottom':'2px solid black'})
  })
  .mouseleave(function() {
    $('.nav-helper').css({'border-bottom':'0px solid black'})

  });

}

function swiper_triggerPrevNext(){

  $(document).on('click','.swiper-button-next',function(){
    $('.nav-next').click()
  })
  $(document).on('click','.swiper-button-prev',function(){
    $('.nav-prev').click()
  })

}

function init_SwiperFunctions(){
  swiper_swiperSetup()
  swiper_setCaptionNav()
  swiper_hoverProject()
  swiper_hoverPrevNext()
  swiper_triggerPrevNext()
}
