import React from 'react';
import logo from '../images/logo.png';
import email from '../images/email.png';
import etoile from '../images/etoile.jpeg';
import message from '../images/message.png';
import pays from '../images/pays.jpeg';
import profile from '../images/profile.png';
import recherche from '../images/recherche.jpeg';
import valider from '../images/valider.png';

const HeadStyle={
    height: '60px',
    display: 'flex',
    background: 'green'
}

const Head = () => {
    return (
        <div style={HeadStyle}>
            <img src={valider}/>
            <img src={message}/>
            <img src={email}/>
            <img src={etoile}/>
            <img src={logo} /> 
            <img src={pays}/>
            <img src={recherche}/>
            <img src={profile}/>
        </div>
    );
};

export default Head;