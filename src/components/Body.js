import React from 'react';
import Security from './Security';
import Performance from './Performance';

const styleBody={
    background: '#C0C0C0'
}

const Body = () => {
    return (
        <div style={styleBody}>
            <Security/>
            <Performance/>
            <button>Generer PDF</button>
        </div>
    );
};

export default Body;