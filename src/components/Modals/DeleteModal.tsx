import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  entityType: string;
}

const DeleteModal: React.FC<Props> = ({
  isOpen,
  onClose,
  entityType,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-sm w-full">
        <h3 className="text-lg font-semibold mb-2">
          Delete {entityType}
        </h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this{" "}
          {entityType.toLowerCase()}?
        </p>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="border px-4 py-2 rounded">
            Cancel
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
