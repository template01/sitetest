var siteLoaded = false;

function router_loadIndex() {
    if (!siteLoaded) {
        siteLoaded = true;
        init_MakeIndexFunctions()
        init_StarterFunctions()
        init_SwiperFunctions()
        init_ResizeFunctions()
        init_ScrollerFunctions()
        init_WorkFunctions()
        init_visualFunctions()

    }
    work_unloadWork()
    visual_unloadVisual()

}

function router_routerSetup() {
    routie({
        'work/:link?': function(link) {
            if (window.location.hash.indexOf("/") >= 0) {
                work_loadWork(link)
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
