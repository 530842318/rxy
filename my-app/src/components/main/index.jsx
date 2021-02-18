import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import Left from "../left"
import "./index.css"
import Right from "../right"
import Right1 from "../right1"
import Right2 from "../right2"

export default class index extends Component {
    render() {
        return (
            <Router>
            <div>
               
                <div className="main">
                    <div className="m_empty"></div>
                    
                    <Left/>
                    {/* <Right/> */}
                    {/* <Right1/> */}
                    <Right2/>
                    {/* <Link to="/right">11111111111111111111111111111111111</Link>
                    <Route path="/right" component={Right2}/> */}
                    </div>
                    
                    
                        
                    
                    
            </div>
            </Router>
        )
    }
}
