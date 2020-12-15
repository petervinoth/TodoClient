import React,{useContext,useState,useEffect} from "react";
import Axios from "axios";
import {loginContext} from "../Context/contextapi";
import "./todo.css";

import {useHistory,Link} from "react-router-dom";
export const Todo=()=>{

    const main=useContext(loginContext);

 const [login,setLogin]=main.login;
 const [userid,setUserid]=main.uid;
 const [title,setTitle]=useState();
 const [item,setItem]=useState([]);

 const history=useHistory();

 const  onsubmit=async(e)=>{
    e.preventDefault();

    const Data={title};

const dats=await Axios.post(`http://localhost:5000/todo/${userid}/add`,Data);

 
//setMessage("submit Successfully ");
console.log(dats); 
history.push('/list');




}



    return (
        <div>
          
           {login?( <div className="todos">
         <div className="container my-5 ">

<p className="text-center font-weight-normal display-4" style={{ color:"black"}}>TodoApp</p>
<div className="d-flex justify-content-center">
<form style={{width:"30%"}} onSubmit={onsubmit}>
<input type="text" className="title" name="title" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)}  className="form-control my-3" required/>
 <div className="d-flex justify-content-center">
 
<button className="btn btn-success px-5">Go!</button>&nbsp;
<button className="btn btn-primary">poo</button>
</div>

</form> 
</div>


</div>
       </div>
           ):(
               <div>
                   <h1>please login!!</h1>
                   <Link to="/login" className="text-center">Login</Link>
    
                   </div>
           )}
       </div>
    )

}