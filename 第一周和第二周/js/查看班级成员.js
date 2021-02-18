

$("#ls").click(function () {
    $(this).addClass("auto")
    $(this).siblings().removeClass("auto")
    $(".laoshi").removeClass("hide")
    $(".xuesheng").addClass("hide")
    $(".jiazhang").addClass("hide")
})
$("#xs").click(function () {
    $(this).addClass("auto")
    $(this).siblings().removeClass("auto")
    $(".laoshi").addClass("hide")
    $(".xuesheng").removeClass("hide")
    $(".jiazhang").addClass("hide")
})
$("#jz").click(function () {
    $(this).addClass("auto")
    $(this).siblings().removeClass("auto")
    $(".laoshi").addClass("hide")
    $(".xuesheng").addClass("hide")
    $(".jiazhang").removeClass("hide")
})




var laoshi={
    1:{
        s1:"班主任",
        s2:"生物老师",
        s3:"语文",
        s4:"信息与技术",
        s5:"地理",
        s6:"地理",
        s7:"历史",
        s8:"语文",
        s9:"信息与技术",
        name:"柳云"
    },
    2:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"柳云"
    },
    3:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"柳云"
    },
    4:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"柳云"
    },
    5:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"柳云"
    },
    6:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"柳云"
    },
    7:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"柳云"
    }
}

var xuesheng={
    1:{
        s1:"班主任",
        s2:"生物老师",
        s3:"语文",
        s4:"信息与技术",
        s5:"地理",
        s6:"地理",
        s7:"历史",
        s8:"语文",
        s9:"信息与技术",
        name:"学生1"
    },
    2:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"学生2"
    },
    3:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"学生3"
    },
    4:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"学生4"
    },
    5:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"学生5"
    },
    6:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"学生6"
    },
    7:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"学生7"
    }
}
var jiazhang={
    1:{
        s1:"班主任",
        s2:"生物老师",
        s3:"语文",
        s4:"信息与技术",
        s5:"地理",
        s6:"地理",
        s7:"历史",
        s8:"语文",
        s9:"信息与技术",
        name:"家长1"
    },
    2:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"家长2"
    },
    3:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"家长3"
    },
    4:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"家长4"
    },
    5:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"家长5"
    },
    6:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"家长6"
    },
    7:{
        s1:"班主任",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        s6:"",
        s7:"",
        s8:"",
        s9:"",
        name:"家长7"
    }
}

li={
    ls:[laoshi,".laoshi"],
    xs:[xuesheng,".xuesheng"],
    jz:[jiazhang,".jiazhang"]
}


for (var l in li){
    con=li[l][0]
    for( var i in con){
        s1=con[i]["s1"]
        s2=con[i]["s2"]
        s3=con[i]["s3"]
        s4=con[i]["s4"]
        s5=con[i]["s5"]
        s6=con[i]["s6"]
        s7=con[i]["s7"]
        s8=con[i]["s8"]
        s9=con[i]["s9"]
        name=con[i]["name"]
        // console.log(s1)
        txt="<div class=\"m_r_m_c_m\">\n" +
        "                                <div class=\"m_r_m_c_m_img img\">\n" +
        "                                    <div>\n" +
        "                                        <span class=\"red1\">"+s1+"</span>\n" +
        "                                        <span>"+s2+"</span>\n" +
        "                                        <span>"+s3+"</span>\n" +
        "                                        <span>"+s4+"</span>\n" +
        "                                        <span>"+s5+"</span>\n" +
        "                                        <span>"+s6+"</span>\n" +
        "                                        <span>"+s7+"</span>\n" +
        "                                        <span>"+s8+"</span>\n" +
        "                                        <span>"+s9+"</span>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                                <div class=\"m_r_m_c_m_font\">\n" +
        "                                    <p>"+name+"</p>\n" +
        "                                </div>\n" +
        "                            </div>"
        $(li[l][1]).append(txt)
    }
}



for(var i=0;i<$("span").length;i++){
    if($("span").eq(i).html()==""){
        $("span").eq(i).css(
            {
                "margin":"0",
                "border":"0",
                "padding":"0"
            }
        )
    }
}

$("#anniu").click(function () {
    neirong=$("#neirong").val();
    neirong=neirong.trim()
    if (neirong!=""){
        a=RegExp(neirong)
        for(var i=0;i<$(".ss").find("p").length;i++){
            ht=$(".ss").find("p").eq(i).html()
            // console.log(ht)
            if (a.test(ht)){
                $(".ss").find("p").eq(i).css("color","red")
            }
        }
    }else{
        for(var i=0;i<$(".ss").find("p").length;i++){
            $(".ss").find("p").eq(i).css("color","")
            }
        }
})

