function work_loadWork(postName) {

    var unloadWorkButton = `<h1 data-unload-work class="close-button"></h1> `

    var nothingFound = `<div class="workSlideInner col1 animated fadeIn">
                        <div class="postHeaderWrapper">` + unloadWorkButton + `<h1 class="postHeader">So solly! I found noding!</h1></div>
                        </div>`

    $.ajax('http://api.template-studio.nl/wp-json/wp/v2/posts?filter[name]=' + postName + "&fields=acf,content,title", {
        beforeSend: function(data) {
            $('.workSlide').remove()
        },
        success: function(data) {
            $('body').prepend(`<div class='workSlide animated slideInRight'></div>`)

            if (data.length > 0) {
                var rawContentElement = $($.parseHTML(data[0].content.rendered))

                $('.workSlide').css({
                    'background-color': data[0].acf.backgroundcolor.split(":").pop()
                })

                var mapElements = ''
                rawContentElement.each(function() {
                    if ($(this).html() != null) {
                        $(this).find('img').each(function() {
                            $(this)
                                .attr('data-src', $(this).attr('src'))
                                .attr('data-srcset', $(this).attr('srcset'))
                                .attr('src', '/css/transparent.png')
                                .attr('srcset', '')
                                .addClass('lazyload')
                        })

                        mapElements = mapElements + $(this).prop('outerHTML')
                    }
                })

                post = `<div class="workSlideInner animated fadeIn">
                      <div class="postHeaderWrapper"><div class="col1 postHeaderInner">` + unloadWorkButton + `<h1 class="postHeader">` + data[0].title.rendered + `</h1></div></div>
                      <div class="postContent"><div class="postContentInfo"><p>` + data[0].acf.postinfo + `</p></div>` + mapElements + `</div>
                      </div>`


            } else {
                post = nothingFound
            }
        },
        error: function() {
            $('body').prepend(`<div class='workSlide animated slideInRight'></div>`)
            post = nothingFound
        },
        complete: function() {

            $('body').addClass('noOverflow')

            setTimeout(function() {

                    $(".workSlide").append(post);

                    // group gallery

                    $(function() {

                        var target = '.gallery-item',
                            invert = ':not(' + target + ')',
                            wrap = '<div class="postGallery">',
                            breakpoints = $('.postContent > *' + invert);

                        breakpoints.each(function() {
                            $(this).nextUntil(invert).wrapAll(wrap);
                        });

                        breakpoints.first().prevUntil(invert).wrapAll(wrap);

                        $('.postContent').children(':not(.postGallery)').addClass('col1');

                    });
                    // group gallery end

                    $('.workSlide .postHeaderWrapper').attr('style', $(".workSlide").attr('style'))
                    resize_positionPostHeaderWrapperNext()
                    $('.workSlide').removeClass('slideInRight')
                    $('.workSlideInner').removeClass('fadeIn')

                    scroller_iosCheck()
                }, 900)
                //  });

        }


    });
}

function work_unloadWork() {
    if ($('.workSlide')) {
        // $('body').removeClass('noOverflow')
        $('.workSlide').addClass('noOverflow')

        $('body').removeClassDelay({
            class: 'slideOutRight',
            delay: 500
        })


        $('.workSlideInner').addClass('fadeOut')

        $('.workSlide').addClassDelay({
            class: 'slideOutRight',
            delay: 500
        })


        $('.workSlide').animate({
            scrollTop: 0
        }, 500);

        setTimeout(function() {
            $('.workSlide').empty()

        }, 1300)

    }
}


var scrollYPos = 0

function work_unloadWorkEvent() {
    $(document).on("click", "*[data-unload-work]", function() {
        window.location.hash = ''
        if ($('.mainMenu').hasClass('splashAway')) {
          window.scrollTo(0, scrollYPos)
        }else{
          scroller_scrollSplashAway()
        }

    });
}

function work_getWorkEvent() {
    $(document).on("click", "*[data-load-work]", function() {
        scrollYPos = window.scrollY
        window.location.hash = 'work/' + $(this).attr('data-load-work')
        visual_unloadVisual()


    });
}

function init_WorkSlideFunctions() {
    work_unloadWorkEvent()
}

function init_WorkFunctions() {
    work_getWorkEvent()
}
