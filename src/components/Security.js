import React from 'react';
import Comportementconduite from './Comportementconduite';
import Conduitetime from './Conduitetime';
import Deplacementnonautoriser from './Deplacementnonautoriser';
import Excesvitesse from './Excesvitesse';

const container2 ={
    display: 'flex',
    margin: 30,
    //background: '#99ccff'
}

const Security = () => {
    return (
        <div style={{width:'100%'}}>
            <center><h2>Security</h2></center>
            <div style={container2}>
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