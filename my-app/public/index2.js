$("body").on("click", ".teshu2", function() {
    $(this).find(".teshu2_out").toggleClass("exit")
});


$("body").on("mouseenter", ".teshu2_out div", function() {
    $(this).addClass("e9")
});
$("body").on("mouseleave", ".teshu2_out div", function() {
    $(this).removeClass("e9")})

$("body").on("click", ".teshu2_out div", function() {
    s=$(this).parent().prev().prev().html($(this).html())
});

$("body").on("click", ".main .m_right .m_r_maina .radio>div", function() {
    value=$(this).attr("value")
    $(this).parent().attr("value",value)
    $(this).css("border-color","#3ba8f0")
    $(this).find("div").css("background-color","#3ba8f0")
    $(this).siblings("div").css("border-color","#000")
    $(this).siblings("div").find("div").css("background-color","")
})