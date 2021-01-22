import React,{Component, useEffect, useState} from 'react';
import  './SliderData.css';
import image from './computer-class.png';
import { Link } from 'react-router-dom';

function SliderData(props) {

  const [width , setWidth] = useState("1024 px"); 
  const [imgWidth , setImgWidth] = useState("1024 px");
  const [imgHeight , setImgHeight] = useState("1024 px");  
  const [duration ,setDuration] =useState(props.tDur);
  const [hour , setHour] = useState(0);
  const [min , setMin] = useState(0);
  const [newDur , setNewDur] = useState("");
  
  
     useEffect (()=>{
      const width = window.innerWidth ; 
     
      if(width <= 600 ){

        setWidth((width)+ "px" );
        setImgWidth((width-20)+ "px" );
        setImgHeight(((width*1.4)-20)+ "px" );
      }else if(width <= 768 ){

       setWidth((width/2)+ "px" );
       setImgWidth((width/2-20)+ "px" );
       setImgHeight(((width*1.4)/2-20)+ "px" );
      }else if(width <= 1024){

        setWidth((width/3)+ "px" );
        setImgWidth((width/3-20)+ "px" );
        setImgHeight(((width*1.4)/3-20)+ "px" );
      }else if(width <= 1240){

        setWidth((width/4)+ "px" );
        setImgWidth((width/4-20)+ "px" );
        setImgHeight(((width*1.4)/4-20)+ "px" );
      }else if(width > 1240 ){

        setWidth((width/5)+ "px" );
        setImgWidth((width/5-20)+ "px" );
        setImgHeight(((width*1.4)/5-20)+ "px" );
      } 
      
      var duration = Number(props.tDur);
      var hour = Math.floor(duration / 3600);
      var min = Math.floor(duration % 3600 / 60);      

      var sHour = hour > 0 ? hour + (hour == 1 ? "Hr " : "Hrs ") : "";
      var sMin = min > 0 ? min + (min == 1 ? "Min" : "Mins") : "";
      setNewDur(sHour + sMin);

     },[width]);
     const tempH = (width*0.6 -20) + "px" ;
     
     

       return(
         <div>
         <Link class="textDeco" to={{ pathname:"/ItemData", state:{id : props.id } }} >
          <div className="card_container"   style={ { width: width  } } >
              <div className="card_body"  style={{ width: imgWidth , height:imgHeight }}>
                <div className="card_img_con" style={ { width: imgWidth,height:imgHeight} }>  
                    <img className="card_img " style={{ width: imgWidth , height:imgHeight }}  src={props.img}></img>
                </div>
               
                <div className="card_details">
                    <div className="card_details_lang"> {props.lang}  </div>
                    {/* <div className="card_details_dur" > {newDur}</div> */}
                </div>
              </div>
              <div className="card_desc">
                {props.title}
                <div className="bookPublisher"> Publisher :  {props.Publisher} </div>
                <div className="bookPrice">₹{props.price} </div>
              </div>
          </div>
          </Link>
          </div>
       )
  }
export default SliderData;