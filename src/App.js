/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/05/14 20:07:57 by Barhamou          #+#    #+#             */
/*   Updated: 2022/06/11 23:38:05 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Connexion from "./pages/Connexion";
import Home from "./pages/Home";
import {useState,createContext} from 'react';
import Rapports from "./pages/Rapports";
import Clients from "./pages/Clients";
import Parametrage from "./pages/Parametrage";


export const UserContext = createContext();

function App() {

  const [userdata,setUserdata] = useState({"userName":""})
  const [datasetting,setDatasetting] = useState({})
  const proxy = "https://sheltered-depths-77817.herokuapp.com/"

  const alarmType = {
    1: "Vibration alarm",
    2: "Power off alarm",
    3: "Low power alarm",
    4: "SOS SOS",
    5: "Speeding alarm",
    6: "Fence alarm (platform determination)",
    7: "Displacement alarm",
    8: "Low power alarm",
    9: "Out area alarm (terminal)",
    10: "Detach alarm",
    11: "Light alarm",
    12: "Magnetic induction alarm",
    13: "Anti-desassembly alarm",
    14: "Bluetooth alarm",
    15: "Signal Shield Alarm",
    16: "False base stattion alarm",
    17: "Shortlist alarm (platform judgment)",
    18: "Shortlist alarm (terminal determination)",
    19: "Fence alarm (terminal determination)",
    20: "Door open alarm",
    21: "Fatigue driving",
    22: "Alarm at 2",
    23: "Out of two alarm",
    24: "Timeout Warning for two Charge",
    25: "Terminal off-line alarm",
    26: "Shortlisted Alert (Wind Control)",
    27: "Fence alarm (Wind Control)",
    28: "Electronic fence alarm (platform, terminal and wind control)",
    29: "Out of the elecronique fence alarm (platform, terminal and wind control)",
    30: "Oil alert",
    31: "ACC alarm",
    32: "ACC off alarm"
  }

  const updateData = (data) =>{
    setUserdata(data)
  }

  const updatedatasetting = (data) =>{
    setDatasetting(data)
  }

  return (
    <UserContext.Provider value={{userdata,updateData,proxy,datasetting,updatedatasetting,alarmType}}>   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Connexion/>} />
          <Route path= "/about" element={<About />} />
          <Route path= "/home" element={<Home />} /> 
          <Route path= "/trackergps_fontend" element={<Connexion />} /> 
          <Route path= "/rapport" element={<Rapports/>} />
          <Route path= "/clients" element={<Clients/>} />
          <Route path= "/parametrage" element={<Parametrage/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
