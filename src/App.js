/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/05/14 20:07:57 by Barhamou          #+#    #+#             */
/*   Updated: 2022/05/14 21:19:11 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path= "/about" element = {<About/>} />
        <Route path= "*" element = {<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
