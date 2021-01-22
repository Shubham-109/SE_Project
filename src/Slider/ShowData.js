import React, { useEffect ,useState ,compo } from 'react';
import './ShowData.css';
import axios from 'axios';

function ShowData(props){
    const [data , setData] = useState("");
    const [id,setId] = useState( {id : props.id });
    const [title,setTitle] =useState("");
    const addToCart=()=>{
        alert(" Sign In to purchase an Item .");
    }
    useEffect( ()=>{
        async function getData(){
            const res = await axios.get('https://india-time.online/fetchItemData.php?id='+props.id ) ;
            console.log("Data : " + res.data); 
            
            
            setData(res.data.map( res=>{ 
                    setTitle(res.title);
                             return(<div className="data" >
                                        <div className="dataL">
                                            <img className="dataImg" src={res.image} ></img>
                                        </div>
                                        <div className="dataR">
                                            <div className="dataTitle">{res.title}</div>
                                            <div className="dataPrice"> ₹{res.price }</div>
                                            <div className="dataBtns" > 
                                                <div> <button className="dataBtn1" onClick={addToCart} > <i class="fa fa-shopping-cart mr" aria-hidden="true"></i> Add to Cart</button> </div>
                                                <div> <button className="dataBtn2" onClick={addToCart}><i class="fa fa-bolt mr" aria-hidden="true"></i> Buy Now </button> </div>
                                            </div>
                                            <div className="highlights">
                                                Highlights:
                                                <ul className="grey">
                                                    <li> Language  <span className="white" >  : { " " + res.lang } </span>  </li>
                                                    <li> Binding   <span className="white" >  : { " " + res.binding } </span>  </li>
                                                    <li> Genre     <span className="white" >  : { " " + res.genre } </span>  </li>
                                                    <li> Publisher <span className="white" >  : { " " + res.publisher } </span>  </li>
                                                    <li> ISBN      <span className="white" >  : { " " + res.isbn } </span>  </li>
                                                    <li> Pages     <span className="white" >  : { " " + res.pages } </span>  </li>
                                                </ul>
                                            </div>
                                        </div>
                             </div>)
                          }));
          }   
          getData();
    },[] )

    return(
        <div className="sData" >
           {data}
        </div>
    )
}

export default ShowData;