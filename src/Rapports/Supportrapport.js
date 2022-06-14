import React, { useState } from 'react';
import Excesvitesse from '../components/Excesvitesse';

const Supportrapport = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <h1>Rapport  Exces de vitesse - Du {date.toDateString()} Au {date.toTimeString()}</h1>
            <Excesvitesse/>
        </div>
    );
};

export default Supportrapport;