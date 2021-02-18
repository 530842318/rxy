$(".teshu2").click(function () {
    $(this).find(".teshu2_out").toggleClass("exit")
})


$(".teshu2_out div").hover(function () {
    $(this).addClass("e9")
},function () {
    $(this).removeClass("e9")
}).click(function () {
    s=$(this).parent().prev().prev().html($(this).html())
})

$(".main .m_right .m_r_main .radio>div").click(function () {
    value=$(this).attr("value")
    $(this).parent().attr("value",value)
    $(this).css("border-color","#3ba8f0")
    $(this).find("div").css("background-color","#3ba8f0")
    $(this).siblings("div").css("border-color","#000")
    $(this).siblings("div").find("div").css("background-color","")
})