import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  // data processing for the chart

  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physic: studentData.marks.physic,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
    };

    const avg = (student.physic + student.chemistry + student.math) / 3;
    student.avg = avg;
    return student;
  });

  console.log(marksChartData);

  return (
    <div>
      <BarChart width={800} height={400} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="avg" fill="yellow"></Bar>
        <Bar dataKey="chemistry" fill="blue"></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;
