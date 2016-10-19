function makeIndex_loadSliderPosts() {
    $.ajax('http://192.168.2.18/posts?fields=slug,title,acf', {
        success: function(data) {
            $.each(data, function(i, field) {
                if (field.slug != "studio-cam") {
                    swiperPost = `<div class="swiper-slide" data-load-work=` + field.slug + `>
                              <div class="caption">` + field.title.rendered + `</div>
                              <img class="lazyload animated" data-src="` + field.acf.customfeaturedimage.sizes.large + `">
                            </div>`
                    $(".swiper-wrapper").append(swiperPost);
                }
            });
        },
        error: function() {
            alert('error :(')
        },
        complete: function() {
            animateInPart('#partSplash')
            scroller_sliderWrapperTop = $('.main-swiper-wrapper').offset().top-$('.mainMenu').outerHeight()
        }
    });
}

function makeIndex_loadIndexTexts() {
    $.ajax('http://192.168.2.18/pages?filter[name]=index&fields=acf', {
        success: function(data) {
            indexblurb = data[0].acf.indexblurb
            indexmore = data[0].acf.indexmore
            indexcontact = data[0].acf.indexcontact
            indexclients = data[0].acf.indexclients
            indexwork = data[0].acf.indexwork

            triggerVisual = " <span data-load-visual>[<img src='img/eyes.svg'> go visual]</span>"

            $(".indexblurb h2").append(indexblurb+triggerVisual);
            $(".indexmore h2").append(indexmore);
            $(".indexcontact h2").append(indexcontact);
            $(".indexclients").append(indexclients);
            $(".indexwork").append(indexwork);

        },
        error: function() {
            alert('error :(')
        },
        complete: function() {
            resize_positionNextFixedBehind()
                // animateInPart('#partSplash')
            setTimeout("animateInPart('#partStudio')", 1000);
            setTimeout("animateInPart('#partProjects')", 2000);
            setTimeout("animateInPart('#partContact')", 3000);
        }


    });
}


function animateInPart(part) {
    $(part).addClass('fadeIn').addClass('partVisible')
}

function init_MakeIndexFunctions() {
    makeIndex_loadIndexTexts()
    makeIndex_loadSliderPosts()
}
