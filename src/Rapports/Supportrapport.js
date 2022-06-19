import React, { useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Paginator from 'react-hooks-paginator';
import Table from 'rc-table';
import { UserContext } from '../App';



  //const data = []

const Supportrapport = (props) => {

  const columns = [
    {
      title: 'Alarm',
      dataIndex: 'alarm',
      key: 'alarm',
      width: 100,
    },
    {
      title: 'Vitesse (km/h)',
      dataIndex: 'speed',
      key: 'vitesse',
      width: 100,
    },
    {
      title: 'Direction',
      dataIndex: 'dir',
      key: 'dir',
      width: 100,
    },
    {
      title: 'Heure du lieu',
      dataIndex: 'pointDt',
      key: 'pointDt',
      width: 200,
    },
    {
      title: 'Adresse',
      dataIndex: 'adresse',
      key: 'adresse',
      render: (data) => <a href={data}>{data}</a>,
      width: 100,
    },
    {
      title: 'Type Emplacement',
      dataIndex: 'pointType',
      key: 'pointType',
      width: 30,
    },
    {
      title: 'Deux distances de positionnements',
      dataIndex: 'signalMile',
      key: 'signalMile',
      width: 30,
    },
    {
      title: 'temps de repos en seconde',
      dataIndex: 'stopTime',
      key: 'stopTime',
      width: 30,
    },
    {
      title: 'Remarque',
      dataIndex: 'remark',
      key: 'remark',
      width: 200,
    },
   
  ];
  

    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const pageLimit = 10;
    const [date, setDate] = useState(new Date())
    const [data, setData] = useState([]);
    const {alarmType} = useContext(UserContext)


    

    /*function extractionData(data, type)
    {
      if (type == "exec_vitesse")
      {
        if(data != undefined){
            data.map((todo,i)=>{
              return [{"number":1, vitesse: 53, "hello": "wormd"}]
              //console.log(datas)
            })
            //console.log("setData:",data)
        }
        else{
            console.log("pas defi")
        }
      }    
    }*/

    useEffect(() => {
      //let donner = extractionData(props.data.data,"exec_vitesse")
      setData(props.data.data)
      console.log("useEffet data:",props.data.data)
      setCurrentData(data.slice(offset, offset + pageLimit));
    }, [offset, data]);

    if (props.type == "exec_vitesse")
        return (
            <div>
                <h1>Rapport  Exces de vitesse -</h1>
                <Table columns={columns} data={currentData/*extractionData(props.data.data,"exec_vitesse")*/} / >
                <Paginator
                  totalRecords={data.length}
                  pageLimit={pageLimit}
                  pageNeighbours={1}
                  setOffset={setOffset}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
            </div>
        );
    if (props.type == "General")
            return(
                <div>
                    <h1>Statistiques General </h1>
                    
                    <Table columns={[]} data={[]/*extractionData(props.data.data,General)*/} />
                    
                </div>
            )
};

export default Supportrapport;