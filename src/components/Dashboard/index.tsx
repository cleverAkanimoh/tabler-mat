import StatsCard from "@/components/Dashboard/StatsCard";
import DevelopmentActivity from "@/components/Dashboard/DevelopmentActivity";
import PieChart from "@/components/Dashboard/PieChart";
import FeedbackCard from "./FeedbackCard";
import DonutChart from "./DonutChart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { useEffect } from "react";
import { fetchStatsDataRequest } from "@/store/slices/statsSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.stats);

  useEffect(() => {
    dispatch(fetchStatsDataRequest());
  }, [dispatch]);

  return (
    <div className="grid gap-4 container">
      <h1 className="text-gray-600">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <StatsCard
          title="New Tickets"
          value={loading ? "0" : `${data[0]?.value}`}
          change="+6%"
        />
        <StatsCard
          title="Closed Today"
          value={loading ? "0" : `${data[1]?.value}`}
          change="-3%"
        />
        <StatsCard
          title="New Replies"
          value={loading ? "0" : `${data[3]?.value}`}
          change="+9%"
        />
        <StatsCard
          title="Followers"
          value={
            loading ? "0" : `${data[5]?.value || "0"}.${data[1]?.value || "0"}k`
          }
          change="+3%"
        />
        <StatsCard
          title="Daily Earnings"
          value={loading ? "0" : `$${data[4]?.value}`}
          change="-2%"
        />
        <StatsCard
          title={`Product${loading ? "" : data[2]?.value > 0 ? "s" : ""}`}
          value={loading ? "0" : `${data[2]?.value}`}
          change="-1%"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <DevelopmentActivity />
        <div className="w-full space-y-4">
          <h2 className="p-3 border border-blue-300 bg-blue-200/70 rounded-[3px] mb-4 text-sm w-full">
            <strong>
              <a href="https://github.com/cleverakanimoh/tabler-mat">
                Read our documentation
              </a>
            </strong>{" "}
            with code samples
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <DonutChart />
            <PieChart />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FeedbackCard title="New Feedback" />
            <FeedbackCard title="Today Profit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
