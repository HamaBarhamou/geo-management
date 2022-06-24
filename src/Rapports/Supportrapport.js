import React, { useContext, useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import Paginator from 'react-hooks-paginator';
import Table from 'rc-table';
import { UserContext } from '../App';
import { columns_excesvitesse, 
         columns_Statistical_Overview,
         columns_StaVoyage,
         columns_mileage_detail,
         columns_parking_detail
        } from '../var/Enteteborder';


  //const data = []

const Supportrapport = (props) => {

    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const pageLimit = 10;
    const [date, setDate] = useState(new Date())
    const [data, setData] = useState([]);
    const {alarmType} = useContext(UserContext)
    const [columns, setColumns] = useState([])
    const [message, setMessage] = useState("")



    useEffect(() => {
      //let donner = extractionData(props.data.data,"exec_vitesse")
      if (props.type == "exec_vitesse")
      {
        setColumns(columns_excesvitesse)
        setMessage("Rapport sur les Exces de vitesses")
      }
      if (props.type == "TravelStatistics")
      {
        setColumns(columns_StaVoyage)
        setMessage("Statistiques sur les voyages")
      }
      if (props.type == "statistical_overview")
      {
        setColumns(columns_Statistical_Overview)
        setMessage("Aperçu Statistique")
      }
      if (props.type == "mileage_detail")
      {
        setColumns(columns_mileage_detail)
        setMessage("Détail des kilométrages")
      }
      if (props.type == "parking_detail")
      {
        setColumns(columns_parking_detail)
        setMessage("Détail de stationnement")
      }
      
      console.log("useEffet data:",props.data.data)
      setData(props.data.data)
      setCurrentData(data.slice(offset, offset + pageLimit));
    }, [offset, data]);

        return(
            <div>
                <h1>{message} </h1>
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
};

export default Supportrapport;