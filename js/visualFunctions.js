function visual_loadVisual() {

    $('body').addClass('noOverflow')
    // alert('dang')

    var unloadWorkButton = `<h1 data-unload-visual class="close-button"></h1> `

    var nothingFound = `<div class="visualSlideInner animated fadeIn">
                        <div class="col1"><div class="postHeaderWrapper">` + unloadWorkButton + `<h1 class="postHeader">So solly! I found noding!</h1></div></div>
                        </div>`

    var thumbs = ''

    $.ajax('http://192.168.2.18/pages?filter[name]=visual&fields=content', {
        beforeSend: function(data) {
            $('.visualSlide').remove()
        },
        success: function(data) {
            $('body').prepend(`<div class='visualSlide animated slideInRight'></div>`)

            var rawContentElement = $(data[0].content.rendered)
            // console.log('asshole')
            // console.log(  rawContentElement)
            wrapper = `<div class="visualSlideInner animated fadeIn">
                    <div class="col1"><div class="postHeaderWrapper">` + unloadWorkButton + `<h1 class="postHeader">VISUAL</h1></div></div>
                    <div class="visualScroller"><div class="postContent"></div></div>
                    </div>`

            $(".visualSlide").append(wrapper);

            rawContentElement.filter('.visualItem').each(function() {
                console.log($(this).find('img').attr('src'))
                $(this).css("background-image", "url(" + $(this).find("img").attr("src") + ")");
                $(this).find('img').remove()
                // .append('.visualSlide')
                $(".visualSlide .postContent").append($(this));


            })

        },
        error: function() {
            $('body').prepend(`<div class='visualSlide animated slideInRight'></div>`)
            wrapper = `<div class="visualSlideInner animated fadeIn">
                    <div class="col1"><div class="postHeaderWrapper">` + unloadWorkButton + `<h1 class="postHeader">VISUAL</h1></div></div>
                    <div class="visualScroller"><div class="postContent">nothing found :()</div></div>
                    </div>`

            $(".visualSlide").append(wrapper);
        },
        complete: function() {

            setTimeout(function() {
                    packeryInit()
                    $('.visualSlide .postHeaderWrapper').attr('style', $(".visualSlide").attr('style'))
                    resize_positionPostHeaderWrapperNext()
                    $('.visualSlide').removeClass('slideInRight')
                    $('.visualSlide .postContent').css({"visibility":"visible"})
                }, 900)
                //  });

        }


    });
}

function packeryInit(){
  // resize_positionVisualContent()
  $('.postContent').packery({
    itemSelector: '.visualItem',
    isHorizontal: true,
    transitionDuration: 0
    // gutter:10
  });
  $(".visualScroller").mCustomScrollbar({
     theme:"minimal",
     axis:"x",
     scrollInertia:100,
     advanced:{ updateOnContentResize: true }
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



function init_visualFunctions(){
  visual_getVisualEvent()
}