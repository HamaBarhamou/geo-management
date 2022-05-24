import React from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Comportement du conducteur',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'dataset',
        data: ['3', '60', '22', '80', '08', '01', '56'],
        backgroundColor: 'rgba(255, 99, 50, 1.5)',
      }
    ],
  }

const Comportementconduite = () => {
    return (
        <div style={{background:'white',width:'50%',margin:10}}>
            <Bar options={options} data={data}/>
        </div>
    );
};

export default Comportementconduite;