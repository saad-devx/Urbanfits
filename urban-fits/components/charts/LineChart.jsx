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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

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
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export const data = {
  labels,
  datasets: [
    {
        label: 'My First Dataset',
        data: [65, 59, 80, 10, 56, 55, 5],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'red',
        tension: 0.3,
    },
    {
      label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [35, 60, 18],
      fill: true,
      borderColor: 'rgb(53, 162, 235)',
      tension: 0.3,

    },
    {
      label: 'Dataset 2',
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