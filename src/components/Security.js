import React from 'react';
import Comportementconduite from './Comportementconduite';
import Conduitetime from './Conduitetime';
import Deplacementnonautoriser from './Deplacementnonautoriser';
import Excesvitesse from './Excesvitesse';

const container2 ={
    display: 'flex',
    margin: 30,
    background: '#99ccff'
}

const styleSecurity={
    //height: 'height',
    //width: '100%',
    //background: 'blue'
}

const Security = () => {
    return (
        <div style={styleSecurity}>
            <h2>Security</h2>
            <div style={container2} /*className="graphe1"*/>
                <Deplacementnonautoriser/>
                <Excesvitesse/>
            </div>
            <div style={container2} className="graphe2">
                <Conduitetime/>
                <Comportementconduite/>
            </div>
        </div>
    );
};

export default Security;