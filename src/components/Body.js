import React from 'react';
import Security from './Security';
import Performance from './Performance';

const styleBody={
    /*display: 'flex'*/
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