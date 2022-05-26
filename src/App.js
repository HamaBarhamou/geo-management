/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/05/14 20:07:57 by Barhamou          #+#    #+#             */
/*   Updated: 2022/05/26 23:39:41 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Connexion from "./pages/Connexion";
import Home from "./pages/Home";
import {useState,createContext} from 'react';
import { ReactDOM } from "react";

export const UserContext = createContext();

function App() {

  const [userdata,setUserdata] = useState({"user":"user data of initiale"})

  const updateData = (data) =>{
    setUserdata(data)
  }

  return (
    <UserContext.Provider value={{userdata,updateData}}>
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
