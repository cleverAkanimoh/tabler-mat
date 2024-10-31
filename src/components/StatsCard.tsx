import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change }) => {
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-semibold">{value}</p>
        <span
          className={`text-sm ${
            change.startsWith("-") ? "text-red-500" : "text-green-500"
          }`}
        >
          {change}
        </span>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
