import React,{Component,useState, useRef, useEffect} from 'react';
import './Slider.css';
import SliderData from './SliderData';
import axios from 'axios';

function Slider(props){

    const ref = useRef(null);
    const width = window.innerWidth ;
    const [data,setData] =useState("");

    useEffect(()=>{
      async function getData(){
        const res = await axios.get('https://india-time.online/fetchData.php?id='+props.id ) ;
        
        setData(res.data.map( res=>{ 
          return(
            <SliderData id={res.id} title={res.title} lang={res.lang} Publisher={res.publisher} price={res.price} img={res.image} />
              )
            })
            )
      }   
      getData();
    })
   
      
    const handleScrollPre = () =>{
        ref.current.scrollLeft += -(width );
    }
    const handleScrollNext = () =>{
        ref.current.scrollLeft +=   (width);
    }  
    
        return(
            <div className="height">
                <div className="marginV" ><span className="courses"> {props.t} </span></div>
                <div className="relative">
                    <div className="slider_container" ref={ref} >

                    {data    }
                    
                    </div>
                    <div className="slide_arrow_prev" onClick={handleScrollPre} > <i className="fas fa-angle-left" ></i>  </div>
                    <div className="slide_arrow_next" onClick={handleScrollNext} >  <i className="fas fa-angle-right" ></i> </div>
                </div>
            </div>
        )
   
}
export default Slider;