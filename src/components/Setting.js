/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Setting.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/05/18 10:52:44 by Barhamou          #+#    #+#             */
/*   Updated: 2022/05/19 15:52:14 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import { useForm } from "react-hook-form";

const styleSetting={
    background: '#A9A9A9',
   
}

const Setting = () => {

    const dataCollection1 = [
        {
            id: 'geographie',
            title: 'Selectionner la geographie',
            collection: [
                {id:'Niamey',title:'Niamey'},
                {id:'Zinder',title:'Zinder'},
                {id:'Maradi',title:'Maradi'},
                {id:'Thaoua',title:'Thaoua'}
            ]
        },
        {
            id: 'Vehicule',
            title: 'Vehicule',
            collection: [
                {id:'Voiture',title:'Voiture'},
                {id:'Moto',title:'Moto'},
                {id:'Velo',title:'Velo'},
                {id:'Avion',title:'Avion'}
            ]
        },
        {
            id: 'Agence',
            title: 'Agence',
            collection: [
                {id:'Agence_de_Niamey',title:'Agence de Niamey'},
                {id:'Agence_de_Ouaga',title:'Agence de Ouaga'},
                {id:'Agence_du_Tchad',title:'Agence du Tchad'},
                {id:'Agence1',title:'Agence1'}
            ]
        },
        {
            id: 'Zone',
            title: 'Zone',
            collection: [
                {id:'pk5',title:'pk5'},
                {id:'zone_2',title:'zone_2'},
                {id:'Fontiere_Mali',title:'Fontiere_Mali'},
                {id:'Centre_ville',title:'Centre_ville'}
            ]
        },
        {
            id: 'National',
            title: 'National',
            collection: [
                {id:'Region',title:'Region'},
                {id:'Commune',title:'Commune'},
                {id:'Departement',title:'Departement'},
                {id:'International',title:'International'}
            ]
        }
    ]
    
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

    const dataCollection3 = [
        {
            id: 'localistion1',
            title: 'localistion1',
        },
        {
            id: 'localistion2',
            title: 'localistion2',
        },
        {
            id: 'localistion3',
            title: 'localistion3',
        },
        {
            id: 'localistion4',
            title: 'localistion4',
        },
        {
            id: 'localistion5',
            title: 'localistion5',
        }
    ]
    
    const { register, handleSubmit } = useForm();
    const handleRegistration = (data) => {
        console.log(data);
    };

    const Template = <div style={styleSetting}>
                    <div>
                        <h2>Parametre</h2>
                    </div>
                    <form onChange={handleSubmit(handleRegistration)} onSubmit={handleSubmit(handleRegistration)}>
                        <div>
                            <select name='localisation'  {...register('localisation')}>
                                {dataCollection1.map(
                                    (item)=> <option key={item.id} value={item.id}>{item.title}</option>
                                )}
                            </select>
                            
                            <select name='periode'  {...register('periode')}>
                                {dataCollection2.map(
                                    (item)=> <option key={item.id} value={item.id}>{item.title}</option>
                                )}
                            </select>
                        </div>
                        <div>
                            <select name='dynamique'  {...register('dynamique')}>
                                {
                                   
                                    dataCollection1.map(
                                        (item)=> <option key={item.id} value={item.id}>{item.title}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div>
                            <input type="datetime-local" name="begindate" {...register('begindate')}/>
                            <input type="datetime-local" name="dateend" {...register('dateend')}/>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
    return (
        Template
    );
};

export default Setting;