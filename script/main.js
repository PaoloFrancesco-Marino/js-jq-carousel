$(document).ready(function() {
    // refs
    var leftClick = $('.icon-left > a'); //click sinistro
    var rightClick = $('.icon-right > a'); //click destro
    console.log(rightClick);

    // refs first/last Item

    var first = $('.first');
    var last = $('.last');
    
    // refs addClass

    var activeImg = 'active';
    var activeCircle = 'active_circle';
  
    // left click
    leftClick.click(function() {
        console.log('click Sinistra');

        // img ref
        var currentImg = $('.image-box img.active');
        
        // circle ref
        var currentCircle = $('.nav-box .circle.active_circle')
        
        prevItem(currentImg, last, activeImg);
        prevItem(currentCircle, last, activeCircle);

        // end left click
    });

    // right click
    rightClick.click(function() {
        console.log('click Destra');
        // img ref
        var currentImg = $('.image-box img.active');

        //circle ref
        var currentCircle = $('.nav-box .circle.active_circle')

        nextItem(currentImg, first, activeImg);
        nextItem(currentCircle, first, activeCircle) 

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

        if (keyCaps == 37) {
            // keydown left
            prevItem(currentImg, last, activeImg);
            prevItem(currentCircle, last, activeCircle);
            

        } else if (keyCaps == 39) {
            // // keydown right
            nextItem(currentImg, first, activeImg);
            nextItem(currentCircle, first, activeCircle) 
        }
        // end keyword action
    });

    //end ready function 
});


/***
 * Function Utilities
 */

// prev item (prende l'oggetto precedente)
function prevItem (currentItem, lastItem, classItem) {

    // img change
    currentItem.removeClass(classItem)
    currentItem.prev().addClass(classItem) 

    // scorrimento img
    if (currentItem.hasClass('first')) {
        lastItem.addClass(classItem)
    }    
}

// next item (prende l'ogetto successivo)
function nextItem (currentItem, firstItem, classItem) {

    currentItem.removeClass(classItem)
    currentItem.next().addClass(classItem)
    
    if (currentItem.hasClass('last')) {
        firstItem.addClass(classItem)
    }
}


