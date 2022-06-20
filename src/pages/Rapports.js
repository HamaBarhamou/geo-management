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
import Loading from '../components/Loading';
import { data } from '../components/Comportementconduite';

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

    const dataCollection = [
        {
            id: 'periode',
            title: 'periodicité',
        },
        {
            id: 'Jour',
            title: 'Jour de la semaine',
        }
    ]
    
    const printRef = React.useRef();
    const {userdata, alarmType, proxy} = useContext(UserContext)
    const { register, handleSubmit } = useForm();
    const [pdf, setPdf] = useState(false)
    const [loading, setLoading] = useState(false)
    const [buttonmesage, setButtonmessage] = useState("Generer Rapports")
    const [type, setType] = useState("General")
    const [datarapport, setDatarapport] = useState({});
    const [vehicule, setVehicule] = useState([{"id": "", "title": ""}])
    const [carId,setCarId] = useState();
    
    
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
        setType(data.select)
        if (data.select == "")
        {
            setPdf(false)
            setLoading(false)
            return;
        }

        
        setLoading(true)
        let url = proxy
        if (data.select === "General")
        {
            url = url + "https://www.whatsgps.com/alarmSta/queryGroupByCar.do?userId="+userdata.userId+"&token="+userdata.token+"&startTime=2022-06-01%2009:07:21.20&endTime=2022-06-10%2009:07:21.20"
            fetch(url)
            .then((resp)=>resp.json())
            .then((data)=>{
                setDatarapport(data)
                console.log("rapport general:",data)

                if(pdf)
                    setPdf(false)
                else
                    setPdf(true)
                setLoading(false)
            })
            .then((error)=>console.log("rapport general error:",error))
        }

        if (data.select === "TravelStatistics")
        {
            console.log("Statistique sur le voyage")
            url =  url + "https://www.whatsgps.com/position/distanceSta.do?userId="+userdata.userId+"&token="+userdata.token+"&carId="+data.selection_vehicule+"&startTime=2022-06-01%2009:07:21.20&endTime=2022-06-10%2009:07:21.20"
            fetch(url)
            .then((resp)=>resp.json())
            .then((data)=>{
                setDatarapport(data)
                //console.log("voyage:",data)

                if(pdf)
                    setPdf(false)
                else
                    setPdf(true)
                setLoading(false)
            })
            .then((error)=>console.log("voyage error:",error))

            // telecharger le fichier exel
            let urlExel = proxy + "https://www.whatsgps.com/position/distanceStaExport.do?userId="+userdata.userId+"&token="+userdata.token+"&carId="+data.selection_vehicule+"&startTime=2022-06-01%2009:07:21.20&endTime=2022-06-10%2009:07:21.20"
            
            fetch(urlExel)
            .then((res) => { return res.blob(); })
            .then((data) => {
            var a = document.createElement("a");
            a.href = window.URL.createObjectURL(data);
            a.download = "Rapport StaVoyage";
            a.click();
            });
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

        if (data.select === "exec_vitesse")
        {
            //console.log("cardId="+carId+" data.selection_vehicule="+data.selection_vehicule)
            //url = url + "https://www.whatsgps.com/alarmSta/queryGroupByCar.do?userId="+userdata.userId+"&token="+userdata.token+"&startTime=2022-06-01%2009:07:21.20&endTime=2022-06-10%2009:07:21.20"
            url =  url + "https://www.whatsgps.com/position/getOverSpeedDetail.do?userId="+userdata.userId+"&token="+userdata.token+"&carId="+data.selection_vehicule+"&startTime=2022-06-01%2009:07:21.20&endTime=2022-06-10%2009:07:21.20"
            fetch(url)
            .then((resp)=>resp.json())
            .then((data)=>{
                setDatarapport(data)
                console.log("rapport general:",data)

                if(pdf)
                    setPdf(false)
                else
                    setPdf(true)
                setLoading(false)
            })
            .then((error)=>console.log("rapport general error:",error))

            // telecharger le fichier exel
            let urlExel = proxy + "https://www.whatsgps.com/position/getOverSpeedDetailExport.do?userId="+userdata.userId+"&token="+userdata.token+"&carId="+data.selection_vehicule+"&startTime=2022-06-01 09:07:21.20&endTime=2022-06-10 09:07:21.20"
            
            fetch(urlExel)
            .then((res) => { return res.blob(); })
            .then((data) => {
            var a = document.createElement("a");
            a.href = window.URL.createObjectURL(data);
            a.download = "Rapport Exces de vitesse";
            a.click();
            });
            
            /*if(pdf)
                setPdf(false)
            else
                setPdf(true)
            setLoading(false)*/
            console.log("Execs de vitesse/urlExel:", urlExel)
        }
        
    }
    const listdynamique = () =>{
        let url = proxy + "https://www.whatsgps.com/alarmSta/queryGroupByCar.do?userId="+userdata.userId+"&token="+userdata.token+"&startTime=2022-06-01%2009:07:21.20&endTime=2022-06-10%2009:07:21.20"
        //url =  url + "https://www.whatsgps.com/position/getOverSpeedDetail.do?userId=25096&token=94790e51-7df4-4dde-8061-a6c50efdfbbb&carId=866200&startTime=2022-06-01%2009:07:21.20&endTime=2022-06-10%2009:07:21.20"
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=>{
            
            //console.log("liste dynamique:",d)
            setVehicule(data.data.map(todo=>({id:todo.carId, title:todo.machineName})))
            //console.log("veh1",vehicule)
            //console.log("veh2",dataCollection)
        })
        .then((error)=>console.log("rapport general error:",error))
        //setVehicule(dataCollection)
    }
    const selectionVehicule = (event) =>{
        //console.log("vehicule selectionner", event.target.value)
        setCarId(event.target.value)
        //console.log("vehicule id",carId)
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
                    <select name="pets" {...register('select')} onChange={listdynamique}>
                        <option value="">--Please choose an option--</option>
                        <option value="General">Statistiques d'alarme</option>
                        <option value="TravelStatistics">Statistiques sur les voyages</option>
                        <option value="Comportement_conducteur">Comportement du conducteur</option>
                        <option value="Kilometrage">Kilometrage</option>
                        <option value="Arret">Arret</option>
                        <option value="DepartTardive">Depart tardive</option>
                        <option value="Retour_precosse">Retour precosse</option>
                        <option value="exec_vitesse">Exec de Vitesse</option>
                    </select>

                    <select name="selection_vehicule" {...register('selection_vehicule')} /*onChange={selectionVehicule}*/>
                        <option value="">--Rapport de Vitesse--</option>
                        {vehicule.map(
                            (item)=> <option key={item.id} value={item.id}>{item.title}</option>
                        )}
                    </select>

                    <input type="datetime-local" 
                        name="begindate" {...register('begindate')} 
                    />
                    
                    <input type="datetime-local" 
                        name="dateend" {...register('dateend')} 
                    />
                   
                </div>
                <div>
                    <button>{buttonmesage}</button>
                </div>
            </form>
            
        </div>
    </div>
    )

    const template3 = ( 
        <div> 
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
                        <option value="TravelStatistics">Statistiques sur les voyages</option>
                        <option value="Comportement_conducteur">Comportement du conducteur</option>
                        <option value="Kilometrage">Kilometrage</option>
                        <option value="Arret">Arret</option>
                        <option value="DepartTardive">Depart tardive</option>
                        <option value="Retour_precosse">Retour precosse</option>
                        <option value="exec_vitesse">Exec de Vitesse</option>
                    </select>

                    <input type="datetime-local" 
                        name="begindate" {...register('begindate')} 
                    />
                    
                    <input type="datetime-local" 
                        name="dateend" {...register('dateend')} 
                    />
                   
                </div>
                <div>
                    <button>{buttonmesage}</button>
                </div>
            </form>
            
        </div>
        </div >
        <div style={{margin:50}}><Loading type={"spin"} color={"blue"}/></div>    
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
                        <option value="TravelStatistics">Statistiques sur les voyages</option>
                        <option value="Comportement_conducteur">Comportement du conducteur</option>
                        <option value="Kilometrage">Kilometrage</option>
                        <option value="Arret">Arret</option>
                        <option value="DepartTardive">Depart tardive</option>
                        <option value="Retour_precosse">Retour precosse</option>
                        <option value="exec_vitesse">Exec de Vitesse</option>
                    </select>

                    <select name="selection_vehicule" {...register('selection_vehicule')}>
                        <option value="">--Rapport de Vitesse--</option>
                        {vehicule.map(
                            (item)=> <option key={item.id} value={item.id}>{item.title}</option>
                        )}
                    </select>

                    <input type="datetime-local" 
                        name="begindate" {...register('begindate')} 
                    />
                    
                    <input type="datetime-local" 
                        name="dateend" {...register('dateend')} 
                    />
                   
                </div>
                <div>
                    <button>{buttonmesage}</button>
                </div>

                
            </form>
            
            </div>
        </div>
            <div ref ={printRef}>
                <Supportrapport type={type} data={datarapport}/>
            </div>

            <div>
                <button type='button' onClick={handleDownloadPdf}>
                    Telecharger  format PDF
                </button>
            </div>
        </div>
    )

    if (!pdf)
        if (loading)
            return(template3)
        else{
            return (template1);
        }
    else
       return(template2)
};

export default Rapports;