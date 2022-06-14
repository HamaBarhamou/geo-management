import React, { useState } from 'react';
import Excesvitesse from '../components/Excesvitesse';
import Security from '../components/Security';
import Performance from '../components/Performance';
import Table from 'rc-table';

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
  ];
  
  /*const data = [
    { name: 'Jack', id: 28, alarmes: 'some where'},
    { name: 'Rose', id: 36, alarmes: 'some where'},
  ];*/

  const data = []

const Supportrapport = (props) => {
    const [date, setDate] = useState(new Date())
    if (props.type == "exec_vitesse")
        return (
            <div>
                <h1>Rapport  Exces de vitesse - Du {date.toDateString()} Au {date.toTimeString()}</h1>
                <Excesvitesse/>
            </div>
        );
    if (props.type == "General")
            return(
                <div>
                    <h1>Rapport </h1>
                    {props.data.data.map(todo=>{
                        //if(data.indexOf(todo.carId) == -1)
                            data.push({"name":todo.machineName,"id":todo.carId, alarmes:"todo.alarmCounts.map()"})
                    })}
                    <Table columns={columns_Generale} data={data} />
                    <Security/>
                    <Performance/>
                </div>
            )
};

export default Supportrapport;