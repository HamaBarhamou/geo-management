import React, { useState, Component, useContext } from 'react';
import { useForm } from "react-hook-form";
import Select from 'react-select'
import Head from '../components/Head';
import Onglet from '../components/Onglet';

const styleGlobale={
    margin: '10px',
    paddingTop: 5,
    //background:'#C0C0C0',
    background:'#f8f9fd',
    margin: '1%',
    left: '1%',
    width: '98%',
}

const styleSetting={
    background: '#A9A9A9',
    width: '98%',
    margin: 10
}


const Rapports = () => {

    const { register, handleSubmit } = useForm();
    const handleRegistration = (data)=>{
        //console.log(data);
        // introgation de l'api
        if (data.select === "General")
        {
            console.log("generale")
        }

        if (data.select === "ConduiteTime")
        {
            console.log("Temps de conduite")
        }

        if (data.select === "Comportement_conducteur")
        {
            console.log("Comportement du conducteur")
        }

        if (data.select === "Kilometrage")
        {
            console.log("Kilometrage parcourrue")
        }

        if (data.select === "Arret")
        {
            console.log("Arret effectuer")
        }

        if (data.select === "DepartTardive")
        {
            console.log("Depart Tardive")
        }

        if (data.select === "Retour_precosse")
        {
            console.log("Retour precosse")
        }

    }

    return (
        <div style={styleGlobale}>
            <Head/>
            <Onglet/>
            <div style={styleSetting}>
                <div style={{color: 'white',fontWeight: 900}}>
                    <h2>Rapports instantanés</h2>
                </div>
                <form onSubmit={handleSubmit(handleRegistration)} style={{width: '98%'}}>
                    <div style={{display:'flex',margin:20,width:'100%'}}>
                    <select name="pets" {...register('select')}>
                        <option value="">--Please choose an option--</option>
                        <option value="General">Statistique General</option>
                        <option value="ConduiteTime">Temps de Conduite</option>
                        <option value="Comportement_conducteur">Comportement du conducteur</option>
                        <option value="Kilometrage">Kilometrage</option>
                        <option value="Arret">Arret</option>
                        <option value="DepartTardive">Depart tardive</option>
                        <option value="Retour_precosse">Retour precosse</option>
                    </select>

                        <input type="datetime-local" 
                            name="begindate" {...register('begindate')} 
                        />
                        
                        <input type="datetime-local" 
                            name="dateend" {...register('dateend')} 
                        />
                       
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default Rapports;