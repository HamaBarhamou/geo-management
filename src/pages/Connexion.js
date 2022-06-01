/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Connexion.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/05/16 21:30:49 by Barhamou          #+#    #+#             */
/*   Updated: 2022/06/01 15:46:25 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useState,useContext,useEffect } from "react";
import { Navigate } from 'react-router-dom';
import '../styles/App.scss';
import { UserContext } from "../App";


const Connexion = () => {
    
    const {userdata,updateData,proxy} = useContext(UserContext)
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [ret,setRet] = useState(0)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

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
          setIsLoaded(true)
          
        })
        .then((error)=>{
          setError(error)
        });

      
      
      // Compare user info
      if (isLoaded) {
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
            {isLoaded ?  <Navigate to="/home"  />:renderForm}
      </div>
      <h1>{isLoaded}</h1>
    </div>
  );
};

export default Connexion;