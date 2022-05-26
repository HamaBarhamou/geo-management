import React from 'react';
import rapport from '../images/rapport.jpeg'
import charts from '../images/charts.png'
import clients from '../images/clients.png'
import geomax from '../images/geomax.jpeg'
import parametrage from '../images/parametrage.png'
import { Link } from 'react-router-dom';
import { hover } from '@testing-library/user-event/dist/hover';

const styleT={
    height: '15px',
}

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black',
};

const Onglet = () => {
    return (
        <div style={{background:'white',margin:10}}>
            <nav style={{display:'flex'}}>
                <div> 
                    <img src={rapport} style={styleT}/>
                    <Link to="/home" style={linkStyle}>Rapport</Link>  
                </div>
                <div> 
                    <img src={charts} style={styleT}/>
                    <Link to="/home" style={linkStyle}>Charts</Link>  
                </div>
                <div> 
                    <img src={clients} style={styleT}/>
                    <Link to="/home" style={linkStyle}>Clients</Link>              
                </div>
                <div>
                    <img src={geomax} style={styleT}/> 
                    <Link to="/home" style={linkStyle}>Geomax</Link>               
                </div>
                <div>
                    <img src={parametrage} style={styleT}/> 
                    <Link to="/home" style={linkStyle}>Parametrage</Link>       
                </div>
            </nav>
        </div>
    );
};

export default Onglet;