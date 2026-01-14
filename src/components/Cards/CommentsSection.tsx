import { FiThumbsUp, FiMessageCircle, FiMoreVertical } from "react-icons/fi";

interface Comment {
  id: number;
  user: string;
  avatar: string;
  dateAndTime: string;
  comment: string;
}

const CommentsSection = ({ comments }: { comments: Comment[] }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-gray-900">Comments ({comments.length})</h2>
      <select className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-sm">
        <option>Most Recent</option>
        <option>Most Liked</option>
        <option>Oldest</option>
      </select>
    </div>

    <div className="space-y-6">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors"
        >
          <div className="flex gap-4">
            <img
              src={comment.avatar}
              alt={comment.user}
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{comment.user}</h4>
                  <p className="text-sm text-gray-500">{comment.dateAndTime}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <FiMoreVertical className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-700 mb-4">{comment.comment}</p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
                  <FiThumbsUp className="w-4 h-4" />
                  <span className="text-sm">Like</span>
                </button>
                <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
                  <FiMessageCircle className="w-4 h-4" />
                  <span className="text-sm">Reply</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CommentsSection;
