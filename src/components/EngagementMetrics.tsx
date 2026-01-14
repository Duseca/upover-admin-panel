import { FiThumbsUp, FiMessageCircle, FiEye } from "react-icons/fi";
import type { JobProps } from "../pages/Jobs/Jobs";
const EngagementMetrics = ({ job }: { job: JobProps }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
    <h2 className="text-xl font-bold text-gray-900 mb-6">Engagement Metrics</h2>

    <div className="grid grid-cols-3 gap-6">
      {[
        { icon: <FiThumbsUp className="w-6 h-6 text-white" />, value: job.likes, label: "Likes", color: "blue" },
        { icon: <FiMessageCircle className="w-6 h-6 text-white" />, value: job.comments, label: "Comments", color: "green" },
        { icon: <FiEye className="w-6 h-6 text-white" />, value: "1.2k", label: "Views", color: "purple" },
      ].map((metric) => (
        <div key={metric.label} className={`bg-gradient-to-br from-${metric.color}-50 to-${metric.color}-100 rounded-xl p-5`}>
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg bg-${metric.color}-500 flex items-center justify-center`}>
              {metric.icon}
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
              <p className="text-sm text-gray-600">{metric.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EngagementMetrics;
