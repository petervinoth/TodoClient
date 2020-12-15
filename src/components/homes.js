import React, { useContext } from "react";
import {Link} from "react-router-dom";
import "./home.css";
import {loginContext} from "../Context/contextapi";


export const Homes=()=>{

 const main=useContext(loginContext);

 const [login,setLogin]=main.login;
   const [currentuser,setCurrentuser]=main.user;


    return(

        <div className="homes">
        {login?( <h1 className="text-center font-weight-normal display-4" style={{ color:"black",}}>welcome {currentuser}</h1>
        ):(
            <div>
                <h1>please login!!!</h1>
                <Link to="/login" className="text-center">login</Link>
                </div>
        )}   
   
        </div>
    )
}