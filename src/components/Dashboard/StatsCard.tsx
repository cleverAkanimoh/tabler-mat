import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { ArrowDownIcon, ArrowUpIcon } from "../icon";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change }) => {
  return (
    <Card className="relative text-center bg-white">
      <CardHeader>
        <span
          className={`text-[.7rem] absolute right-4 top-3 flex items-center ${
            change.startsWith("-") ? "text-red-500" : "text-green-500"
          }`}
        >
          {change}
          {!change.startsWith("-") ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </span>

        <p className="text-2xl font-semibold">{value}</p>
      </CardHeader>
      <CardContent>
        <CardTitle className="font-[500] xs:text-xs text-gray-400 -mt-6">
          {title}
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
