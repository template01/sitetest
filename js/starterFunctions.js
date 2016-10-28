function starter_studioCam() {
    var timeoutPeriod = 800;
    var imageURI = 'http://template-studio.nl/stillcam/checkFile.php';
    var x = 0,
        y = 0;
    var img = new Image();
    var setTimer;

    img.onload = function() {
        var canvas = document.getElementById("studioCamCanvas");
        var context = canvas.getContext("2d");
        context.drawImage(img, x, y);
        setTimer = setTimeout(timedRefresh, timeoutPeriod);
    };

    function timedRefresh() {
        d = new Date();
        img.src = imageURI + '?' + d.getTime();
    }
    timedRefresh()

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
    starter_studioCam()
}
