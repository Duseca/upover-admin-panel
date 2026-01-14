import { FiMessageCircle, FiEye } from "react-icons/fi";

const ActivityLogCard = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
    <div className="space-y-4">
      <ActivityItem color="green" icon={
        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      } text="Job approved by Admin" time="2 hours ago" />

      <ActivityItem color="blue" icon={<FiMessageCircle className="w-4 h-4 text-blue-600" />} text="New comment added" time="5 hours ago" />

      <ActivityItem color="yellow" icon={<FiEye className="w-4 h-4 text-yellow-600" />} text="View count increased" time="Yesterday" />
    </div>
  </div>
);

const ActivityItem = ({ color, icon, text, time }: { color: string; icon: React.ReactNode; text: string; time: string }) => (
  <div className="flex items-center gap-3">
    <div className={`w-8 h-8 rounded-full bg-${color}-100 flex items-center justify-center`}>
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-700">{text}</p>
      <p className="text-xs text-gray-500">{time}</p>
    </div>
  </div>
);

export default ActivityLogCard;
