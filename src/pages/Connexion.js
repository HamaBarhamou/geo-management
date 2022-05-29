/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Connexion.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/05/16 21:30:49 by Barhamou          #+#    #+#             */
/*   Updated: 2022/05/29 12:11:33 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useState,useContext,useEffect } from "react";
import { Navigate } from 'react-router-dom';
import '../styles/App.scss';
import { UserContext } from "../App";
import {useQuery} from 'react-query';


const fetchUserdata = async () => {
  const res = await fetch(
    //"https://reqres.in/api/users",
    "https://sheltered-depths-77817.herokuapp.com/https://www.whatsgps.com/user/login.do?name=MABUCIGSA&password=a123456",
    /*{
      //mode:'no-cors',
      headers:{
        'Content-Type': 'application/json'
      }
    }*/
    )
  return res.json()
}


const Connexion = () => {
    const {userdata,updateData} = useContext(UserContext)


    const {status,data,error} = useQuery("user",fetchUserdata)
    console.log("status:",status," data:",data," error:",error)

    //const {status,data,error} = useQuery("users",fetchUserdata)
    //console.log("status:",status," data:",data, "error:",error)
    
    
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const database = [
        {
          username: "GPSDEMO",
          password: "a123456"
        },
        {
          username: "user2",
          password: "pass2"
        }
      ];

      const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };


      
      const handleSubmit = (event) => {

        
    
        event.preventDefault();
        
        var { uname, pass } = document.forms[0];
        
        const userData = database.find((user) => user.username === uname.value);
    
        
        
        // Compare user info
        if (userData) {
          if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);
          }
        } else {
          // Username not found
          setErrorMessages({ name: "uname", message: errors.uname });
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
      <form onSubmit={handleSubmit}>
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