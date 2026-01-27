import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Reusable Button component with Tailwind variants.
 * Variants: "primary", "secondary", "outline", "dark"
 * Sizes: "sm", "md", "lg"
 */
export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  disabled = false,
  type = "button",
  ...props
}) {
  const base = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl";

  const sizes = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-8 text-base",
    lg: "py-4 px-10 text-lg",
  };

  const variants = {
    primary: "bg-primary text-white border-2 border-primary hover:bg-primary/90 hover:shadow-primary/50",
    secondary: "bg-white text-black border-2 border-white hover:bg-gray-50 hover:shadow-2xl",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black",
    dark: "bg-dark text-white hover:bg-dark/80 hover:shadow-dark/50",
  };

  const state = disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "";

  const btnClass = classNames(base, sizes[size], variants[variant], state, className);

  return (
    <button type={type} className={btnClass} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
