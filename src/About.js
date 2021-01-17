import React from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import './About.css';
function About(){
    return(
        <div className="about">
            <Navbar/>
            <div> <h3>About</h3> </div>
            <Footer/>  
        </div>      
    )
}
export default About;