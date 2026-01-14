import { useState } from "react";
import Header from "../../layouts/partials/Header";
import { FiEdit, FiSearch, FiTrash } from "react-icons/fi";
import DeleteModal from "../../components/Modals/DeleteModal";
import CategoryModal from "../../components/Modals/CategoryModal";
import { categoriesData } from "../../components/data";
export interface Category {
  id: number;
  title: string;
  hexCode: string;
  image: string;
  dateAndTime: string;
}

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

   const [categories, setCategories] =
    useState<Category[]>(categoriesData);

  const handleAddCategory = () => {
    setSelectedCategory(null);
    setIsModalOpen(true);
  };

  const handleEditCategory = (category: Category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleSaveCategory = (data: Category) => {
    if (selectedCategory) {
      setCategories((prev) =>
        prev.map((cat) => (cat.id === data.id ? data : cat))
      );
    } else {
      setCategories((prev) => [...prev, data]);
    }
    setIsModalOpen(false);
  };
  return (
   <div>
      <Header header="Manage Categories" link='/' />

      <div className="max-w-screen-2xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-96">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg"
            />
          </div>

          <button
            onClick={handleAddCategory}
            className="px-4 py-2.5 bg-primary text-white rounded-lg"
          >
            Add Category
          </button>
        </div>

        <div className="overflow-x-auto bg-white rounded-xl border border-gray-200/70">
  <table className="w-full text-left text-sm">
    <thead className="bg-gray-50 border-b border-gray-200/70">
      <tr>
         <th className="px-6 py-3">
          Title
        </th>
         <th className="px-6 py-3">
          Date & Time
        </th>
         <th className="px-6 py-3">
          Actions
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-100">
      {categories.map((item) => (
        <tr
          key={item.id}
          className="group hover:bg-gray-50/60 transition-colors"
        >
          {/* Title */}
         <td className="px-6 py-4">
  <div className="flex items-center gap-4">
    {/* Image */}
    <img
      src={item.image}
      alt={item.title}
      className="w-11 h-11 rounded-lg object-cover border border-gray-200"
    />

    {/* Title + Color */}
    <div className="space-y-1">
      <p className="font-medium text-gray-800 leading-tight">
        {item.title}
      </p>

      {/* HEX COLOR BADGE */}
      <div className="flex items-center gap-2">
        {/* Color Dot */}
        <span
          className="w-3 h-3 rounded-full border"
          style={{ backgroundColor: item.hexCode }}
        />

        {/* Hex Code Pill */}
        <span
          className="text-xs font-mono px-2 py-0.5 rounded-full border cursor-pointer
          transition-all duration-200 hover:scale-105"
          style={{
            color: item.hexCode,
            borderColor: item.hexCode,
            backgroundColor: `${item.hexCode}15`, // subtle tint
          }}
          title="Click to copy"
          onClick={() => navigator.clipboard.writeText(item.hexCode)}
        >
          {item.hexCode}
        </span>
      </div>
    </div>
  </div>
</td>

          <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
            {item.dateAndTime}
          </td>
          <td className="px-6 py-4">
            <div className="flex justify-start gap-1">
              <button
                onClick={() => handleEditCategory(item)}
                className="p-2 rounded-md cursor-pointer text-gray-400 
                hover:text-green-600 hover:bg-green-50 
                transition-all"
              >
                <FiEdit />
              </button>
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

      </div>

      <CategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveCategory}
        category={selectedCategory}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        entityType="Category"
      />
    </div>
  )
}

export default Categories