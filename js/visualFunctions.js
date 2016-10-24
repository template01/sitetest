

function visual_loadVisual() {


    var unloadWorkButton = `<h1 data-unload-visual class="close-button"></h1> `

    var nothingFound = `<div class="visualSlideInner animated fadeIn">
                        <div class="col1"><div class="postHeaderWrapper">` + unloadWorkButton + `<h1 class="postHeader">So solly! I found noding!</h1></div></div>
                        </div>`

    var thumbs = ''

    $.ajax('http://api.template-studio.nl/wp-json/wp/v2/pages?filter[name]=visual&fields=content,title', {
        beforeSend: function(data) {
            $('.visualSlide').remove()
        },
        success: function(data) {
            $('body').prepend(`<div class='visualSlide animated slideInRight'></div>`)

            var rawContentElement = $($.parseHTML(data[0].content.rendered))
                // console.log('asshole')
                // console.log(  rawContentElement)
            wrapper = `<div class="visualSlideInner animated fadeIn">
                    <div class="col1"><div class="postHeaderWrapper">` + unloadWorkButton + `<h1 class="postHeader">` + data[0].title.rendered + `</h1></div></div>
                    <div class="visualScroller"><div class="postContent"></div></div>
                    </div>`

            $(".visualSlide").append(wrapper);

              rawContentElement.filter('.visualItem').each(function() {
                  // console.log($(this).find('img').attr('src'))
                  // $(this).css("background-image", "url(" + $(this).find("img").attr("src") + ")");
                  $(this).attr('data-bg',$(this).find("img").attr("src"))
                  $(this).find('img').remove()
                  $(".visualSlide .postContent").append($(this));

              })

        },
        error: function() {
            $('body').prepend(`<div class='visualSlide animated slideInRight'></div>`)
            wrapper = `<div class="visualSlideInner animated fadeIn">
                    <div class="col1"><div class="postHeaderWrapper">` + unloadWorkButton + `<h1 class="postHeader">VISUAL - not found</h1></div></div>
                    <div class="visualScroller"><div class="postContent">nothing found :()</div></div>
                    </div>`

            $(".visualSlide").append(wrapper);
        },
        complete: function() {

            $('body').addClass('noOverflow')

            setTimeout(function() {
                    packeryInit()
                    $('.visualSlide .postHeaderWrapper').attr('style', $(".visualSlide").attr('style'))
                    resize_positionPostHeaderWrapperNext()
                    $('.visualSlide').removeClass('slideInRight')
                    $('.visualSlide .postContent').css({
                        "visibility": "visible"
                    })
                    visual_checkInView(300)
                }, 900)
                //  });

        }


    });
}

function packeryInit() {
    // resize_positionVisualContent()
    $('.postContent').packery({
        itemSelector: '.visualItem',
        isHorizontal: true,
        transitionDuration: 0
            // gutter:10
    });
    $(".visualScroller").mCustomScrollbar({
        theme: "minimal",
        axis: "x",
        scrollInertia: 100,
        advanced: {
            updateOnContentResize: true
        },
        callbacks:{
            onScrollStart:function(){
              setTimeout(function() {
                visual_checkInView(150)

              }, 150);
            },
            onScrollEnd:function(){
                visual_checkInView(150)
            },

          onTotalScroll: function(){
            $('.visualItem').each(function(){
              $(this).addClass('animated fadeIn')
              $(this).css({'background-image':'url('+$(this).attr('data-bg')+')'})
            })
          }


        }

    });

}

function visual_unloadVisual() {
    if ($('.visualSlide')) {
        $('body').removeClass('noOverflow')
        $('.visualSlide').addClass('noOverflow')
        $('.visualSlide').addClass('slideOutRight')
        setTimeout(function() {
            $('.visualSlide').empty()
        }, 800)
    }
}


function visual_unloadVisualEvent() {
    $(document).on("click", "*[data-unload-visual]", function() {
        window.location.hash = ''
    });
}

function visual_getVisualEvent() {
    $(document).on("click", "*[data-load-visual]", function() {
        scrollYPos = window.scrollY
        window.location.hash = 'visual'
    });
}

function visual_checkInView(speed){

  var speed = speed;
  var timer = setInterval(addBackgroundImg, speed);

  var visualItems =  $( '.visualItem:in-viewport:not(.fadeIn)' );

  var length = visualItems.length;

  var index = 0;
  function addBackgroundImg() {
      $( '.visualItem:in-viewport:eq('+index+')' ).css({'background-image':'url('+$( '.visualItem:in-viewport:eq('+index+')' ).attr('data-bg')+')'})
      setTimeout(function(){
        $( '.visualItem:in-viewport:eq('+index+')' ).addClass('animated fadeIn')
        $( '.visualItem:in-viewport:eq('+index+')' ).css({'background-image':'url('+$( '.visualItem:in-viewport:eq('+index+')' ).attr('data-bg')+')'})

        index++;

      },speed/2)
       if (index > length) {
           clearInterval(timer);
       }
  }

}

function init_visualFunctions() {
    visual_getVisualEvent()
}
