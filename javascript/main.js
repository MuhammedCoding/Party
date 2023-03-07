/*
questinons:
1)slide up on clickong on another singer
2)
*/
/* nav */
function slideRight(){
    $("nav").animate({width:"250px"});
}

function slideLeft(){
    $("nav").animate({width:"0px"});
}

$(".side-nav").click(function(){
    slideRight();
})

$("nav .icon-close").click(function(){
    slideLeft();
})

/* end nav */

/* start singers */
$(".singer").click(function(){
    $(this).children("p").slideToggle(500);
    
    // if(prevSingerParagraph != $(this).children("p")){
    //     console.log("yes");
    // } ==============> why

    // let prevSingerParagraph = $(this).children("p");

    // if($(this) == $(".singer:last-child")){
    //     $(".singer .container").css("padding-bottom","0");
    //     alert("yes");
    // }   ==================>>>>> why not?
})


/* start timer */

var countDownDate = new Date("Apr 3, 2023 00:00:00").getTime();

var x = setInterval(function() {

var currentTime = new Date().getTime();
var diff = countDownDate - currentTime;
var days = Math.floor(diff / (1000 * 60 * 60 * 24));
var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((diff % (1000 * 60)) / 1000);

$("#days").text(days+ "d");
$("#hours").text(hours+ "h");
$("#mins").text(minutes+ "m");
$("#sec").text(seconds+ "s");

}, 1000);

/* start contact */

const charRemaining = 100;
$("#form-msg").keyup(function(){
    console.log(charRemaining);
    let currentChars = charRemaining - $(this).val().length;
    $("#form-msg").siblings("span").text(currentChars + " characters left");
    if (currentChars <= 0) {
        $("#form-msg").siblings("span").addClass("text-danger");
        $("#form-msg").siblings("span").text("your available character finished");
    } 
})