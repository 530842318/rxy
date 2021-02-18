// var cls={
//     1:{
//         "teacher":"田小雨",
//         "school":"haik",
//         "study":"初中",
//         "rank":"一年级",
//         "clsN":"二班",
//         "type":"1",
//         "exit":"2"
//     }
// }
// c=1
// console.log(cls[1]["type"])
// console.log(++c)

if (typeof(Storage) !== "undefined") {
    s=Math.ceil(Math.random()*100);
    // console.log(cls)
    cls=localStorage.getItem("lastname");
    cls=JSON.parse(cls)
    console.log(cls)
    console.log(cls.length)
    // $("wsnd").html(txt)
}

for(var i in cls){
    if (cls[i]["type"]==="1"){
    study=cls[i]["study"]
    rank=cls[i]["rank"]
    clsN=cls[i]["clsN"]
    teacher=cls[i]["teacher"]
    xzb="<div class=\"m_r_m_top\">\n" +
        "                        <div class=\"m_r_m_tool\">\n" +
        "                            <div class=\"middle\"><img src=\"img/房子.png\" alt=\"\"></div>\n" +
        "                            <div class=\"m_r_m_content\">\n" +
        "                                <p>"+study+"-2013级</p>\n" +
        "                                <p>班级:<span>"+rank+clsN+"</span></p>\n" +
        "                                <p>班主任：<span>"+teacher+"</span></p>\n" +
        "                                <p>学生：<span>33人</span></p>\n" +
        "                            </div>\n" +
        "                            <div class=\"bottom\"><img src=\"img/行政_03.png\" alt=\"\"></div>\n" +
        "                        </div>\n" +
        "                    </div>"
    $(".xzb").append(xzb)
    }else if(cls[i]["type"]==="2"){
        study=cls[i]["study"]
        rank=cls[i]["rank"]
        clsN=cls[i]["clsN"]
        teacher=cls[i]["teacher"]
        xzb="<div class=\"m_r_m_top\">\n" +
            "                        <div class=\"m_r_m_tool\">\n" +
            "                            <div class=\"middle\"><img src=\"img/房子.png\" alt=\"\"></div>\n" +
            "                            <div class=\"m_r_m_content\">\n" +
            "                                <p>"+study+"-2013级</p>\n" +
            "                                <p>班级:<span>"+rank+clsN+"</span></p>\n" +
            "                                <p>班主任：<span>"+teacher+"</span></p>\n" +
            "                                <p>学生：<span>33人</span></p>\n" +
            "                            </div>\n" +
            "                            <div class=\"bottom\"><img src=\"img/行政_03.png\" alt=\"\"></div>\n" +
            "                        </div>\n" +
            "                    </div>"
        $(".jxb").append(xzb)
    }
}

if (typeof(Storage) !== "undefined") {
    localStorage.setItem("cls", cls);
}
