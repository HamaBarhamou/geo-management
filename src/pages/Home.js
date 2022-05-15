import React from 'react';
import Body from '../components/Body';
import Head from '../components/Head';
import Onglet from '../components/Onglet'
import Setting from '../components/Setting';

const Home = () => {
    return (
        <div>
            <Head/>
            <Onglet/>
            <Setting/>
            <Body/>
        </div>
    );
};

export default Home;