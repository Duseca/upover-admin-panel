import { FiEye, FiSearch } from "react-icons/fi"
import { usersData } from "../../components/data"
import Header from "../../layouts/partials/Header"
import { Link } from "react-router-dom"

const Users = () => {
  return (
    <div>
      <Header header={"Manage Users"} link=''/>
       <div className="max-w-screen-2xl mx-auto px-4 py-6">
         <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
                  <div className="relative w-full sm:w-96">
                    <FiSearch className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg"
                    />
                  </div>
    
                </div>
        <div className="my-3">
        <div className="overflow-x-auto bg-white rounded-xl border border-gray-200/70">
        <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 border-b border-gray-200/70">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Phn. No</th>
                  <th className="px-6 py-3">Address</th>
                  <th className="px-6 py-3">User Type</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/60">
                {usersData?.map((user) => (
                  <tr
                    key={user.id}
                    className="bg-white hover:bg-gray-50 transition-colors duration-150 ease-in-out"
                  >
                    <td className="px-6 py-3 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img
                          src={user.profilePicture}
                          alt="User"
                          className="w-9 h-9 rounded-full object-cover ring-2 ring-gray-200/50"
                        />
                        <span className="font-medium text-gray-800">
                          {user.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <span className="inline-flex items-center">
                        {user.email}
                       
                      </span>
                    </td>
                 
                    <td className="px-6 py-3 text-gray-700/90">
                      {user.phoneNumber}
                    </td>
                    <td className="px-6 py-3 text-gray-700/90">
                      {user.address}
                    </td>                    
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          user.type === "Admin"
                            ? "bg-purple-100 text-purple-800"
                            : user.type === "Premium"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {user.type}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : user.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-gray-700/90">
  <Link to={`/user/${user.id}`} className="text-gray-400 hover:text-gray-600">
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
    </div>
  )
}

export default Users