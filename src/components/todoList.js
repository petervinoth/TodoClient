import React,{useContext,useEffect,useState} from "react";
import {loginContext} from "../Context/contextapi";
import "./todolist.css";
import {useHistory,Link} from "react-router-dom";
import axios from "axios";
export const TodoList=()=>{

    const main=useContext(loginContext);
  const [login,setLogin]=main.login;
  const [results,setResults]=useState([]);
  const [upids,setUpids]=main.ids;
  const [updata,setUpdata]=main.ups;
  const [userid,setUserid]=main.uid;
  const history=useHistory();

 
  useEffect(()=>{
    getRecipe();
    
    }, []);
    
    const getRecipe=async()=>{
        const list = await fetch(`http://localhost:5000/todo/${userid}/todos`)
        const ans=await list.json()
        
       setResults(ans.data);
        //console.log(ans);
      
    }

    const updatetitle=async(_id)=>{
      setUpids(_id);
      const getdata=await fetch(`http://localhost:5000/todo/gettitle/${_id}`)
      const datas=await getdata.json()
      setUpdata(datas);
      history.push('/update');
     // console.log(updata)



    }

    const deletedata=async(_id)=>{
      try {
         const info= await axios.delete(`http://localhost:5000/todo/delete/${_id}`); 
        // const infos=await info.json()
        history.push('/todo');

         // props.history.push("/articles"); 
        } catch(error) {
          console.error(error);
        }
      }
  

    return(
  <div>      
    {login?(  <div className="listing">
        <p className="text-center font-weight-normal display-4" style={{ color:"black"}}>Todo List</p>

      <div className="list">
       
       <center>  <table className="center">
     <thead>
       <tr>
        
         <th style={{ color:"white"}}>Title</th>
         <th style={{ color:"white"}}>Action</th>
       </tr>
     </thead>
     <tbody>
     
                
                  {results.map(user=>(
                    <tr key={user._id}>
                    <td>{user.title}</td>
                        <td>
                    <button onClick={() => updatetitle(user._id)}  className="btn btn-outline-success">Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                  
                    <button  onClick={() =>{if(window.confirm('Are you sure to delete this record?')) {deletedata(user._id)};}} className="btn btn-outline-danger">Delete </button>
               
                
                  </td>
                </tr>
                
              ))}
              
         
           
          
   
           </tbody>
        
          </table>
          </center> 
         
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