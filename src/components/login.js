import React, { useState,useContext } from "react";
import Axios from "axios";
import {useHistory,Link} from "react-router-dom";
import {loginContext} from "../Context/contextapi";
import "./login.css";

export const Logins=()=>{

  const main=useContext(loginContext);
    const [password,setPassword]=useState();
    
    const [email,setEmail]=useState();
    const [currentuser,setCurrentuser]=main.user;
    const [login,setLogin]=main.login;
    const [user,setUser]=main.User;
    const [userid,setUserid]=main.uid;
    
   
  const history=useHistory();
    const submit=async(e)=>{
        e.preventDefault();
            
        try{
        const newuser={email,password};
       
        const response = await fetch("http://todovinoth.herokuapp.com/api/login",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(newuser)
        })
        const result = await response.json()
      //  console.log(result)
        if(result.email==email){
          setLogin(true);
          setUserid(result._id);

          setCurrentuser(result.fullName);
         history.push('/home');
         
        }
        else{
         alert("email & password Invalid..")
        }
        
       
      
       
        
       

            
        

        }
        catch(err){
          console.log(err);
        }
    }

  

    return(
        <div className="ddd">
             
           
            <div className="container my-5 ">

<p className="text-center font-weight-normal display-4" style={{ color:"black"}}>Login</p>
<img className="logo" src="https://www.logolynx.com/images/logolynx/15/1588b3eef9f1607d259c3f334b85ffd1.png" alt=""/>
        
 <div className="d-flex justify-content-center">
       <form style={{width:"50%"}}  onSubmit={submit} >
            <input type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="form-control my-3" required/>

<input type="password" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="form-control my-3" required/>

            
  
  



<div className="d-flex justify-content-center">
 
 <button className="btn btn-success px-5">login</button><br></br>
 </div><br></br>
 <div className="d-flex justify-content-center">
 <Link to="/signup" className="text-center">Not a User?Register</Link>
 </div>
 

</form>
</div>
</div>
</div>


        
    )
};
