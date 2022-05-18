/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Home.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/05/16 21:31:36 by Barhamou          #+#    #+#             */
/*   Updated: 2022/05/18 12:53:50 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, {useState} from 'react';
import Body from '../components/Body';
import Head from '../components/Head';
import Onglet from '../components/Onglet'
import Setting from '../components/Setting';
import '../styles/App.scss';

const styleGlobale={
    margin: '10px',
    paddingTop: 5,
    background:'#C0C0C0',
    margin: '1%',
    left: '1%'
}
  
const Home = () => {
    const [etat, setEtat] = useState(false);
    const etatfunction = () =>{
        setEtat(!etat);
    }

    if(etat)
    {
        return (
            <div style={styleGlobale}>
                <Head/>
                <Onglet/>
                <Setting/>
                <button onClick={etatfunction} >Generer le rapport</button>
                <Body/>
            </div>
        );
    }
    else
    {
        return (
            <div style={styleGlobale}>
                <Head/>
                <Onglet/>
                <Setting/>
                <button onClick={etatfunction} >Generer le rapport</button>
            </div>
        );
    }
    
};

export default Home;