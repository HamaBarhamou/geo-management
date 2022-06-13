import React, { useState, Component, useContext } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useForm } from "react-hook-form";
import Select from 'react-select'
import { UserContext } from '../App';
import Head from '../components/Head';
import Onglet from '../components/Onglet';
import Security from '../components/Security';
import Supportrapport from '../Rapports/Supportrapport';

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

    const printRef = React.useRef();
    const {userdata, alarmType, proxy} = useContext(UserContext)
    const { register, handleSubmit } = useForm();
    const [pdf, setPdf] = useState(false)
    
    const handleDownloadPdf = async() => {
        // TODO: logic
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
        (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('Rapport.pdf');
        console.log("pdf telecharger")
        
        if(pdf)
            setPdf(false)
        else
            setPdf(true)

    };
    const handleRegistration = (data)=>{
        //console.log(userdata);
        // introgation de l'api
        if(pdf)
            setPdf(false)
        else
            setPdf(true)

        let url = proxy
        if (data.select === "General")
        {
            url = url + "https://www.whatsgps.com/alarmSta/queryGroupByCar.do?userId=25096&token=d4aa0523-8ed7-457f-a282-2d1cd075a03e&startTime=2022-06-01%2009:07:21.20&endTime=2022-06-10%2009:07:21.20"
            fetch(url)
            .then((resp)=>resp.json())
            .then((data)=>{
                console.log("rapport general:",data)
            })
            .then((error)=>console.log("rapport general error:",error))
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

    const template1=(
        <div style={styleGlobale}>
        <Head/>
        <Onglet/>
        <div style={styleSetting}>
            <div style={{color: 'white',fontWeight: 900}}>
                <h2>Rapports instantanés</h2>
            </div>
            <form onSubmit={handleSubmit(handleRegistration)} style={{width: '98%'}}>
                <div style={{display:'flex',margin:20,width:'100%'}} >
                    <select name="pets" {...register('select')}>
                        <option value="">--Please choose an option--</option>
                        <option value="General">Statistiques d'alarme</option>
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
                    <button>Generer Rapports</button>
                </div>
            </form>
            
        </div>
    </div>
    )

    const template2=(
        <div style={styleGlobale}>
        <Head/>
        <Onglet/>
        <div>
        <div style={styleSetting}>
            <div style={{color: 'white',fontWeight: 900}}>
                <h2>Rapports instantanés</h2>
            </div>
            <form onSubmit={handleSubmit(handleRegistration)} style={{width: '98%'}}>
                <div style={{display:'flex',margin:20,width:'100%'}}>
                    <select name="pets" {...register('select')}>
                        <option value="">--Please choose an option--</option>
                        <option value="General">Statistiques d'alarme</option>
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
                    <button>Generer Rapports</button>
                </div>

                
            </form>
            
            </div>
        </div>
            <div ref ={printRef}>
                <Supportrapport/>
            </div>

            <div>
                <button type='button' onClick={handleDownloadPdf}>
                    Telecharger PDF
                </button>
            </div>
        </div>
    )

    if (!pdf)
    return (template1);
    else
       return(template2)
};

export default Rapports;