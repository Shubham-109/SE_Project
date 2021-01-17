import React from 'react';
import Navbar from './Navbar/Navbar';
import Container from './Container/Container';
import Footer from './Footer/Footer';

function Home(props){
    // console.log("f" + props.location.state.fname)
    return(
        <div>
            <Navbar   />
            <Container/>
            <Footer/>
        </div>
    )
}
export default Home ;