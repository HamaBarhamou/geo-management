/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Head.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/05/18 10:52:55 by Barhamou          #+#    #+#             */
/*   Updated: 2022/06/01 19:47:11 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useContext } from 'react';
import logo from '../images/logo.png';
import email from '../images/email.png';
import etoile from '../images/etoile.jpeg';
import message from '../images/message.png';
import pays from '../images/pays.jpeg';
import profile from '../images/profile.png';
import recherche from '../images/recherche.jpeg';
import valider from '../images/valider.png';
import { UserContext } from '../App';


const styleT={
    height: '25px',
}

const Head = () => {
    const {userdata} = useContext(UserContext)
    return (
        <div style={{display:'flex',padding:5,justifyContent:'space-between'}}>
            <div style={{display:'flex',width:'15%'}}>
                <div style={{padding:10}}><img src={valider} style={styleT}/></div>
                <div style={{padding:10}}><img src={message} style={styleT}/></div>
                <div style={{padding:10}}> <img src={email} style={styleT}/></div>
                <div style={{padding:10}}><img src={etoile} style={styleT}/></div>
            </div>
            <div >
                <img src={logo} style={{height:'60px'}}/> 
            </div>
            <div style={{width:'15%',justifyContent:'flex-end',display:'flex'}}>
                <div style={{padding:10}}><img src={pays} style={styleT}/></div>
                <div style={{padding:10}}><img src={recherche} style={styleT}/></div>
                <div style={{padding:10}}><img src={profile} style={styleT}/> {userdata.userName} </div>
            </div>
        </div>
    );
};

export default Head;