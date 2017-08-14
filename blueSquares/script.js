// $("#test").toggle(function() {
//     $(this).css("background", "red");
// },
// function() {
//     $(this).css("background", "");
// });


$(".flex-item-1").on("mousedown", function() {
    $(this).toggleClass('back-red');
})
.on("mouseup", function(e) {
    $(this).toggleClass('back-red');
});



// https://www.w3schools.com/jquery/jquery_get_started.asp
