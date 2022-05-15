import React from 'react';
import Arret from './Arret';
import Departtardive from './Departtardive';
import Kilometrage from './Kilometrage';
import Retourprecosse from './Retourprecosse';

const Performance = () => {
    return (
        <div>
            <Kilometrage/>
            <Arret/>
            <Departtardive/>
            <Retourprecosse/>
        </div>
    );
};

export default Performance;