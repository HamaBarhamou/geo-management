import React from 'react';
import Arret from './Arret';
import Departtardive from './Departtardive';
import Kilometrage from './Kilometrage';
import Retourprecosse from './Retourprecosse';

const container2 ={
    /*display: 'flex',*/
    height: '100px',
    whdth: '50%'
}

const stylePerformance={
    display: 'flex'
}

const Performance = () => {
    return (
        <div style={stylePerformance}>
            <h2>Performance</h2>
            <div style={container2}>
                <Kilometrage/>
                <Arret/>
            </div>
            <div style={container2}>
                <Departtardive/>
                <Retourprecosse/>
            </div>
        </div>
    );
};

export default Performance;