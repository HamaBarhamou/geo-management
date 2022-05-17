import React from 'react';
import logo from '../images/logo.png';

const HeadStyle={
    height: '60px',
    display: 'flex',
}

const Head = () => {
    return (
        <div style={HeadStyle}>
            <h3>head</h3>
            <img src={logo} /> 
        </div>
    );
};

export default Head;