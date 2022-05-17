import React from 'react';
import Comportementconduite from './Comportementconduite';
import Conduitetime from './Conduitetime';
import Deplacementnonautoriser from './Deplacementnonautoriser';
import Excesvitesse from './Excesvitesse';

const container2 ={
    /*display: 'flex',*/
    height: '100px',
    whdth: '50%'
}

const styleSecurity={
    display: 'flex'
}

const Security = () => {
    return (
        <div style={styleSecurity}>
            <h2>Security</h2>
            <div style={container2}>
                <Deplacementnonautoriser/>
                <Excesvitesse/>
            </div>
            <div style={container2}>
                <Conduitetime/>
                <Comportementconduite/>
            </div>
        </div>
    );
};

export default Security;