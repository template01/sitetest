var siteLoaded = false;

// triggered in scrollerFunctions.js
function router_initPostSplashFunctions() {
  init_MakeIndexFunctions()
  init_StarterFunctions()
  init_SwiperFunctions()
  init_ResizeFunctions()
  init_WorkFunctions()
  init_visualFunctions()
}
// end

function router_loadIndex() {
    if (!siteLoaded) {
        siteLoaded = true;
        init_SplashFunctions()
        init_ScrollerFunctions()

    }else{
      swiper_checkStudioCamToggle()
    }
    work_unloadWork()
    visual_unloadVisual()
    // starter_studioCamStart()

}

function router_routerSetup() {
    routie({
        'work/:link?': function(link) {
            if (window.location.hash.indexOf("/") >= 0) {
                work_loadWork(link)
                starter_studioCamStop()
                init_WorkSlideFunctions()
            }else{
              window.location.hash = ''
              router_loadIndex()
            }
        },
        'visual':function(){
          visual_loadVisual()
          visual_unloadVisualEvent()
        },
        '': function() {
            router_loadIndex()
        },
        '*': function() {
            // alert('no!')
            window.location.hash = ''
            router_loadIndex()
        }
    });
}

function init_router() {
    router_routerSetup()
}
