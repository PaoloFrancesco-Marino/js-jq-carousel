$(document).ready(function() {


    // refs
    var leftClick = $('.icon-left > a'); //click sinistro
    var rightClick = $('.icon-right > a'); //click destro
    console.log(rightClick);

    // ref img

    var firstImg = $('.first');
    var lastImg = $('.last');

    // ref circle
    var firstCircle = $('.first_circle');
    var lastCircle = $('.last_circle');
    
    
  
    
    // left click
    leftClick.click(function() {
        console.log('click Sinistra');
        // img ref
        var currentImg = $('.image-box img.active');
        // circle ref

        var currentCircle = $('.nav-box .circle.active_circle')
        
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

        // end left click
    });

    // right click
    rightClick.click(function() {
        console.log('click Destra');
        // img ref
        var currentImg = $('.image-box img.active');

        //circle ref
        var currentCircle = $('.nav-box .circle.active_circle')

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

        // end right click
    });


    // keydown action
    $(document).keydown(function (event) { 
        console.log(event.keyCode);
        // img ref
        var currentImg = $('.image-box img.active');

        //circle ref
        var currentCircle = $('.nav-box .circle.active_circle')

        // keycode event push
        var keyCaps = event.keyCode;

        if (keyCaps == 39) {
            // keydown right

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

        } else if (keyCaps == 37) {
            // keydown left

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
        }
        // end keyword action
    });

    //end ready function 
});

