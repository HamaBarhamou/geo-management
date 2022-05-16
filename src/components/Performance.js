import React from 'react';
import Arret from './Arret';
import Departtardive from './Departtardive';
import Kilometrage from './Kilometrage';
import Retourprecosse from './Retourprecosse';

const Performance = () => {
    return (
        <div>
            <h2>Performance</h2>
            <div>
                <Kilometrage/>
                <Arret/>
            </div>
            <div>
                <Departtardive/>
                <Retourprecosse/>
            </div>
        </div>
    );
};

export default Performance;