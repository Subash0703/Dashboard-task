import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: 5,
    Weekly: 2000,
  },
  {
    name: "",
    Weekly: 10000,
  },
  {
    name: 9,
    Weekly: 5000,
  },
  {
    name: "",
    Weekly: 4080,
  },
  {
    name: 11,
    Weekly: 1890,
  },
  {
    name: "",
    Weekly: 2390,
  },
  {
    name: 13,
    Weekly: 3490,
  },
  {
    name: "",
    Weekly: 3090,
  },
  {
    name: 15,
    Weekly: 2090,
  },
  {
    name: "",
    Weekly: 2500,
  },
  {
    name: 17,
    Weekly: 12800,
  },
  {
    name: "",
    Weekly: 7500,
  },
  {
    name: 19,
    Weekly: 1000,
  },
  {
    name: "",
    Weekly: 2500,
  },
  {
    name: 21,
    Weekly: 2400,
  },
  {
    name: "",
    Weekly: 12000,
  },
  {
    name: 23,
    Weekly: 3200,
  },
  {
    name: "",
    Weekly: 6100,
  },
  {
    name: 25,
    Weekly: 3700,
  },
];

const ActivityChart = () => {
  return (
    <div className="bg-cutom">
      <ResponsiveContainer width="100%" height={180}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis ticks={[0, 5000, 10000, 15000]} />
          <Legend />
          <Bar dataKey="Weekly" fill="#7294FF" radius={[10, 10, 10, 10]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
