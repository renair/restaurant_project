$(document).ready(function(){
    var MAIN_IMAGE = $(".main-image img");
    var IMAGE_LIST = [];
    var CURRENT_IMAGE = 0;
    
    //loading all images
    $(".gallery-image").each(function(index) {
        IMAGE_LIST.push($(this).attr("src"));
    });
    
    //load image to main image
    $(".gallery-image").click(function() {
        MAIN_IMAGE.attr("src", $(this).attr("src"));
    })

    //scroll left
    $(".main-image  .scroll-left").click(function() {
        CURRENT_IMAGE = CURRENT_IMAGE - 1 < 0 ? IMAGE_LIST.length - 1 : CURRENT_IMAGE - 1 ;
        MAIN_IMAGE.attr("src", IMAGE_LIST[CURRENT_IMAGE]);
        console.log(CURRENT_IMAGE);
    });
    
    //scroll right
    $(".main-image .scroll-right").click(function() {
        CURRENT_IMAGE = (CURRENT_IMAGE + 1) % IMAGE_LIST.length;
        MAIN_IMAGE.attr("src", IMAGE_LIST[CURRENT_IMAGE]);
        console.log(CURRENT_IMAGE);
    });
});