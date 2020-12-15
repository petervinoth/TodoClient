import React,{useContext,useEffect,useState} from "react";
import {loginContext} from "../Context/contextapi";
import {useHistory,Link} from "react-router-dom";
import {patch,get } from 'axios';
import "./edit.css";

export const Edit=()=>{
    const main=useContext(loginContext);
  const history=useHistory();
    const [login,setLogin]=main.login;
    const [upids,setUpids]=main.ids;
    const [updata,setUpdata]=main.ups;
    const initialState = { 
        title:'', 
      }
    const [article, setArticle] = useState(initialState)

    useEffect(()=>{
        getArticle();
        
        }, []);
    
        const getArticle=async()=>{
          
    
          const response = await get(`http://localhost:5000/todo/gettitle/${upids}`);
          //const fina=await response.json()
         
          setArticle(response.data);
    
        //  console.log(article);   
    
        }

        function onsubmit(event) {
            event.preventDefault();
            async function updateArticle() {
            //  console.log(article);
              try {
              const details=  await patch(`http://localhost:5000/todo/update/${upids}`, article);
              
              console.log(details);
              history.push('/list');
                        
              } catch(error) {
                console.log(error);
              }
            }
            updateArticle();
          }
  
           function handleChange(event) {
      setArticle({...article, [event.target.name]: event.target.value})
     // console.log(event.target.value);
    }

    return(
        <div>
 {login?(<div className="edit">
           
        
           <div className="container my-5 ">
  
  <p className="text-center font-weight-normal display-4" style={{ color:"black"}}>Update Data</p>
  <div className="d-flex justify-content-center">
  <form style={{width:"30%"}} onSubmit={onsubmit}>
  <input type="text" className="title" name="title" placeholder="Enter Title" value={article.title}  onChange={handleChange}  className="form-control my-3" required/>
   <div className="d-flex justify-content-center">
   
  <button className="btn btn-success px-5">Edit</button>
  </div>
  
  </form> 
  </div>
  
  
  </div>
         </div>):(
             <div>
                 <h1>please login!!</h1>
<Link to="/login" className="text-center">Login</Link>
             </div>
         )}
            </div>


    )
}