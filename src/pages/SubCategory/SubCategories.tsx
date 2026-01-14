import { useState } from "react";
import { categoriesData, subCategoriesData } from "../../components/data";
import DeleteModal from "../../components/Modals/DeleteModal";
import SubCategoryModal from "../../components/Modals/SubCategoryModal";
import { FiEdit, FiSearch, FiTrash } from "react-icons/fi";
import Header from "../../layouts/partials/Header";
import type { Category } from "../Category/Categories";

export interface SubCategory {
  id: number;
  categoryId: number;
  title: string;
  description: string;
  image: string;
  dateAndTime: string;
}
const SubCategories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<SubCategory | null>(null);
  const [subCategories, setSubCategories] = useState<SubCategory[]>(subCategoriesData);
  const [categories, _] = useState<Category[]>(categoriesData);

  const handleAdd = () => {
    setSelectedSubCategory(null);
    setIsModalOpen(true);
  };

  const handleEdit = (item: SubCategory) => {
    setSelectedSubCategory(item);
    setIsModalOpen(true);
  };

  const handleSave = (data: SubCategory) => {
    if (selectedSubCategory) {
      setSubCategories((prev) =>
        prev.map((s) => (s.id === data.id ? data : s))
      );
    } else {
      setSubCategories((prev) => [...prev, data]);
    }
    setIsModalOpen(false);
  };
  return (
       <div>
      <Header header="Manage SubCategories" link="/categories" />

      <div className="max-w-screen-2xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-96">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search subcategories..."
              className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg"
            />
          </div>

          <button
            onClick={handleAdd}
            className="px-4 py-2.5 bg-primary text-white rounded-lg cursor-pointer"
          >
            Add SubCategory
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
                  Category
                </th>
                 <th className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {subCategories.map((item) => (
                <tr
                  key={item.id}
                  className="group hover:bg-gray-50/60 transition-colors"
                >
                  <td className="px-6 py-4 flex items-center gap-4">
                    <div>
                      <p className="font-medium text-gray-800">{item.title}</p>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    {categories.find((c) => c.id === item.categoryId)?.title || "-"}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-start gap-1">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 rounded-md cursor-pointer text-gray-400 hover:text-green-600 hover:bg-green-50 transition-all"
                      >
                        <FiEdit />
                      </button>
                      <button
                        onClick={() => setIsDeleteModalOpen(true)}
                        className="p-2 rounded-md cursor-pointer text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all"
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

      <SubCategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        subCategory={selectedSubCategory}
        categories={categories}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        entityType="SubCategory"
      />
    </div>
  )
}

export default SubCategories