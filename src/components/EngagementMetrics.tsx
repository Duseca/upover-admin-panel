import { FiThumbsUp, FiMessageCircle, FiEye } from "react-icons/fi";
import type { JobProps } from "../pages/Jobs/Jobs";
const EngagementMetrics = ({ job }: { job: JobProps }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
  <h2 className="text-xl font-bold text-gray-900 mb-6">Engagement Metrics</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {/* Likes */}
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
          <FiThumbsUp className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-900">{job.likes}</p>
          <p className="text-sm text-gray-600">Likes</p>
        </div>
      </div>
    </div>

    {/* Comments */}
    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center">
          <FiMessageCircle className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-900">{job.comments}</p>
          <p className="text-sm text-gray-600">Comments</p>
        </div>
      </div>
    </div>

    {/* Views */}
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center">
          <FiEye className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-900">1.2k</p>
          <p className="text-sm text-gray-600">Views</p>
        </div>
      </div>
    </div>
  </div>

  {/* Liked Users */}
  <div className="mt-8">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Liked By</h3>
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex -space-x-3 flex-wrap">
        {job.likedUsers.slice(0, 8).map((user) => (
          <img
            key={user.id}
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm hover:z-10 hover:scale-110 transition-transform"
          />
        ))}
      </div>
      {job.likedUsers.length > 8 && (
        <span className="ml-0 sm:ml-4 mt-2 sm:mt-0 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
          +{job.likedUsers.length - 8} more
        </span>
      )}
    </div>
  </div>
</div>

);

export default EngagementMetrics;
