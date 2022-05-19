import React from 'react';
import Security from './Security';
import Performance from './Performance';

const styleBody={
    /*display: 'flex'*/
    /*margin: '3%',
    left: '3%',*/
    /*right: '3%'*/
    /*bottom: '3%'*/
    background: '#C0C0C0'
}

const Body = () => {
    return (
        <div style={styleBody}>
            <Security/>
            <Performance/>
        </div>
    );
};

export default Body;