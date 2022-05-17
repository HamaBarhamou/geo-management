/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/05/14 20:07:57 by Barhamou          #+#    #+#             */
/*   Updated: 2022/05/17 12:27:22 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Connexion from "./pages/Connexion";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connexion/>} />
        <Route path= "/about" element={<About />} />
        <Route path= "/home" element={<Home />} /> 
        <Route path= "/trackergps_fontend" element={<Connexion />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
