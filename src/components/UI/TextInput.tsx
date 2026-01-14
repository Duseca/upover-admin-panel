import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextInput: React.FC<Props> = ({ label, ...props }) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="text-sm font-medium text-gray-600">
          {label}
        </label>
      )}
      <input
        {...props}
        className="
          w-full rounded-lg border border-gray-200 
          px-3 py-2.5 text-sm
          focus:outline-none focus:ring-2 focus:ring-primary/20
          focus:border-primary transition
        "
      />
    </div>
  );
};

export default TextInput;
