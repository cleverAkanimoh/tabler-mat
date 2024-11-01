import React from "react";
import { Chart, GoogleChartTicks } from "react-google-charts";

export interface OptionsType {
  [otherOptionKey: string]: any;
  width: number;
  height: number;
  is3D: boolean;
  title: string;
  backgroundColor:
    | string
    | {
        fill: string;
        stroke: string;
        strokeWidth: number;
      };
  hAxis?: {
    minValue?: any;
    maxValue?: any;
    ticks?: GoogleChartTicks;
    title?: string;
    viewWindow?: {
      max?: any;
      min?: any;
    };
    [otherOptionKey: string]: any;
  };
  vAxis?: {
    minValue?: any;
    maxValue?: any;
    ticks?: GoogleChartTicks;
    title?: string;
    viewWindow?: {
      max?: any;
      min?: any;
    };
    [otherOptionKey: string]: any;
  };
  legend: any;
  colors: string[] | undefined;
}

const PieChart: React.FC = ({
  data,
  options,
}: {
  data?: (string | number)[][];
  options?: OptionsType;
}) => {
  const defaultData = [
    ["Category", "Percentage"],
    ["Category 1", 37],
    ["Category 2", 43],
    ["Category 3", 20],
  ];

  const defaultOptions = {
    title: "",
    pieHole: 0.4,
    is3D: false,
    slices: [{ color: "#4caf50" }, { color: "#ffeb3b" }, { color: "#4caf50" }],
  };

  return (
    <div className="bg-white rounded border">
      <div className="border-b">
        <h4 className="text-gray-700  p-4">Chart Title</h4>
      </div>
      <Chart
        chartType="PieChart"
        width="100%"
        height="300px"
        data={data ? data : defaultData}
        options={options ? options : defaultOptions}
      />
    </div>
  );
};

export default PieChart;
