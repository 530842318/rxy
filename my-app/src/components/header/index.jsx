import React, { Component } from 'react'
import "./index.css"
import $ from 'jquery'


export default class index extends Component {

    

    render() {
        return (
            <div>
                <div className="head">
                    <div className="h_empty"></div>
                    <a href=""><img src="img/矢量智能对象.png" alt="" className="img1"/></a>
                    <a href=""><img src="img/形状%201.png" alt="" className="img2"/></a>
                    <div className="logo">网教通</div>
                    <a href=""><span className="h_dh">首页</span></a> 
                    <a href=""><span className="h_dh auto">教学管理</span></a>
                    <a href=""><span className="h_dh">学习</span></a>
                    <a href=""><span className="h_dh">资源超市</span></a>
                    <a href=""><span className="h_dh">教育应用</span></a>
                    <a href=""><span className="h_dh">新闻</span></a>
                    <a href=""><span className="h_dh">名师名校</span></a>
                    <a href=""><img src="img/创建班级_03.png" alt="" className="img3"/></a>
                    <a href=""><img src="img/icon.png" alt="" className="img4"/></a>
                    <a href=""><span id="auto">coco</span></a>
                    <div className="h_empty1"></div>
                </div>
            </div>
        )
    }
}



$("body").on("mouseenter", ".head .h_dh", function() {
    $(this).addClass("auto1");
});
$("body").on("mouseleave", ".head .h_dh", function() {
    $(this).removeClass("auto1");})