import React, {useState} from 'react';
import Body from '../components/Body';
import Head from '../components/Head';
import Onglet from '../components/Onglet'
import Setting from '../components/Setting';
import '../styles/App.scss';

const Home = () => {
    const [etat, setEtat] = useState(false);
    const etatfunction = () =>{
        setEtat(!etat);
        console.log(etat);
    }

    if(etat)
    {
        return (
            <div>
                <Head/>
                <Onglet/>
                <Setting/>
                <button onClick={etatfunction} >Generer le rapport</button>
                <Body/>
            </div>
        );
    }
    else
    {
        return (
            <div>
                <Head/>
                <Onglet/>
                <Setting/>
                <button onClick={etatfunction} >Generer le rapport</button>
            </div>
        );
    }
    
};

export default Home;