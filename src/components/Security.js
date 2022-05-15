import React from 'react';
import Comportementconduite from './Comportementconduite';
import Conduitetime from './Conduitetime';
import Deplacementnonautoriser from './Deplacementnonautoriser';
import Excesvitesse from './Excesvitesse';

const Security = () => {
    return (
        <div>
            <Deplacementnonautoriser/>
            <Excesvitesse/>
            <Conduitetime/>
            <Comportementconduite/>
        </div>
    );
};

export default Security;