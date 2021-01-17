import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
function Footer(){
   return(
       <div className="footerBox" >
           <div className="footerLeft">
               <div className="fList"> <Link className="textDeco" to="/AboutUs" > About Us </Link> </div>
               <div className="fList">Contact us</div>
               <div className="fList">FAQ</div>
               <div className="fList">Terms of Use</div>
               <div className="fList">Help</div>
           </div>
           <div className="footerRight">
               <div className="fRightText">
                   Project by Government Polytechnic Students
                   <img className="fRightImg" src="http://www.gpnagpur.ac.in/gpnagpur_new/images/logo.png"></img>
               </div>
           </div>
       </div>
   )
}
export default Footer;