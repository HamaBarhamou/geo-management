/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Setting.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/05/18 10:52:44 by Barhamou          #+#    #+#             */
/*   Updated: 2022/05/24 14:53:15 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useState, Component } from 'react';
import { useForm } from "react-hook-form";
import Select from 'react-select'
import Progressbarre from './Progressbarre';

const styleSetting={
    background: '#A9A9A9',
    //background: 'white',
    //height: 'height',
    width: '98%',
    margin: 10
}

const styleDiv={
    display: 'flex',
    margin: 20
}

const styles_Select = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 10,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 600,
      //background:'red',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms'
      
      return { ...provided, opacity, transition };
    }
  }

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
                            <div style={{color: 'white',fontWeight: 900}}>
                                <h2>Parametre</h2>
                            </div>
                          
                                <form onSubmit={handleSubmit(handleRegistration)} style={{width: '98%'}}>
                                    <div style={{display:'flex',margin:20,width:'100%'}}>
                                        <Select options={dataCollection} 
                                            placeholder="Selectionner la geographie" 
                                            onChange={listedynamique}
                                            styles={styles_Select}
                                            />
                                        <select name='periode'  {...register('periode')} style={{width:'100%',padding:10}}>
                                            {dataCollection2.map(
                                                (item)=> <option key={item.id} value={item.id}>{item.title}</option>
                                            )}
                                        </select>
                                        
                                    </div>
                                    <div>
                                        <select name='dynamique'  
                                                {...register('dynamique')} 
                                                style={{width:'100%',
                                                padding:10,
                                                margin:10}}
                                        > 
                                            {
                                                collection.map(
                                                    (item)=> <option key={item.value} value={item.value}>{item.label}</option>
                                                )     
                                            }
                                        </select>
                                    </div>
                                    <div style={{width:'100%',margin:10}}>
                                        <input type="datetime-local" 
                                            name="begindate" {...register('begindate')} 
                                            style={{width:'50%'}}
                                        />
                                        
                                        <input type="datetime-local" 
                                            name="dateend" {...register('dateend')} 
                                            style={{width:'50%'}}
                                        />
                                    </div>
                                    <div style={styleDiv}>
                                            <Progressbarre 
                                                bgcolor="#DC143C" 
                                                progress='30'  
                                                height={20}
                                                message="EXCES DE VITESSE Tolerence: "
                                                unite="%"
                                            />
                                            <Progressbarre 
                                                bgcolor="#DC143C" 
                                                progress='40'  
                                                height={20}
                                                message="DEPART TARDIVE Tolerence: "
                                                unite="minutes"
                                            />
                                        </div>
                                    <button>Submit</button>
                                </form>
                           
                        </div>

    const Template2 = <div style={styleSetting}>
                        <div style={{color: 'white',fontWeight: 900}}>
                            <h2>Parametre</h2>
                        </div>
                        <form onSubmit={handleSubmit(handleRegistration)} style={{width: '98%'}}>
                            <div style={{display:'flex',margin:20,width:'100%'}}>
                                <Select options={dataCollection} 
                                    placeholder="Selectionner la geographie" 
                                    onChange={listedynamique}
                                    styles={styles_Select}
                                    />
                                <select name='periode'  {...register('periode')} style={{width:'100%',padding:10}}>
                                    {dataCollection2.map(
                                        (item)=> <option key={item.id} value={item.id}>{item.title}</option>
                                    )}
                                </select>
                                
                            </div>
                
                            <div style={{width:'100%',margin:10}}>
                                <input type="datetime-local" 
                                    name="begindate" {...register('begindate')} 
                                    style={{width:'50%'}}
                                />

                                <input type="datetime-local" 
                                    name="dateend" {...register('dateend')} 
                                    style={{width:'50%'}}
                                />
                            </div>
                            <div style={styleDiv}>
                                <Progressbarre 
                                    bgcolor="#DC143C" 
                                    progress='30'  
                                    height={20} 
                                    message="EXCES DE VITESSE Tolerence: "
                                    unite="%"
                                />
                                <Progressbarre 
                                    bgcolor="#DC143C" 
                                    progress='40'  
                                    height={20}
                                    message="DEPART TARDIVE Tolerence: "
                                    unite="minutes"
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