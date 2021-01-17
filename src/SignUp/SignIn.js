import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.css'
import { Switch ,Route , Redirect} from 'react-router-dom';


function SignIn(){
    const [data , setData] = useState(null);
    const [user,setUser] =useState("");
    const [pass,setPass] =useState("");
    const [auth,setAuth] =useState(false);
    const [fname,setFname] =useState("");
    const [lname,setLname] =useState("");
    const [img,setImg] =useState("");
    const [id,setId] =useState("");

    const handleChangeU=(e)=>{
           setUser(e.target.value);
           console.log(e.target.value)
    }
    const handleChangeP=(e)=>{
        setPass(e.target.value);
        console.log(e.target.value)
 }
    const handleSignIn=()=>{
        async function getData(){
            const res = await axios.get(`http://localhost:80/SignIn.php?u=` +user +`&p=`+pass);
             
            setData(res.data.map( res=>{ 
                          setAuth(true);
                          console.log(res.first_name);
                setFname(res.first_name);
                setLname(res.last_name);
                setImg(res.image_path);
                setId(res.user_id);
                alert("Welcome " + res.first_name);
                        //    return <div>
                        //           <div>{res.first_name}</div>
                        //           <div>{res.last_name}</div>
                        //           <div><img src={res.image_name} /> </div>
                        //     </div> 
                        
                        
                          }));
          }   
          getData();
          
    }

    return(
        <div className="signInData">
            <h2 className="headText">“The only true wisdom is in knowing you know nothing.”</h2>
           <div className="signInBox">
               <h2 className="sText" > Sign In </h2>
               <input className="sInput" placeholder="Username" onChange={handleChangeU} value={user} name="username"></input> <br/>
               <input className="sInput" placeholder="Password" onChange={handleChangeP} value={pass}  name="pass" ></input> <br/>
               <input className="sInputButton" type="Button" onClick={handleSignIn} value="Sign In" ></input>
           </div>
           
           {/* { auth ? <Redirect to={{
                                        pathname: '/Home',
                                        state: { fname:fname }
                                    }} /> : "" } */}
          </div>
    );
}
export default SignIn;