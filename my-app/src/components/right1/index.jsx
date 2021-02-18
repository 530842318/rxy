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
                    <div className="m_r_main">
                        <div className= "m_r_m_top">
                            <span>折纸兴趣班</span>
                            <div className="m_r_m_empty"></div>
                            <div className="m_r_m_one">
                                <div className="m_r_m_ss">
                                    <input type="text" id="neirong"/><img id="anniu" src="img/搜索按钮_03.png" alt=""/>
                                </div>
                            </div>
                        </div>
                            <div className="m_r_m_content">
                                <div className="m_r_m_c_top0">
                                    <div className="m_r_m_c_top">
                                        <span className="auto " id="ls">所有老师（12）</span>
                                        <span id="xs">所有学生（10）</span>
                                        <span id="jz">所有家长（10）</span>
                                    </div>
                                </div>
                                <div className="ss">
                                    <div className="m_r_m_c_img laoshi">

                                    </div>
                                    <div className="m_r_m_c_img xuesheng hide">

                                    </div>
                                    <div className="m_r_m_c_img jiazhang hide">
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            </Router>
        )
    }
}
