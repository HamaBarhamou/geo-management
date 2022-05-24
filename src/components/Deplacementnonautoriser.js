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
        text: 'Deplacement non autorisé',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'dataset',
        data: ['3', '10', '22', '45', '08', '15', '56'],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  
const Deplacementnonautoriser = () => {
    return (
        <div style={{background:'white',width:'50%',margin:10}}>
            <Bar  options={options} 
                  data={data}
                  //tyle={{background:'white'}}
            />
        </div>
    );
};

export default Deplacementnonautoriser;