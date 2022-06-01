/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Connexion.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/05/16 21:30:49 by Barhamou          #+#    #+#             */
/*   Updated: 2022/06/01 12:45:27 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useState,useContext,useEffect } from "react";
import { Navigate } from 'react-router-dom';
import '../styles/App.scss';
import { UserContext } from "../App";
import {useQuery} from 'react-query';
import { data } from "../components/Comportementconduite";



const Connexion = () => {
    
    const {userdata,updateData,proxy} = useContext(UserContext)
    const [login,setLogin] = useState("");
    const [password,setPassword] =  useState("");
    
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [ret,setRet] = useState(0)

    const errors = {
      uname:"invalid username or password",
      pass:"invalid username or password"
    };

    const handleSubmit = (event) => {
      
      event.preventDefault();

      var { uname, pass } = document.forms[0];
      
      console.log("login: ",uname.value," pass: ",pass.value)

      // interoger l'api avec fech
      const url = proxy+"https://www.whatsgps.com/user/login.do?name="+uname.value+"&password="+pass.value
      fetch(url)
        .then((resp)=>resp.json())
        .then((data)=>{
          console.log(data.data.token)
          // charger les donné dans la store globale
          setRet(data.ret)
          
        })
        .then((error)=>{
          console.log("Error:",error)
        });

      
      
      // Compare user info
      if (ret == 1) {
        setIsSubmitted(true)
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
        setErrorMessages({ name: "pass", message: errors.pass });
      }
    };
  
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
  );

    // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit} >
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

      
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
            {isSubmitted ?  <Navigate to="/home"  />: renderForm}
      </div>
    </div>
  );
};

export default Connexion;