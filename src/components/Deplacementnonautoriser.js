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
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Deplacement non autorisé',
        data: ['3', '10', '22', '45', '08', '15', '56'],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  
const Deplacementnonautoriser = () => {
    return (
        <div>
            <h3>Deplacement non autoriser</h3>
            <Bar data={data}/>
        </div>
    );
};

export default Deplacementnonautoriser;