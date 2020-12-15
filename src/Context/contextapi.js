import React, { createContext, useState } from "react";

export const loginContext=createContext();


export const Login=(props)=>{
    const [login,setLogin]=useState(false);
    const [currentuser,setCurrentuser]=useState();
  
    const [user,setUser]=useState(false);
    const [upids,setUpids]=useState();
    const [updata,setUpdata]=useState([]);
    const [userid,setUserid]=useState();
   
    
     

    return(
        <loginContext.Provider value={
            {
                login:[login,setLogin],
                user:[currentuser,setCurrentuser],
               
                User:[user,setUser],
                ids:[upids,setUpids],
                ups:[updata,setUpdata],
                uid:[userid,setUserid],
              
            }
        }>
          {props.children}
        </loginContext.Provider>
    )

}

