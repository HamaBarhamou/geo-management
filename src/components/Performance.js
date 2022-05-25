import React from 'react';
import Arret from './Arret';
import Departtardive from './Departtardive';
import Kilometrage from './Kilometrage';
import Retourprecosse from './Retourprecosse';

const container2 ={
    display: 'flex',
    margin: 30,
}

const stylePerformance={
    
}

const Performance = () => {
    return (
        <div style={{width:'100%'}}>
            <center><h2>Performance</h2></center>
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