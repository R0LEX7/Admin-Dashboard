"use client"
import { pieChartData } from "@/constant/graphData";
import React, { PureComponent } from "react";
import { PieChart, Pie,  ResponsiveContainer } from "recharts";


type Props = {};
export default function PieChartComp() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart width={600} height={600}>
        <Pie
          data={pieChartData.data01}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8888888"


        />
        <Pie
          data={pieChartData.data03}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#888888"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
