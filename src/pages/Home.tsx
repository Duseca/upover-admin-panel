
import { Link } from "react-router-dom"
import UniversalChart from "../components/Chart"
import Header from "../layouts/partials/Header"
import {  FaUser } from "react-icons/fa"
import { MdSportsGymnastics, MdStorefront } from "react-icons/md"
import { VscQuestion } from "react-icons/vsc"
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
            link="/users"
          />
             <Card
            title=""
            count={2}
            icon={MdSportsGymnastics}
            link="/coaches"
          />
          <Card
            title=""
            count={3}
            icon={MdStorefront}
            link="/vendors"
          />
          <Card
            title=""
            count={3}
            icon={VscQuestion}
            link="/faqs"
          />
        </div>
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
          <UniversalChart
            type="multi-line"
            title="Sales Overview"
            subtitle="Last 6 Months"
            height={350}
            data={[
              { month: "Jan", sales: 400, revenue: 240 },
              { month: "Feb", sales: 300, revenue: 139 },
              { month: "Mar", sales: 500, revenue: 421 },
              { month: "Apr", sales: 250, revenue: 200 },
            ]}
            xKey="month"
            yKeys={["sales", "revenue"]}
            colors={["#16a34a", "#2563eb"]}
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