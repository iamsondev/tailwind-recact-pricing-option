import { Fullscreen } from 'lucide-react';
import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const ResultChart = () => {
  
  const resultData = [
    {
      "name": "Alice",
      "physics": 85,
      "chemistry": 78,
      "math": 92,
      "biology": 88
    },
    {
      "name": "Bob",
      "physics": 76,
      "chemistry": 82,
      "math": 89,
      "biology": 80
    },
    {
      "name": "Charlie",
      "physics": 90,
      "chemistry": 88,
      "math": 94,
      "biology": 85
    },
    {
      "name": "Diana",
      "physics": 65,
      "chemistry": 70,
      "math": 72,
      "biology": 68
    },
    {
      "name": "Ethan",
      "physics": 88,
      "chemistry": 91,
      "math": 86,
      "biology": 90
    },
    {
      "name": "Fiona",
      "physics": 79,
      "chemistry": 84,
      "math": 77,
      "biology": 83
    },
    {
      "name": "George",
      "physics": 92,
      "chemistry": 89,
      "math": 96,
      "biology": 94
    },
    {
      "name": "Hannah",
      "physics": 70,
      "chemistry": 75,
      "math": 78,
      "biology": 72
    },
    {
      "name": "Ian",
      "physics": 81,
      "chemistry": 79,
      "math": 84,
      "biology": 80
    },
    {
      "name": "Julia",
      "physics": 87,
      "chemistry": 90,
      "math": 91,
      "biology": 89
    }
  ]
  
  return (
    <div>
        <LineChart width={1500} height={300} data={resultData}>
          <XAxis dataKey={'name'}></XAxis>
          <YAxis></YAxis>
            <Line dataKey={'chemistry'} stroke='orange'></Line>
            <Line dataKey={'math'} stroke='red'></Line>
            <Line dataKey={'physics'} stroke='green'></Line>
            <Line dataKey={'biology'} stroke='yellow'></Line>
               
        </LineChart>
    </div>
  );
};

export default ResultChart;