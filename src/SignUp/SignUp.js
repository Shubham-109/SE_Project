import React from 'react';
import './SignUp.css';

function SignUp(){
    return(
        <div className="signUpData">
                    <h2 className="headText">“The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.”</h2>
           <div className="signUpBox">
               <h2 className="sText" > Create an Account </h2>
               <input className="sInput" placeholder="First Name" ></input> <br/>
               <input className="sInput" placeholder="Last Name" ></input> <br/>
               <input className="sInput" placeholder="Username" ></input> <br/>
               <input className="sInput" placeholder="Password" ></input> <br/>
               <input className="sInput" placeholder="Re-enter Password" ></input> <br/>
               <input className="sInputButton" type="Button" value="Register" ></input>
           </div>
        </div>
    );
}
export default SignUp;