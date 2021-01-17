import React , {Component, useState} from 'react';
import { render } from 'react-dom';
import './Navbar.css';
import MenuListItems from './MenuListItems';
import axios from 'axios';
import Logo from './Logo';
import {Link} from 'react-router-dom';

function Navbar(props){

    // state={ clicked:false , searchActive:false , sValue : "" , list : "" }
    const [clicked ,setClicked] = useState(false);
    const [searchActive,setSearchActive] = useState(false);
    const [list,setList] = useState("");
    const [sValue ,setSValue] = useState("");

    const handleSlideMenu= () =>{
        setClicked(!clicked);
    }
    
    const handleClose = ()=>{
        setClicked(!clicked);   
    }
     
    const handleSearch = () =>{
       setSearchActive(!searchActive);
    }
    const handleSList=(e)=>{
        setSValue(e.target.value);
        console.log(e.target.value);
        handleSignIn();
    } 
    const closeSearchList=()=>{
        setList("");
    }
    const handleSignIn=()=>{
        async function getData(){
            const res = await axios.get(`http://localhost:80/fetchDataList.php?t=` + sValue );
             
            setList(res.data.map( res=>{                          
                          console.log(res.title);                        
                              return <ul>
                                        <Link class="textDeco" to={{ pathname:"/ItemData", state:{id : res.id } }} >
                                        <li>
                                             <img src={res.image}></img> <span> {res.title} </span>
                                        </li>    
                                        </Link>                                   
                                    </ul>
                          }));
          }   
          getData();
          
    }
    
    // const getData=()=>{
    //     const a ={ "t" :"a"};
    //     const res =  axios.get('http://localhost:80/fetchDataList.php' ,a ) ;
    //     console.log(res.data); 
    //     this.setState({ list :  (res.data.map( res=>{ 
    //                                                     console.log(res.title);
    //                                                 })
    //                                                 )
    //                                             })
    //   }   


       
        return(
           <div className="height-auto" >
           <nav className="navbar">
                
                <div className="menu-bars"  onClick={handleSlideMenu} > 
                   
                   <i className={clicked ? 'fa fa-times' : 'fa fa-bars' }  ></i>

                </div>

                <div className="logo"  > <Logo/> </div> 

                <div className="d-input-box"> 
                   
                   <input className="d-input" type="text" onClick={closeSearchList} onChange={handleSList} value={sValue} placeholder="Search for anything..."/> 
                   <i onClick={closeSearchList} className="fa fa-search d-input-search-icon"></i> 
                   <div className="searchList">
                       {list}
                   </div>
                </div>

                 <div className="navRight" >
                     <div> {} <Link className="textDeco" to="/SignUp" > Sign Up </Link> </div>
                     <div> <Link className="textDeco" to="/SignIn" > Sign In </Link> </div>
                 </div>
                
                <div >  <i class="fa fa-search search-icon" onClick={handleSearch} ></i>  </div>
           </nav>
           
           <div className={clicked ? 'slideMenu active' : 'slideMenu' }>
                <div className="slideMenu-container">
                    <div className="menu-list-item">
                        
                        <MenuListItems/>
                    
                    </div>
                </div>

                <div> <i className="fa fa-times slideMenuClose" onClick={handleClose} > </i> </div>
           </div>

           <div className={searchActive ? 'searchDiv active' : 'searchDiv' } >
               <div className="search-container">
                  <i className="fa fa-times close-icon-m" onClick={handleSearch}></i> 
                  <input className="searchInput-m" placeholder="Search for anything..." />
                  <i className="fa fa-search search-icon-m" ></i>
               </div>
           </div>
                    
        </div>    
        );

}

export default Navbar;