import React, { Component } from 'react'
import "./index.css"
import $ from 'jquery'

export default class index extends Component {


    render() {
        return (
            <div>
                <div className="m_left">
                    <div className="m_left_top">
                        <img src="img/1_03.png" alt="" className="m_l_img1"/>
                        <a href=""><span>个人中心</span></a>
                        <img src="img/2_03.png" alt="" className="m_l_img2"/>
                    </div>
                    <div className="m_foot">
                        <div>
                            <div className="m_height middle">
                                <div className="m_f_empty"></div>
                                <img src="img/3_03.png" alt="" className="center"/>
                                <a href=""><span className="center">其他内容</span></a>
                            </div>
                        </div>
                        <div>
                            <div className="m_height middle">
                                <div className="m_f_empty"></div>
                                <img src="img/3_03.png" alt="" className="center"/>
                                <a href=""><span className="center">其他内容</span></a>
                            </div>
                        </div>
                        <div className="able">
                            <div className="m_height middl">
                                <div className="m_f_empty m_f_e_auto"></div>
                                <img src="img/3_03.png" alt="" className="m_f_w center"/>
                                <a href=""><span className="center">我的班级</span></a>
                            </div>
                        </div>
                        <div>
                            <div className="m_height middle">
                                <div className="m_f_empty"></div>
                                <img src="img/3_03.png" alt="" className="center"/>
                                <a href=""><span className="center">其他内容</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


$("body").on("mouseenter", ".main .m_height", function() {
    $(this).parent().addClass("able1");
});
$("body").on("mouseleave", ".main .m_height", function() {
    $(this).parent().removeClass("able1");})