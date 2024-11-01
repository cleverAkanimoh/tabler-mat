import { RootState } from "@/store";
import { fetchChartDataRequest } from "@/store/slices/chartSlice";
import React, { useEffect } from "react";
import { Chart, GoogleChartTicks } from "react-google-charts";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";

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

const PieChart: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.charts);

  useEffect(() => {
    dispatch(fetchChartDataRequest());
  }, [dispatch]);

  // const defaultData = [
  //   ["Slice", "Percentage"],
  //   ["Slice 1", 47.4],
  //   ["Slice 2", 33.1],
  //   ["Slice 3", 10.5],
  //   ["Slice 4", 9.0],
  // ];

  console.log(data);

  const defaultOptions = {
    title: "",
    pieHole: 0,
    is3D: false,
    slices: [
      { color: "#1c3353" },
      { color: "#467fcf" },
      { color: "#c8d9f1" },
      { color: "#7ea5dd" },
    ],
  };

  return (
    <div className="bg-white rounded border">
      <div className="border-b">
        <h4 className="text-gray-700  p-4">Chart Title</h4>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <Chart
          chartType="PieChart"
          width="100%"
          height="300px"
          data={data}
          options={defaultOptions}
        />
      )}
    </div>
  );
};

export default PieChart;
