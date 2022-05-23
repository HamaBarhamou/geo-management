/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Setting.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/05/18 10:52:44 by Barhamou          #+#    #+#             */
/*   Updated: 2022/05/23 15:00:05 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useState, Component } from 'react';
import { useForm } from "react-hook-form";
import Select from 'react-select'
import Progressbarre from './Progressbarre';

const styleSetting={
    //background: '#A9A9A9',
    background: 'white',
    //height: 'height',
    width: '100%',
    margin: 10
}

const styleDiv={
    display: 'flex',
    margin: 20
}


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const dataCollection = [
    {
        value: '0',
        label: '',
        collection: []
    },
    {
        value: 'geographie',
        label: 'Selectionner la geographie',
        collection: [
            {value:'Niamey',label:'Niamey'},
            {value:'Zinder',label:'Zinder'},
            {value:'Maradi',label:'Maradi'},
            {value:'Thaoua',label:'Thaoua'}
        ]
    },
    {
        value: 'Vehicule',
        label: 'Vehicule',
        collection: [
            {value:'Voiture',label:'Voiture'},
            {value:'Moto',label:'Moto'},
            {value:'Velo',label:'Velo'},
            {value:'Avion',label:'Avion'}
        ]
    },
    {
        value: 'Agence',
        label: 'Agence',
        collection: [
            {value:'Agence_de_Niamey',label:'Agence de Niamey'},
            {value:'Agence_de_Ouaga',label:'Agence de Ouaga'},
            {value:'Agence_du_Tchad',label:'Agence du Tchad'},
            {value:'Agence1',label:'Agence1'}
        ]
    },
    {
        value: 'Zone',
        label: 'Zone',
        collection: [
            {value:'pk5',label:'pk5'},
            {value:'zone_2',label:'zone_2'},
            {value:'Fontiere_Mali',label:'Fontiere_Mali'},
            {value:'Centre_ville',label:'Centre_ville'}
        ]
    },
    {
        value: 'National',
        label: 'National',
        collection: [
            {value:'Region',label:'Region'},
            {value:'Commune',label:'Commune'},
            {value:'Departement',label:'Departement'},
            {value:'International',label:'International'}
        ]
    }
]


//let collection = dataCollection[0].collection;

const Setting = () => {
    
    const dataCollection2 = [
        {
            id: 'periode',
            title: 'Selectionner la periodicité',
        },
        {
            id: 'Jour',
            title: 'Jour',
        },
        {
            id: 'Semaine',
            title: 'Semaine',
        },
        {
            id: 'Mois',
            title: 'Mois',
        },
        {
            id: 'Trimestre',
            title: 'Trimestre',
        }
    ]

    
    const { register, handleSubmit } = useForm();
    const handleRegistration = (data) => {
        console.log(data);
        /*console.log(dataCollection1[0].collection)
        dataCollection1.id.collection.map(
            (item) =>{console.log(item.title)}
        )*/
    };

    function getIdCollection(data, id)
    {
        for(let i = 0; i < data.length; i++)
            {
                if (id === data[i].value)
                {
                    return (dataCollection[i].collection);
                }
            }
            return ([]);
    }

    const [collection,setColletion] = useState(dataCollection[0].collection);
    //const [collection,setColletion] = useState([]);
    
    const listedynamique = (data) => {
        
        //console.log("avant collection=", collection);
        setColletion(getIdCollection(dataCollection,data.value));
        //console.log("apres collection=",collection);
        
    };
    const Template1 = <div style={styleSetting}>
                            <div >
                                <h2>Parametre</h2>
                            </div>
                          
                                <form onSubmit={handleSubmit(handleRegistration)} >
                                    <div style={styleDiv}>
                                        <Select options={dataCollection} 
                                            placeholder="Selectionner la geographie" 
                                            onChange={listedynamique}
                                            />
                                        <select name='periode'  {...register('periode')}>
                                            {dataCollection2.map(
                                                (item)=> <option key={item.id} value={item.id}>{item.title}</option>
                                            )}
                                        </select>
                                        
                                    </div>
                                    <div>
                                        <select name='dynamique'  {...register('dynamique')}> 
                                            {
                                                collection.map(
                                                    (item)=> <option key={item.value} value={item.value}>{item.label}</option>
                                                )     
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        <input type="datetime-local" name="begindate" {...register('begindate')}/>
                                        <input type="datetime-local" name="dateend" {...register('dateend')}/>
                                    </div>
                                    <div style={styleDiv}>
                                            <Progressbarre 
                                                bgcolor="#99ccff" 
                                                progress='30'  
                                                height={20}
                                                message="text a afficher"
                                            />
                                            <Progressbarre 
                                                bgcolor="#99ccff" 
                                                progress='40'  
                                                height={20}
                                                message="text a afficher"
                                            />
                                        </div>
                                    <button>Submit</button>
                                </form>
                           
                        </div>

    const Template2 = <div style={styleSetting}>
                        <div>
                            <h2>Parametre</h2>
                        </div>
                        <form onSubmit={handleSubmit(handleRegistration)}>
                            <div style={styleDiv}>
                                <Select options={dataCollection} 
                                    placeholder="Selectionner la geographie" 
                                    onChange={listedynamique}
                                    />
                                <select name='periode'  {...register('periode')}>
                                    {dataCollection2.map(
                                        (item)=> <option key={item.id} value={item.id}>{item.title}</option>
                                    )}
                                </select>
                                
                            </div>
                            <div>
                               
                            </div>
                            <div>
                                <input type="datetime-local" name="begindate" {...register('begindate')}/>
                                <input type="datetime-local" name="dateend" {...register('dateend')}/>
                            </div>
                            <div style={styleDiv}>
                                <Progressbarre 
                                    bgcolor="#99ccff" 
                                    progress='30'  
                                    height={20} 
                                    message="text a afficher"
                                />
                                <Progressbarre 
                                    bgcolor="#99ccff" 
                                    progress='40'  
                                    height={20}
                                    message="text a afficher"
                                />
                            </div>
                            <button>Submit</button>
                        </form>
                        </div>
    if(collection.length != 0)
        return (Template1);
    else
        return(Template2);
};

export default Setting;