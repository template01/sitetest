var triggerStudiocam;
var img = new Image();
var timeoutPeriod = 1000;
var imageURI = 'http://template-studio.nl/stillcam/checkFile.php';
var x = 0,
    y = 0;

function starter_timedRefresh() {
    d = new Date();
    img.src = imageURI + '?' + d.getTime();
}

function starter_studioCamInit() {

    img.onload = function() {
        var canvas = document.getElementById("studioCamCanvas");
        var context = canvas.getContext("2d");
        context.drawImage(img, x, y);
        triggerStudiocam = setTimeout(starter_timedRefresh, timeoutPeriod);
    };

    starter_timedRefresh()

}


function starter_studioCamStart(){
    triggerStudiocam = setTimeout(starter_timedRefresh, timeoutPeriod);
}

function starter_studioCamStop(){
  clearTimeout(triggerStudiocam)
}

function starter_mainMenuMaker() {
    $('#partStudio h1').clone().appendTo(".mainMenu").addClass('menuItemHidden').attr('goto','partStudio');
    $('#partProjects h1').clone().appendTo(".mainMenu").addClass('menuItemHidden').attr('goto','partProjects');
    $('#partContact h1').clone().appendTo(".mainMenu").addClass('menuItemHidden').attr('goto','partContact');
}


function init_StarterFunctions() {
    resize_resizeCanvas()
    resize_positionNextFixedBehind()
    starter_mainMenuMaker()
    starter_studioCamInit()
}
