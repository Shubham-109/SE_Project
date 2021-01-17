import React from 'react';
import './FrontTop.css';
import rocket from './rocket.svg';
import {Link} from 'react-router-dom';










function FrontTop(){
     return(
        <div className="flex">
            <div className="anim-box">
            <span style={{"--i":1}}></span>
            <span style={{"--i":2}}></span>
            <span style={{"--i":3}}></span>
            <span style={{"--i":4}}></span>
            <span style={{"--i":5}}></span>
            <div className="text-white rocket-icon"> <img className="rocket" width="60" height="60" src={rocket}/> </div>

            </div>
            <div className="textContainer"><Link className="textDeco" to="/SignUp" > <span className="fText" >Get Started</span> </Link> </div>
        </div>  
     );
}
export default FrontTop;