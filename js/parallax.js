//Parallax -- COVER
function simpleParallax() {
    //This variable is storing the distance scrolled
    var scrolled = $(window).scrollTop() + 1;

    //Every element with the class "scroll" will have parallax background 
    //Change the "0.3" for adjusting scroll speed.
    $('.scroll').css('background-position', '0' + -(scrolled * 0.3) + 'px');
}
//Everytime we scroll, it will fire the function
$(window).scroll(function (e) {
    simpleParallax();
});

//Parallax -- COVER TEXT
function simpleParallax1a() {
    //This variable is storing the distance scrolled
    var scrolled = $(window).scrollTop() + 1;

    //Every element with the class "scroll" will have parallax background 
    //Change the "0.3" for adjusting scroll speed.
    $('.scroll1a').css('text-position', '0' + -(scrolled * 0.8) + 'px');
}
//Everytime we scroll, it will fire the function
$(window).scroll(function (e) {
    simpleParallax1a();
});

//Parallax 
function simpleParallax2() {
    //This variable is storing the distance scrolled
    var scrolled = $(window).scrollTop() + 1;

    //Every element with the class "scroll" will have parallax background 
    //Change the "0.3" for adjusting scroll speed.
    $('.scroll2').css('background-position', '0' + -(scrolled * 0.1) + 'px');
}
//Everytime we scroll, it will fire the function
$(window).scroll(function (e) {
    simpleParallax2();
});