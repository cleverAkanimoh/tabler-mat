import React from "react";
import { Pie } from "react-chartjs-2";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

interface PieChartProps {
  title: string;
  data: number[];
}

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC<PieChartProps> = ({ title, data }) => {
  const chartData = {
    labels: ["Category 1", "Category 2", "Category 3"],
    datasets: [
      {
        data: data,
        backgroundColor: ["#4caf50", "#ffeb3b", "#2196f3"],
        hoverBackgroundColor: ["#388e3c", "#fbc02d", "#1976d2"],
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Pie data={chartData} />
      </CardContent>
    </Card>
  );
};

export default PieChart;
