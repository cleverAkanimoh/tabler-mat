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

const DonutChart: React.FC = ({
  data,
  options,
}: {
  data?: (string | number)[][];
  options?: OptionsType;
}) => {
  const defaultData = [
    ["Ring", "Percentage"],
    ["Ring 1", 63.0],
    ["Ring 2", 37.0],
  ];

  const defaultOptions = {
    title: "",
    pieHole: 0.5,
    is3D: false,
    slices: [{ color: "#5dba2c" }, { color: "#8ecf40" }],
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

export default DonutChart;
