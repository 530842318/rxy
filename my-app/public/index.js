
var cls={
    1:{
        "teacher":"田小雨",
        "school":"haik",
        "study":"初中",
        "rank":"一年级",
        "clsN":"二班",
        "type":"1",
        "exit":"2"
    }
}
for(var i in cls){
    if (cls[i]["type"]==="1"){
    const study=cls[i]["study"]
    const rank=cls[i]["rank"]
    const clsN=cls[i]["clsN"]
    const teacher=cls[i]["teacher"]
    const xzb="<div class=\"m_r_m_top\">\n" +
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
    // document.getElementById("xzb").appendChild(xzb)
    }else if(cls[i]["type"]==="2"){
        const study=cls[i]["study"]
        const rank=cls[i]["rank"]
        const clsN=cls[i]["clsN"]
        const teacher=cls[i]["teacher"]
        const xzb="<div class=\"m_r_m_top\">\n" +
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
        // document.getElementsByClassName(".jxb").appendChild(xzb)
    }
}