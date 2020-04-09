$(document).ready(function() {


    // refs
    var leftClick = $('.icon-left > a'); //click sinistro
    var rightClick = $('.icon-right > a'); //click destro
    console.log(rightClick);

    // ref img

    var firstImg = $('.first');
    var lastImg = $('.last');

    var firstCircle = $('.first_circle');
    var lastCircle = $('.last_circle');
    
    
  
    

    leftClick.click(function() {
        console.log('click Sinistra');
        // img ref
        var currentImg = $('.image-box img.active');
        // circle ref

        var currentCircle = $('.circle-box .circle.active_circle')
        
        // img change
        currentImg.removeClass('active')
        currentImg.prev().addClass('active') 

        // scorrimento img
        if (currentImg.hasClass('first')) {
            lastImg.addClass('active')
        }
        
        //scorrimento circle

        currentCircle.removeClass('active_circle');
        currentCircle.prev().addClass('active_circle')

        if (currentCircle.hasClass('first_circle')) {
            lastCircle.addClass('active_circle')
        }
       
    });

    
    rightClick.click(function() {
        console.log('click Destra');
        // img ref
        var currentImg = $('.image-box img.active');

        //circle ref
        var currentCircle = $('.circle-box .circle.active_circle')

        // scorrimento img

        currentImg.removeClass('active')
        currentImg.next().addClass('active')
        
        if (currentImg.hasClass('last')) {
            firstImg.addClass('active')
        }

        // scorrimento circle

        currentCircle.removeClass('active_circle');
        currentCircle.next().addClass('active_circle')

        if (currentCircle.hasClass('last_circle')) {
            firstCircle.addClass('active_circle')
        }

    });

    
    

    






    //end ready function 
});

