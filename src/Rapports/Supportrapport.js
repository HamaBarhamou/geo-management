import React, { useContext, useState } from 'react';
import Excesvitesse from '../components/Excesvitesse';
import Security from '../components/Security';
import Performance from '../components/Performance';
import Table from 'rc-table';
import { UserContext } from '../App';

const columns_Generale = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        width: 100,
    },
    {
      title: 'Engins Roulants',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: 'Alarmes',
      dataIndex: 'alarmes',
      key: 'address',
      width: 200,
    },
    {
      title: 'Alarmes Counts',
      dataIndex: 'alarmCounts',
      key: 'alarmCounts',
      width: 200,
    },
  ];
  
  /*const data = [
    { name: 'Jack', id: 28, alarmes: 'some where'},
    { name: 'Rose', id: 36, alarmes: 'some where'},
  ];*/

  const data = []

const Supportrapport = (props) => {
    const [date, setDate] = useState(new Date())
    const [data, setData] = useState([]);
    const {alarmType} = useContext(UserContext)

    function extractionVitess(data)
    {
      let str = ""
      const alamTypes = (data)=>{
        if(data != undefined){
            data.map(ob=>{
              //console.log("ob:",ob)
              str = str + alarmType[ob.alarmType] + ": " + ob.alarmCount + "</br>"
            })
        }
        else{
            console.log("pas defi")
        }
        return (str)
      }
      return (data.map((toto,i)=>{return {"name":toto.machineName, "id":toto.carId, alarmes: alamTypes(toto.alarmCounts)}}))
    }

    if (props.type == "exec_vitesse")
        return (
            <div>
                <h1>Rapport  Exces de vitesse -</h1>
                {console.log("extraaa",props.data.data)}
                <Table columns={columns_Generale} data={[]/*extractionVitess(props.data.data)*/} />
                
            </div>
        );
    if (props.type == "General")
            return(
                <div>
                    <h1>Statistiques General </h1>
                    
                    {props.data.data.map(todo=>{
                        //data.push({"name":todo.machineName,"id":todo.carId, alarmes:"todo.alarmCounts.map()"})
                        //setData(data.push({"name":todo.machineName,"id":todo.carId, alarmes:"todo.alarmCounts.map()"}))
                        
                    })}
                    <Table columns={columns_Generale} data={[]/*extractionVitess(props.data.data)*/} />
                    
                </div>
            )
};

export default Supportrapport;