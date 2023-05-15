import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(Filler);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {

  responsive: true,
  plugins: {
    legend: {
      display:false,
      // position: 'top' ,
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
 // Modify the axis by adding scales
 scales: {
  // to remove the labels
  x: {
    ticks: {
      display: true,
    },

    // to remove the x-axis grid
    grid: {
      drawBorder: false,
      display: false,
    },
  },
  // to remove the y-axis labels
  y: {
    ticks: {
      display: false,
      beginAtZero: true,
    },
    // to remove the y-axis grid
    grid: {
      drawBorder: true,
      display: true,
    },
  },
},

};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export const data = {
  labels,
  datasets: [
    {
        // label: 'My First Dataset',
        data: [65, 59, 10, 56, 55, 5, 0],
        fill: true,
        backgroundColor: 'rgba(20, 160, 120,0.3)',
        borderColor: 'rgba(75, 192, 192)',
        tension: 0.3,
    },
    {
      // label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [35, 60, 18,0],
      fill: true,
      backgroundColor: 'rgba(120, 190, 50,0.3)',
      borderColor: 'rgb(53, 162, 235)',
      tension: 0.3,

    },
    {
      // label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [0, 35, 60, 18, 0],
      fill: true,
      borderColor: 'rgb(53, 162, 235)',
      tension: 0.3,

    },
  ],
};



const LineChart = () => {
    return (
        <Line options={options} data={data} /> 
         )
}

export default LineChart