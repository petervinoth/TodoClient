import React, { useContext,useEffect,useRef } from "react";
import {Link,useHistory} from "react-router-dom";
import "./home.css";
import {loginContext} from "../Context/contextapi";
import Typed from "typed.js";



export const Home=()=>{

  const history=useHistory();

 const main=useContext(loginContext);

 

   const typeTarget = useRef(null);

   useEffect(() => {
     const typed = new Typed(typeTarget.current, {
       strings: ["<i>Welcome</i> our TodoApp", "Do Something.."],
       typeSpeed: 40,
     });
 
     return () => {
       typed.destroy();
     };
   }, []);
 

    return(
      <div>
      <div className="home"><br></br><br></br><br></br><br></br><br></br>
         
      <div className="w3-display-left w3-padding-large">
  <p className="text-left font-weight-normal display-4" style={{ color:"white"}}><span className="type" ref={typeTarget}></span></p><br></br><br></br><br></br>
  </div>
  &nbsp;<h3 className="info"><b>Todo List</b> One of the fundamental tools for time management is that,<br></br>&nbsp;&nbsp;&nbsp; list of things you need to get done.</h3>
 
  </div>
      </div>
    )
}