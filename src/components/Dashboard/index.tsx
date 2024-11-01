import StatsCard from "@/components/Dashboard/StatsCard";
import DevelopmentActivity from "@/components/Dashboard/DevelopmentActivity";
import PieChart from "@/components/Dashboard/PieChart";
import FeedbackCard from "./FeedbackCard";
import DonutChart from "./DonutChart";

const Dashboard = () => {
  return (
    <div className="grid gap-4 container">
      <h1 className="text-gray-600">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <StatsCard title="New Tickets" value="43" change="+6%" />
        <StatsCard title="Closed Today" value="17" change="-3%" />
        <StatsCard title="New Replies" value="7" change="+9%" />
        <StatsCard title="Followers" value="27.3k" change="+3%" />
        <StatsCard title="Daily Earnings" value="$95" change="-2%" />
        <StatsCard title="Products" value="621" change="-1%" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <DevelopmentActivity />
        <div className="w-full">
          <h2 className="p-3 border border-blue-300 bg-blue-200/70 rounded-[3px] mb-4 text-sm w-full">
            <strong>Read our documentation</strong> with code samples
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <DonutChart />
            <PieChart />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FeedbackCard title="New Feedback" />
        <FeedbackCard title="Today Profit" />
      </div>
    </div>
  );
};

export default Dashboard;