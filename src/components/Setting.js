import React from 'react';
import { useForm } from "react-hook-form";

const styleSetting={
    background: '#A9A9A9',
   
}

const Setting = () => {
    const { register, handleSubmit } = useForm();
    const handleRegistration = (data) => {
        console.log(data)
    };
    const form1 = <div style={styleSetting}>
                    <div>
                        <h2>Parametre</h2>
                    </div>
                    <form onSubmit={handleSubmit(handleRegistration)}>
                        <div>
                            <select name="localistion" {...register('cars')} >
                                <option value="geographie">Selectionner la geographie</option>
                                <option value="Vehicule">Vehicule</option>
                                <option value="Agence">Agence</option>
                                <option value="Zone">Zone</option>
                                <option value="National">National</option>
                            </select>
                            
                            <select name="periode" {...register('periode')} >
                                <option value="geographie">Selectionner la periodicité</option>
                                <option value="Jour">Jour</option>
                                <option value="Semaine">Semaine</option>
                                <option value="Mois">Mois</option>
                                <option value="Trimestre">Trimestre</option>
                            </select>
                        </div>
                        <label>{}</label>
                        <div>
                            <input type="datetime-local" name="begindate" {...register('begindate')}/>
                            <input type="datetime-local" name="dateend" {...register('dateend')}/>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
    return (
        form1
    );
};

export default Setting;