import { FiEye, FiSearch, FiTrash } from "react-icons/fi"
import { Link } from "react-router-dom"
import { servicesData } from "../../components/data"
import Header from "../../layouts/partials/Header"
import { useState } from "react"
import DeleteModal from "../../components/Modals/DeleteModal"


const Services = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  return (
     <div>
      <Header header="Manage Services" link="" />
      <div className="max-w-screen-2xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-96">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-xl border border-gray-200/70">
  <table className="w-full text-left text-sm">
    <thead className="bg-gray-50 border-b border-gray-200/70">
      <tr>
        <th className="px-6 py-3">Service Name</th>
        <th className="px-6 py-3">Type</th>
        <th className="px-6 py-3">Price / Hour</th>
        <th className="px-6 py-3">Details</th>
        <th className="px-6 py-3">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200/60">
      {servicesData.map((service) => (
        <tr
          key={service.id}
          className="bg-white hover:bg-gray-50 transition-colors duration-150 ease-in-out"
        >
          <td className="px-6 py-3 font-medium text-gray-800 ">{service.name}</td>
          <td className="px-6 py-3 text-gray-500">{service.type}</td>
          <td className="px-6 py-3 text-gray-500">${service.pricePerHour}</td>
          <td className="px-6 py-3 text-gray-500 truncate max-w-xs">{service.details}</td>
          <td className="px-6 py-3">
            <div className="flex justify-start items-center gap-1">
            <Link
              to={`/service/${service.id}`}
              className="text-gray-400 hover:text-gray-600"
            >
              <FiEye size={20} />
            </Link>
             <button
                                        onClick={() => setIsDeleteModalOpen(true)}
                                        className="p-2 rounded-md cursor-pointer  text-gray-400 
                                        hover:text-red-600 hover:bg-red-50 
                                        transition-all"
                                      >
                                        <FiTrash />
                                      </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
 <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        entityType="Service"
      />
      </div>
    </div>
  )
}

export default Services