import { useState } from "react";
import { dummyJobs } from "../../components/data";
import { FiEye, FiMessageCircle, FiSearch, FiThumbsUp } from "react-icons/fi";
import Header from "../../layouts/partials/Header";
import { Link } from "react-router-dom";
export interface Comment {
  id: number;
  user: string;
  avatar: string;
  comment: string;
  dateAndTime: string;
  replies?: Comment[]; // Nested replies
}

export interface JobProps {
  id: number;
  title: string;
  category: string;
  description?:string;
  price?:number;
  location: string;
  urgency: "Urgent" | "Normal" | "Low";
  images: string[];
  dateAndTime: string;
  likes: number;
  comments: number;
  likedUsers: { id: number; name: string; avatar: string }[];
  commentsList: Comment[];
  postedBy: string;
}
const Jobs = () => {

  const [jobs, _] = useState<JobProps[]>(dummyJobs);
  return (
   <div>
      <Header header="Manage Jobs" link="/" />

      <div className="max-w-screen-2xl mx-auto px-4 py-6">
        {/* Search + Add Job */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-96">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        {/* Jobs Table */}
        <div className="overflow-x-auto bg-white rounded-xl border border-gray-200/70">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-200/70">
              <tr>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Urgency</th>
                <th className="px-6 py-3">Date & Time</th>
                <th className="px-6 py-3">Likes / Comments</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {jobs.map((job) => (
                <tr
                  key={job.id}
                  className="group hover:bg-gray-50/60 transition-colors"
                >
                  {/* Title */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={job.images[0]}
                        alt={job.title}
                        className="w-11 h-11 rounded-lg object-cover border border-gray-200"
                      />
                      <div>
                        <p className="font-medium text-gray-800 leading-tight">
                          {job.title}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{job.category}</td>
                  <td className="px-6 py-4 text-gray-500">{job.location}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-lg text-sm font-medium ${
                        job.urgency === "Urgent"
                          ? "bg-red-50 text-red-700"
                          : job.urgency === "Normal"
                          ? "bg-yellow-50 text-yellow-700"
                          : "bg-green-50 text-green-700"
                      }`}
                    >
                      {job.urgency}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
                    {job.dateAndTime}
                  </td>

                  <td className="px-6 py-4 text-gray-500 whitespace-nowrap flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <FiThumbsUp />
                      <span>{job.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMessageCircle />
                      <span>{job.comments}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3">
            <Link
              to={`/job/${job.id}`}
              className="text-gray-400 hover:text-gray-600"
            >
              <FiEye size={20} />
            </Link>
          </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Jobs