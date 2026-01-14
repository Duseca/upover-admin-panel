import React, { useEffect, useState } from "react";
import type { Category } from "../../pages/Category/Categories";
import TextInput from "../UI/TextInput";
import Button from "../UI/Button";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (category: Category) => void;
  category: Category | null;
}

const CategoryModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSave,
  category,
}) => {
  const [title, setTitle] = useState("");
  const [hexCode, setHexCode] = useState("");
  const [_, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  useEffect(() => {
    if (!isOpen) return;

    if (category) {
      // EDIT
      setTitle(category.title);
      setPreview(category.image);
      setHexCode(category.hexCode)
      setImageFile(null);
    } else {
      // ADD
      setTitle("");
      setImageFile(null);
      setPreview("");
    }
  }, [category, isOpen]);

  

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    onSave({
      id: category?.id || Date.now(),
      title,
      hexCode,
      image: preview,
      dateAndTime: new Date().toLocaleString(),
    });
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          {category ? "Edit Category" : "Add Category"}
        </h2>

        <div className="space-y-5">
          <TextInput
            label="Title"
            placeholder="Enter category title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextInput
            label="Hex Color Code"
            placeholder="#16a34a"
            value={hexCode}
            onChange={(e) => setHexCode(e.target.value)}
          />
          {/* Image Upload */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Image
            </label>

            <div className="flex items-center gap-4">
              {preview ? (
                <img
                  src={preview}
                  className="w-16 h-16 rounded-lg object-cover border"
                  alt="Preview"
                />
              ) : (
                <div className="w-16 h-16 rounded-lg bg-gray-100 border" />
              )}

              <label
                className="
                  flex items-center w-full gap-4 p-4
                  border border-dashed border-gray-300
                  rounded-xl cursor-pointer
                  hover:border-primary hover:bg-primary/5
                  transition
                "
              >
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-lg bg-gray-100 text-gray-500
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V12m0 0V8m0 4h4m6 4V8a2 2 0 00-2-2H7a2 2 0 00-2 2v8m16 0a2 2 0 01-2 2H7a2 2 0 01-2-2"
                    />
                  </svg>
                </div>

                <div className="text-sm">
                  <p className="font-medium text-gray-700">
                    Upload category image
                  </p>
                  <p className="text-gray-500">
                    PNG, JPG up to 5MB
                  </p>
                </div>

                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>
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

export default CategoryModal;
