import React from "react";
import { Line } from "react-chartjs-2";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DevelopmentActivity: React.FC = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Purchases",
        data: [5, 15, 10, 20, 30, 25],
        fill: false,
        borderColor: "#3b82f6",
        tension: 0.1,
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Development Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Line data={data} />
      </CardContent>
    </Card>
  );
};

export default DevelopmentActivity;
