import React, { useContext } from 'react';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import {loginContext} from "./Context/contextapi";
import {Home} from "./components/home";
import {Logins} from "./components/login";
import {Signup} from "./components/signup";
import {Todo} from "./components/Todo";
import {Homes} from "./components/homes";
import {TodoList} from "./components/todoList";
import {Edit} from "./components/editTitle";



import './App.css';



function App() {

  
 
  const main=useContext(loginContext);
  const [login,setLogin]=main.login;
  const [currentuser,setCurrentuser]=main.user;
  const [user,setUser]=main.User;
  const [upids,setUpids]=main.ids;
  const [updata,setUpdata]=main.ups;
  const [userid,setUserid]=main.uid;
  
 
  
  let bool=true
  let log=false
  if(login===true){
    bool=false
    log=true;
  }

  const logs=()=>{
    setLogin(false);
    setUser(false);
    setCurrentuser();
    setUpids();
    setUserid();
    setUpdata();
   
   

  }
  
  

  return (
    
       <div>
          
     <BrowserRouter>
     <nav className="navbar navbar-expand-lg navbar-light bg-dark">
       <a className="navbar-brand" href="#"><h1 className="head">TODO APP</h1></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">

    <li className="nav-item">
    {login?  <Link to="/todo" className="nav-link font-weight-bold text-warning">Todo</Link>:null}
     </li>
     
      <li className="nav-item">
     {bool? <Link to="/signup" className="nav-link font-weight-bold text-warning">Signup</Link>:null}
     </li>
     <li className="nav-item">
    {bool?  <Link to="/login" className="nav-link font-weight-bold text-warning">login</Link>:null}
     </li>

     <li className="nav-item">
    {log? <Link to="/" className="mt-1"><button className="btn btn-sm btn-warning font-weight-bold ml-2 border border-dark logout px-3 font-italic" onClick={logs}>Log Out</button></Link>:null}
   
     </li>
    
     
    </ul>
  </div>
</nav>
    
   
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Homes}/>
        <Route  path="/login" component={Logins}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/todo" component={Todo}/>
        <Route exact path="/list" component={TodoList}/>
        <Route exact path="/update" component={Edit}/>
       

        
      
        
                  
      </Switch>
  
    </BrowserRouter>

      </div>
  );
}

export default App;
