/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/05/14 20:07:57 by Barhamou          #+#    #+#             */
/*   Updated: 2022/06/01 20:02:38 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Connexion from "./pages/Connexion";
import Home from "./pages/Home";
import {useState,createContext} from 'react';


export const UserContext = createContext();

function App() {

  const [userdata,setUserdata] = useState({"userName":""})
  const [datasetting,setDatasetting] = useState({})
  const proxy = "https://sheltered-depths-77817.herokuapp.com/"

  const updateData = (data) =>{
    setUserdata(data)
  }

  const updatedatasetting = (data) =>{
    setDatasetting(data)
  }

  return (
    <UserContext.Provider value={{userdata,updateData,proxy,datasetting,updatedatasetting}}>   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Connexion/>} />
          <Route path= "/about" element={<About />} />
          <Route path= "/home" element={<Home />} /> 
          <Route path= "/trackergps_fontend" element={<Connexion />} /> 
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
