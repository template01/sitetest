function splash_loadSplash() {
    $.ajax('http://api.template-studio.nl/wp-json/wp/v2/pages?filter[name]=index&fields=acf', {
        success: function(data) {
            indexblurb = data[0].acf.indexblurb
            $("#splashPage").append('<div class="textBlurb animated fadeIn"><p>'+indexblurb+'</p></div>');

        },
        error: function() {
            // alert('error :(')
        },
        complete: function() {

        }


    });
}


function init_SplashFunctions(){
  splash_loadSplash()
}
