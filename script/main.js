$(document).ready(function() {


    // refs
    var leftClick = $('.icon-left > a'); //click sinistro
    var rightClick = $('.icon-right > a'); //click destro
    console.log(rightClick);
    

    leftClick.click(function() {
        console.log('click Sinistra');
        var currentImg = $('.image-box img.active');

        if (currentImg.hasClass('active')) {
            currentImg.removeClass('active')
            currentImg.prev().addClass('active')
        } 

    });

    
    rightClick.click(function() {
        console.log('click Destra');
        var currentImg = $('.image-box img.active');

        if (currentImg.hasClass('active')) {
            currentImg.removeClass('active')
            currentImg.next().addClass('active')
        } 

    });

    
    

    






    //end ready function 
});

