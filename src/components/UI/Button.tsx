import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<Props> = ({
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "px-4 py-2.5 rounded-lg text-sm font-medium transition";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary/90",
    secondary:
      "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
    />
  );
};

export default Button;
