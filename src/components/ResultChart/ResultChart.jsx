import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  {
    id: 1,
    name: "Amit Sharma",
    Physics: 85,
    Chemistry: 78,
    Math: 92,
  },
  {
    id: 2,
    name: "Riya Das",
    Physics: 90,
    Chemistry: 88,
    Math: 95,
  },
  {
    id: 3,
    name: "Sourav Ghosh",
    Physics: 76,
    Chemistry: 82,
    Math: 70,
  },
  {
    id: 4,
    name: "Priya Sen",
    Physics: 88,
    Chemistry: 91,
    Math: 85,
  },
  {
    id: 5,
    name: "Arjun Patel",
    Physics: 95,
    Chemistry: 89,
    Math: 97,
  },
  {
    id: 6,
    name: "Neha Roy",
    Physics: 81,
    Chemistry: 75,
    Math: 83,
  },
  {
    id: 7,
    name: "Rahul Nair",
    Physics: 67,
    Chemistry: 72,
    Math: 65,
  },
  {
    id: 8,
    name: "Tanvi Mehta",
    Physics: 90,
    Chemistry: 85,
    Math: 88,
  },
  {
    id: 9,
    name: "Karan Gupta",
    Physics: 73,
    Chemistry: 68,
    Math: 77,
  },
  {
    id: 10,
    name: "Mitali Bose",
    Physics: 86,
    Chemistry: 80,
    Math: 89,
  },
];

const ResultChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="Math"></Line>
        <Line dataKey="Chemistry" stroke="yellow"></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;
