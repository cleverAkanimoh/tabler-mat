import StatsCard from "@/components/StatsCard";
import DevelopmentActivity from "@/components/DevelopmentActivity";
import PieChart from "@/components/PieChart";
import FeedbackCard from "@/components/FeedbackCard";

const Dashboard = () => {
  return (
    <div className="p-4 grid gap-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <StatsCard title="New Tickets" value="43" change="+6%" />
        <StatsCard title="Closed Today" value="17" change="-3%" />
        <StatsCard title="New Replies" value="7" change="+9%" />
        <StatsCard title="Followers" value="27.3k" change="+3%" />
        <StatsCard title="Daily Earnings" value="$95" change="-2%" />
        <StatsCard title="Products" value="621" change="-1%" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DevelopmentActivity />
        {/* <PieChart title="Category Distribution" data={[37, 43, 20]} /> */}
        <PieChart title="Product Shares" data={[47.4, 33.1, 10.5, 9]} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FeedbackCard title="New Feedback" />
        <FeedbackCard title="Today Profit" />
      </div>
    </div>
  );
};

export default Dashboard;
