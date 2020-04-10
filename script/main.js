$(document).ready(function() {
    // refs
    var leftClick = $('.icon-left > a'); //click sinistro
    var rightClick = $('.icon-right > a'); //click destro
    console.log(rightClick);

    var upClick = $('.icon-up > a') //click in alto
    var downClick = $('.icon-down > a') //click in baso

    // refs first/last Item

    var first = $('.first');
    var last = $('.last');
    
    var firstBox = $('.first-box')
    var lastBox = $('.last-box')
    
    // refs addClass

    var activeImg = 'active';
    var activeBox = 'active';
    var activeCircle = 'active_circle';
    var imageFirst = 'first';
    var imageLast = 'last';
    var initialBox = 'first-box';
    var finishBox = 'last-box';

    // up click (cambia categoria img)
    upClick.click(function() {
        console.log('click in alto');

        currentBoxImage = $('.image-box.active')
        prevItem(currentBoxImage, lastBox, activeBox, initialBox);
        // end down click
    });

    // down Click (cambia categoria img)
    downClick.click(function() {
        console.log('click in basso');

        currentBoxImage = $('.image-box.active')
        nextItem(currentBoxImage, firstBox, activeBox, finishBox);
        // end down click
    });
  
    // left click
    leftClick.click(function() {
        console.log('click Sinistra');

        // img ref
        var currentImg = $('.image-box img.active');
        
        // circle ref
        var currentCircle = $('.nav-box .circle.active_circle')
        
        prevItem(currentImg, last, activeImg, imageFirst);
        prevItem(currentCircle, last, activeCircle, imageFirst);

        // end left click
    });

    // right click
    rightClick.click(function() {
        console.log('click Destra');
        // img ref
        var currentImg = $('.image-box img.active');

        //circle ref
        var currentCircle = $('.nav-box .circle.active_circle');

        nextItem(currentImg, first, activeImg, imageLast);
        nextItem(currentCircle, first, activeCircle, imageLast);

        // end right click
    });


    // keydown action
    $(document).keydown(function (event) { 
        console.log(event.keyCode);
        // img ref
        var currentImg = $('.image-box img.active');

        //circle ref
        var currentCircle = $('.nav-box .circle.active_circle')

        // box image
        currentBoxImage = $('.image-box.active')

        // keycode event push
        var keyCaps = event.keyCode;
        if (keyCaps == 38) {
            // up click
            prevItem(currentBoxImage, lastBox, activeBox, initialBox);
        } else if (keyCaps == 40) {
            // down click
            nextItem(currentBoxImage, firstBox, activeBox, finishBox);
        } else if (keyCaps == 37) {
            // keydown left
            prevItem(currentImg, last, activeImg, imageFirst);
            prevItem(currentCircle, last, activeCircle, imageFirst);
            

        } else if (keyCaps == 39) {
            // // keydown right
            nextItem(currentImg, first, activeImg, imageLast);
            nextItem(currentCircle, first, activeCircle, imageLast);
        }
        // end keyword action
    });

    //end ready function 
});


/***
 * Function Utilities
 */

// prev item (prende l'oggetto precedente)
function prevItem (currentItem, lastItem, classItem, hasClass) {

    // img change
    currentItem.removeClass(classItem)
    currentItem.prev().addClass(classItem) 

    // scorrimento img
    if (currentItem.hasClass(hasClass)) {
        lastItem.addClass(classItem)
    }    
}

// next item (prende l'ogetto successivo)
function nextItem (currentItem, firstItem, classItem, hasClass) {

    currentItem.removeClass(classItem)
    currentItem.next().addClass(classItem)
    
    if (currentItem.hasClass(hasClass)) {
        firstItem.addClass(classItem)
    }
}


