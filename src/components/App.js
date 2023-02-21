import "../styles/App.css";
import User from "../models/user";



import React, { useState } from "react";



const App = () => {

  const[name,setName] = useState("");
  const[name1,setName1] = useState("");
  const[add , setAdd] = useState([]);
  const[email,setEmail] = useState("");
  const[email1,setEmail1] = useState("");
  const[passWord,setPassWord] = useState("");
  const[loginPassWord,setLoginPassWord] = useState("");
  const[confirmPassWord,setConfirmPassWord] = useState("");
  const[show , setShow] = useState(true);

  function signUp(e){
    e.preventDefault();
    console.log(passWord);
    
    if(passWord===confirmPassWord){
      let list ={
        id:Date.now(),
        name:name,
        email:email,
        passWord:passWord
      }
       
      setAdd([...add , list]);
      setName("");
      setEmail("");
      setPassWord("");
      setConfirmPassWord("");
      setName1(name);
    }
   

  }

  function login(){
    
    console.log(loginPassWord);
    
   add.map((item)=>{
    
    if(item.passWord===loginPassWord){
   console.log("hello");
   setShow(false);
    }
 })

  }

  function logout(){

setShow(true);

  }

  return (
    <div id="main">
      <table id="all-users">
      <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
         {add.map((item)=> <tr key={item.id}>  <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.passWord}</td>
          </tr>)} 
           
        </tbody>
      </table>

    
       
        
        {show ? (  <div>
      <form className="signup-form" type="submit">
          <label htmlFor="name">Name</label>
          <input type="text" name="signupName" id="signupName" value={name} onChange={(e)=>setName(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input type="email" name="signupEmail" id="signupEmail" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="signupPassword" id="signupPassword" value={passWord} onChange={(e)=>setPassWord(e.target.value)}/>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            value={confirmPassWord}
            onChange={(e)=>setConfirmPassWord(e.target.value)}
            type="password"
            name="signupConfirmPassword"
            id="signupConfirmPassword"
          />
          <button id="signup-button" onClick={signUp}>Signup</button>
        </form>

        <form className="login-styles" type="submit">
          <label htmlFor="loginEmail">Email</label>
          <input id="loginEmail" name="loginEmail" type="email" value={email1} onChange={(e)=>setEmail1(e.target.value)}/>
          <label htmlFor="loginPassword">Password</label>
          <input id="loginPassword" name="loginPassword" type="password" value={loginPassWord} onChange={(e)=>setLoginPassWord(e.target.value)} />
          <button id="login-button" onClick={(e)=>{e.preventDefault();login()}}>Login</button>
        </form>

      </div> ) 
        : 
        ( <div>
        <h3 id="username">{name1}</h3>
        <h3 id="email">{email1}</h3>
        <button id="logout-button" onClick={logout}>Logout</button>
      </div>)}

       
        
     

     
    </div>
  );
};

export default App;
