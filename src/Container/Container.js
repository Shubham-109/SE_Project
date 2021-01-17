import React from 'react';
import { render } from 'react-dom';
import './Container.css';
import Slider from '../Slider/Slider';
import FrontTop from './FrontTop';

function Container(){
    return(
        <div className="ContainerBody" >
           <FrontTop/>
           <Slider t={" Entrance Exam"} id={0} />
           <Slider t={"Computing and Information Technology "} id={1} />
           <Slider t={"Asian History"} id={2} ></Slider>
           <Slider t={"Lifestyle"} id={3} />
           <Slider t={"Biography"} id={4} />
           <Slider t={"Healthy Living and Wellness"} id={5} />
           <Slider t={"Literature"} id={6} />
           <Slider t={"Entertainment"} id={7} />
           <Slider t={"Juvenile Fiction"} id={8} />
           <Slider t={"Education"} id={9} />
        </div>
    )
}
export default Container;
