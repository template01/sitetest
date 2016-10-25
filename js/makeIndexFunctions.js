function makeIndex_loadSliderPosts() {
    $.ajax('http://api.template-studio.nl/wp-json/wp/v2/posts?fields=slug,title,acf', {
        success: function(data) {
            $.each(data, function(i, field) {
                if (field.slug != "studio-cam") {
                    // <img class="lazyload animated" data-src="` + field.acf.customfeaturedimage.sizes.large + `">
                    swiperPost =
                              `<div class="swiper-slide" data-load-work=` + field.slug + `>
                                <div class="caption">` + field.title.rendered + `</div>

                                <img class=" lazyload" data-srcset="` + field.acf.customfeaturedimage.sizes.large + ` 1920w, ` + field.acf.customfeaturedimage.sizes.medium + ` 960w, ` + field.acf.customfeaturedimage.sizes.thumbnail + ` 480w, ` + field.acf.customfeaturedimage.sizes.medium_large + ` 768w" data-src="` + field.acf.customfeaturedimage.sizes.large + `">

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
    $.ajax('http://api.template-studio.nl/wp-json/wp/v2/pages?filter[name]=index&fields=acf', {
        success: function(data) {
            indexblurb = data[0].acf.indexblurb
            indexmore = data[0].acf.indexmore
            indexcontact = data[0].acf.indexcontact
            indexclients = data[0].acf.indexclients
            indexwork = data[0].acf.indexwork

            $(".indexblurb h2").append(indexblurb);
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
