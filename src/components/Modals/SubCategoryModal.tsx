import { useEffect, useState } from "react";
import TextInput from "../UI/TextInput";
import TextArea from "../UI/TextArea";
import Button from "../UI/Button";
import type { SubCategory } from "../../pages/SubCategory/SubCategories";
import type { Category } from "../../pages/Category/Categories";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: SubCategory) => void;
  subCategory: SubCategory | null;
  categories: Category[];
}

const SubCategoryModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSave,
  subCategory,
  categories,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState<number>(categories[0]?.id || 0);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (subCategory) {
      setTitle(subCategory.title);
      setDescription(subCategory.description);
      setCategoryId(subCategory.categoryId);
      setPreview(subCategory.image);
    } else {
      setTitle("");
      setDescription("");
      setCategoryId(categories[0]?.id || 0);
      setPreview("");
    }
  }, [subCategory, categories]);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    onSave({
      id: subCategory?.id || Date.now(),
      categoryId,
      title,
      description,
      image: preview,
      dateAndTime: new Date().toLocaleString(),
    });
  };

  return (
   <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
        <h2 className="text-lg font-semibold mb-6">
          {subCategory ? "Edit SubCategory" : "Add SubCategory"}
        </h2>

        <div className="space-y-5">
          <TextInput
            label="Title"
            placeholder="Enter subcategory title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextArea
            label="Description"
            placeholder="Short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Parent Category
            </label>
            <select
              className="p-2 rounded w-full border border-gray-200"
              value={categoryId}
              onChange={(e) => setCategoryId(Number(e.target.value))}
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>

          {/* Image Upload */}
          <label className="flex cursor-pointer gap-4 p-4 border border-dashed rounded-xl hover:border-primary">
            {preview && (
              <img
                src={preview}
                className="w-16 h-16 rounded-lg object-cover"
              />
            )}
            <div>
              <p className="font-medium">Upload image</p>
              <p className="text-sm text-gray-500">PNG / JPG</p>
            </div>
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
          </label>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryModal;
