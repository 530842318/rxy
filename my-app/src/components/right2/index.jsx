import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import Right1 from "../right1"
import "./index.css"

export default class index extends Component {
    render() {
        return (
            <Router>
            <div>
                    
                    <Route path="/right" component={Right1}/>
                    <Link to="/right" replace="true">11111111111111111111111111111111111</Link>
                <div className="m_right">
                    <div className="m_r_top">
                        <div className="m_r_top_l"><a href="优化我的班级.html"><span>我的班级</span></a></div>
                        <div className="m_r_top_r"><a href="优化我的班级.html"><span>返回上一级</span></a></div>
                    </div>
                    <div className="m_r_empty"></div>
                    <div className="m_r_maina">
                        <p className="m_r_m_bottom">尊敬的<span>老师（<span id="teacher">刘老师</span>）</span>，请填写你的班级信息：</p>
                        <div className="m_r_m_center">
                            <div className="m_r_m_c-left m_r_m_bottom">
                                <span className="m_right_30">学校</span>
                                <input id="school" type="text" placeholder="请选择学校" className="m_r_main_fs m_r_main-leng"/>
                                <span className="tishi"></span>
                            </div>

                            <div className="m_r_m_c-left m_r_m_bottom teshu0">
                                <span className="m_right_30 teshu1">学段</span>
                                <div className="m_r_main_fs m_r_main-leng teshu2">
                                    <span id="study">请选择学段</span>
                                    <img src="img/下拉_03.png" alt=""/>
                                    <div className="teshu2_out ">
                                        <div>小学</div>
                                        <div>初中</div>
                                        <div>高中</div>
                                        <div>大学</div>
                                    </div>
                                </div>
                                <span className="tishi"></span>
                            </div>


                            <div className="m_r_m_c-left m_r_m_bottom teshu0">
                                <span className="m_right_30 teshu1">年级</span>
                                <div className="m_r_main_fs m_r_main-leng teshu2">
                                    <span id="rank">请选择年级</span>
                                    <img src="img/下拉_03.png" alt=""/>
                                    <div className="teshu2_out">
                                        <div>一年级</div>
                                        <div>二年级</div>
                                        <div>三年级</div>
                                    </div>
                                </div>
                                <span className="tishi"></span>
                            </div>

                            <div className="m_r_m_c-left m_r_m_bottom">
                                <span className="m_right_30">班级名</span>
                                <input id="clsN" type="text" className="m_r_main_fs m_r_main-leng" placeholder="请输入班级名称，限20个字符，不支持输入_和%"/>
                                <span className="tishi" id="example0"></span>
                            </div>

                            <div className="m_r_m_c-left m_r_m_bottom">
                                <span className="m_right_30">类型</span>
                                <div className="dis m_r_main-leng radio" id="type">
                                    <div value="1"><div></div></div><span className="m_r_fontsize m_r_fontright1">行政部</span>
                                    <div value="2"><div></div></div><span className="m_r_fontsize">教学班</span>
                                </div>
                                <span className="tishi" id="example1"></span>
                            </div>

                            
                            <div className="m_r_m_c-left m_r_m_bottom">
                                <span className="m_right_30">退出权限设置</span>
                                <div className="dis m_r_main-leng radio" id="exit">
                                    <div value="1"><div></div></div><span className="m_r_fontsize m_r_fontright2">允许退出</span>
                                    <div value="2"><div></div></div><span className="m_r_fontsize m_r_fontright3">通过班级管理员审核后退出</span>
                                    <div value="3"><div></div></div><span className="m_r_fontsize">禁止退出</span>
                                </div>
                                <span className="tishi" id="example2"></span>
                            </div>

                            <div className="m_r_m_c-left m_r_m_bottom">
                                <div className="dis m_r_main-leng">
                                    <img src="img/保存_03.png" alt="" className="save"/>
                                </div>
                            </div>
                            {/* <link to="/">11</link> */}
                            
                        </div>
                    </div>
                </div>
            </div>
            </Router>
        )
    }
}
