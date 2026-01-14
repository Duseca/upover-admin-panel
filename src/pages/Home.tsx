
import { Link } from "react-router-dom"
import UniversalChart from "../components/Chart"
import Header from "../layouts/partials/Header"
import {  FaUser } from "react-icons/fa"
import { RiBriefcaseLine, RiListCheck2, RiServiceLine } from "react-icons/ri"
const Home = () => {
  return (
    <div>
      <Header header="Dashboard" link="" />
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Card
            title="Users"
            count={5}
            icon={FaUser}
            link="/user"
          />
             <Card
            title="Category"
            count={2}
            icon={RiListCheck2}
            link="/category"
          />
          <Card
            title="Service"
            count={3}
            icon={RiServiceLine}
            link="/service"
          />
          <Card
            title="Jobs"
            count={3}
            icon={RiBriefcaseLine}
            link="/job"
          />
        </div>
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
  <UniversalChart
    type="multi-line"
    title="User Engagement Overview"
    subtitle="Last 6 Months"
    height={350}
    data={[
      { month: "Jan", likes: 420, comments: 120, shares: 50 },
      { month: "Feb", likes: 380, comments: 100, shares: 65 },
      { month: "Mar", likes: 500, comments: 200, shares: 80 },
      { month: "Apr", likes: 450, comments: 150, shares: 70 },
      { month: "May", likes: 600, comments: 250, shares: 90 },
      { month: "Jun", likes: 550, comments: 220, shares: 100 },
    ]}
    xKey="month"
    yKeys={["likes", "comments", "shares"]}
    colors={["#ADDF2F", "#1A8DFF", "#1DE1FF"]}
  />
</div>

      </div>
    </div>
  )
}

export default Home
interface CardProps {
  title: string;
  count: string | number;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
  variant?: 'primary' | 'success' | 'warning' | 'error';
}

const Card = ({ title, count, icon: Icon, link }:CardProps) => (
 <Link to={link} className="w-full group">
    <div className={`rounded-lg border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl `}>
      <div className="flex items-center justify-between">
        <div className={`rounded-full p-3 bg-primary/10`}>
          <Icon className="w-6 h-6 text-primary" />
        </div>
      
      </div>
      <div className="mt-4">
        <h4 className="text-2xl font-bold text-gray-900">{count}</h4>
        <span className="text-md font-medium text-black">{title}</span>
      </div>
      
    </div>
  </Link>
);