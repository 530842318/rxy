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

fo=true
c=Math.ceil(Math.random()*4000);
$(".save").click(function () {
    teacher=$("#teacher").html()
    school=$("#school").val()
    study=$("#study").html()
    rank=$("#rank").html()
    clsN=$("#clsN").val()
    type=$("#type").attr("value")
    exit=$("#exit").attr("value")
    if(school.length==0){
        fo = fo && false
        $("#school").siblings(".tishi").html("不能为空")
    }else{
        fo = fo && true
        $("#school").siblings(".tishi").html("")
    }
    console.log(fo)
    if(study=="请选择学段"){
        fo = fo && false
        $("#study").parent().siblings(".tishi").html("不能没有选择")
    }else{
        fo = fo && true
        $("#study").parent().siblings(".tishi").html("")
    }
    console.log(fo)
    if(rank=="请选择年级"){
        fo = fo && false
        $("#rank").parent().siblings(".tishi").html("不能没有选择")
    }else{
        fo = fo && true
        $("#rank").parent().siblings(".tishi").html("")
    }
    console.log(fo)
    if(clsN.length==0||/[%_]+/.test(clsN)||clsN.length>20){
        fo = fo && true
        $("#clsN").siblings(".tishi").html("没有按照要求")
    }else{
        fo = fo && true
        $("#clsN").siblings(".tishi").html("")
    }
    console.log(fo)
    if(type==undefined){
        fo = fo && false
        $("#type").siblings(".tishi").html("不能没有选择")
    }else{
        fo = fo && true
        $("#type").siblings(".tishi").html("")
    }
    console.log(fo)
    if(exit==undefined){
        fo = fo && false
        $("#exit").siblings(".tishi").html("不能没有选择")
    }else{
        fo = fo && true
        $("#exit").siblings(".tishi").html("")
    }
    console.log(fo)
    if (fo){
            txt={
                'teacher':teacher,
                'school':school,
                'study':study,
                'rank':rank,
                'clsN':clsN,
                'type':type,
                'exit':exit
            }
            cls[c]=txt
            console.log()
            cls=JSON.stringify(cls)
            if (typeof(Storage) !== "undefined") {
                // 存储
                localStorage.setItem("lastname", cls);
                // 检索
            } else {
                alert("该不能使用localStorage")
            }
            location.href="优化我的班级.html"
        }
        fo=true

})
