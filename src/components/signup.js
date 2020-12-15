import React, { useState } from "react";
import Axios from "axios";





import {useHistory,Link} from "react-router-dom";
import "./signup.css";
export const Signup=()=>{

    const [fullName,setFullName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [message,setMessage]=useState();
   const history=useHistory();
   
    const  onsubmit=async(e)=>{
        e.preventDefault();

        const newuser={fullName,email,password};

   const users=await Axios.post("http://localhost:5000/api/register",newuser);
  setMessage("Register Successfully ");
    //console.log(users);

    history.push("/login");

    }

    return(
        <div>
            <div className="dddd">
           
         <div>
         <div className="container my-5 ">

<p className="text-center font-weight-normal display-4" style={{ color:"black"}}>SignUp</p>
<div className="d-flex justify-content-center">
<form style={{width:"50%"}} onSubmit={onsubmit}>
<input type="text" className="names" name="name" placeholder="Name" onChange={(e)=>setFullName(e.target.value)}  className="form-control my-3" required/>
<input type="text" name="email" placeholder="Email"onChange={(e)=>setEmail(e.target.value)} className="form-control my-3" required/>
<input type="text" name="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}  className="form-control my-3" required/>
  <div className="d-flex justify-content-center">
 
<button className="btn btn-success px-5">submit</button>
</div><br></br>
<div className="d-flex justify-content-center">
<Link to="/login" className="text-center">Already a User?Login</Link>
</div>
</form>
</div>
</div>
</div>
</div>
</div>

         

       
    )
};