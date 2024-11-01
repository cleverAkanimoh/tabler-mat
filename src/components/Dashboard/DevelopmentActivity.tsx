import React from "react";
import { Chart } from "react-google-charts";
import BottomDevelopmentActivity from "./BottomDevelopmentActivity";

const DevelopmentActivity: React.FC = () => {
  const data = [
    ["Month", "Purchases"],
    ["Jan", 5],
    ["Feb", 15],
    ["Mar", 10],
    ["Apr", 20],
    ["May", 30],
    ["Jun", 25],
  ];

  const options = {
    title: "",
    curveType: "function",
    legend: { position: "top" },
    colors: ["#3b82f6"],
  };

  return (
    <div className="bg-white rounded border">
      <div className="border-b">
        <h4 className="text-gray-700  p-4">Development Activity</h4>
      </div>
      <Chart
        chartType="LineChart"
        width="100%"
        height="200px"
        data={data}
        options={options}
      />

      <BottomDevelopmentActivity />
    </div>
  );
};

export default DevelopmentActivity;
