import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
function Logo (){
    return(<div className="logoBox">
             <Link className="textDeco" to="/Home">
                <div className="logo1">Knowledge</div>
                <div className="logo2">Bazaar</div>
              </Link>     
            </div>
    );
}
export default Logo;