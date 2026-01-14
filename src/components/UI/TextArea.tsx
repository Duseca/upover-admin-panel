import React from "react";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea: React.FC<Props> = ({ label, ...props }) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="text-sm font-medium text-gray-600">
          {label}
        </label>
      )}
      <textarea
        {...props}
        rows={4}
        className="
          w-full rounded-lg border border-gray-200 
          px-3 py-2.5 text-sm resize-none
          focus:outline-none focus:ring-2 focus:ring-primary/20
          focus:border-primary transition
        "
      />
    </div>
  );
};

export default TextArea;
