import React from 'react';
import Comportementconduite from './Comportementconduite';
import Conduitetime from './Conduitetime';
import Deplacementnonautoriser from './Deplacementnonautoriser';
import Excesvitesse from './Excesvitesse';

const Security = () => {
    return (
        <div className="container1">
            <h2>Security</h2>
            <div className="container2">
                <Deplacementnonautoriser/>
                <Excesvitesse/>
            </div>
            <div className="container3">
                <Conduitetime/>
                <Comportementconduite/>
            </div>
        </div>
    );
};

export default Security;