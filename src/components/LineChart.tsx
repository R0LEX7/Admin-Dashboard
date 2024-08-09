"use client"
import { lineChartData } from '@/constant/graphData';
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


type Props = {}

export default function LineChartComp({}: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={lineChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="2023" stroke="#9CACCA" strokeWidth={2} activeDot={{ r: 10 }} />
          <Line type="monotone" dataKey="2024" strokeWidth={2} stroke="#888888" />
        </LineChart>
      </ResponsiveContainer>
  )
}
