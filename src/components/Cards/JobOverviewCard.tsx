import type { JobProps } from "../../pages/Jobs/Jobs";

const JobOverviewCard = ({ job }: { job: JobProps }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
      <h2 className="text-xl font-bold text-gray-900">{job.title ? "Job Overview" : "Overview"}</h2>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <span
          className={`px-4 py-1.5 rounded-full text-sm font-medium ${
            job.urgency === "Urgent"
              ? "bg-red-100 text-red-700"
              : job.urgency === "Normal"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {job.urgency}
        </span>
        <span className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
          Active
        </span>
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
      {[
        { label: "Budget", value: `$${job.price}` },
        { label: "Location", value: job.location },
        { label: "Category", value: job.category },
        { label: "Posted", value: job.dateAndTime },
      ].map((stat) => (
        <div key={stat.label} className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
          <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>

    {/* Description */}
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
      <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {job.description || "No description provided."}
        </p>
      </div>
    </div>

    {/* Posted By */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-blue-50 rounded-lg border border-blue-100 gap-3">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
          <span className="text-white font-semibold text-lg">
            {job.postedBy?.charAt(0) || "U"}
          </span>
        </div>
        <div>
          <p className="text-sm text-gray-500">Posted by</p>
          <p className="font-semibold text-gray-900">{job.postedBy || "Anonymous"}</p>
        </div>
      </div>
    </div>
  </div>
);

export default JobOverviewCard;
