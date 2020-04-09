$(document).ready(function() {


    // refs
    var leftClick = $('.icon-left > a'); //click sinistro
    var rightClick = $('.icon-right > a'); //click destro
    console.log(rightClick);
    

    console.log(rightClick);

    // ref img
    var firstImg = $('.first-img');
    console.log(firstImg);
    

    rightClick.click(function() {
        firstImg.hide()
    });






    //end ready function 
});

