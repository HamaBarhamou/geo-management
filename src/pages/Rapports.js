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
    const [starttime, setStarttime] = useState("2022-06-01%2009:07:21.20")
    const [endtime, setEndetime] = useState("2022-06-10%2009:07:21.20")
    const [messageraport, setMessagerapport] = useState("")
    
    
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

        setType(data.select)
        if (data.select == "")
        {
            setPdf(false)
            setLoading(false)
            return;
        }

        setLoading(true)
        let url = proxy
        let urlExel= proxy
        if (data.select === "parking_detail")
        {
           url =  url + "https://www.whatsgps.com/position/getStopDetail.do?userId="+userdata.userId+"&token="+userdata.token+"&carId="+data.selection_vehicule+"&startTime="+starttime+"&endTime="+endtime
           urlExel = urlExel + "https://www.whatsgps.com/position/getStopDetailExport.do?userId="+userdata.userId+"&token="+userdata.token+"&carId="+data.selection_vehicule+"&startTime="+starttime+"&endTime="+endtime
        }

        if (data.select === "TravelStatistics")
        {
            url =  url + "https://www.whatsgps.com/position/distanceSta.do?userId="+userdata.userId+"&token="+userdata.token+"&carId="+data.selection_vehicule+"&startTime="+starttime+"&endTime="+endtime
            urlExel = urlExel + "https://www.whatsgps.com/position/distanceStaExport.do?userId="+userdata.userId+"&token="+userdata.token+"&carId="+data.selection_vehicule+"&startTime="+starttime+"&endTime="+endtime
        }

        if (data.select === "mileage_detail")
        {
            url =  url + "https://www.whatsgps.com/position/mileageStaByDay.do?userId="+userdata.userId+"&token="+userdata.token+"&carId="+data.selection_vehicule+"&startTime="+starttime+"&endTime="+endtime
            urlExel = urlExel + "https://www.whatsgps.com/position/mileageStaByDayExport.do?userId="+userdata.userId+"&token="+userdata.token+"&carId="+data.selection_vehicule+"&startTime="+starttime+"&endTime="+endtime
        }

        if (data.select === "statistical_overview")
        {
            url =  url + "https://www.whatsgps.com/position/getStaOverview.do?userId="+userdata.userId+"&token="+userdata.token+"&carId="+data.selection_vehicule+"&startTime="+starttime+"&endTime="+endtime
            urlExel = urlExel + "https://www.whatsgps.com/position/getStaOverviewExport.do?userId="+userdata.userId+"&token="+userdata.token+"&carId="+data.selection_vehicule+"&startTime="+starttime+"&endTime="+endtime
        }

        if (data.select === "exec_vitesse")
        {   
            url =  url + "https://www.whatsgps.com/position/getOverSpeedDetail.do?userId="+userdata.userId+"&token="+userdata.token+"&carId="+data.selection_vehicule+"&startTime="+starttime+"&endTime="+endtime
            urlExel = urlExel + "https://www.whatsgps.com/position/getOverSpeedDetailExport.do?userId="+userdata.userId+"&token="+userdata.token+"&carId="+data.selection_vehicule+"&startTime="+starttime+"&endTime="+endtime
        }


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
        .then((error)=>console.log(messageraport +"error:",error))

        fetch(urlExel)
        .then((res) => { return res.blob(); })
        .then((data) => {
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(data);
        a.download = "Rapport";
        a.click();
        });
        
    }
    const listdynamique = () =>{
        let url = proxy + "https://www.whatsgps.com/alarmSta/queryGroupByCar.do?userId="+userdata.userId+"&token="+userdata.token+"&startTime="+starttime+"&endTime="+endtime
        //url =  url + "https://www.whatsgps.com/position/getOverSpeedDetail.do?userId=25096&token=94790e51-7df4-4dde-8061-a6c50efdfbbb&carId=866200&startTime=2022-06-01%2009:07:21.20&endTime=2022-06-10%2009:07:21.20"
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=>{
            
            //console.log("liste dynamique:",d)
            setVehicule(data.data.map(todo=>({id:todo.carId, title:todo.machineName})))
            //console.log("veh1",vehicule)
            //console.log("veh2",dataCollection)
        })
        .then((error)=>console.log("liste dynamique error:",error))
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
                        <option value="TravelStatistics">Statistiques sur les voyages</option>
                        <option value="mileage_detail">détail des kilométrages</option>
                        <option value="statistical_overview">Aperçu statistique</option>
                        <option value="exec_vitesse">Exec de Vitesse</option>
                        <option value="parking_detail">détail du stationnement</option>
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
                        <option value="TravelStatistics">Statistiques sur les voyages</option>
                        <option value="mileage_detail">détail des kilométrages</option>
                        <option value="statistical_overview">Aperçu statistique</option>
                        <option value="exec_vitesse">Exec de Vitesse</option>
                        <option value="parking_detail">détail du stationnement</option>
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
                        <option value="TravelStatistics">Statistiques sur les voyages</option>
                        <option value="mileage_detail">détail des kilométrages</option>
                        <option value="statistical_overview">Aperçu statistique</option>
                        <option value="exec_vitesse">Exec de Vitesse</option>
                        <option value="parking_detail">détail du stationnement</option>
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