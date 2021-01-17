import React from 'react';
import Navbar from './../Navbar/Navbar';
import ShowData from './ShowData';
import './ItemData.css';

function ItemData(props){
    return(
        <div className="iData">
           <Navbar/>
           <ShowData id={props.location.state.id} />
        </div>
    );
}

export default ItemData ;