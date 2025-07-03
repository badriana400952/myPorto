import clsx from "clsx";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const baseStyles =
  "inline-flex items-center justify-center font-medium rounded transition-colors  disabled:opacity-50 disabled:pointer-events-none";

const variantClasses = {
  filed: "bg-[#0079f8] text-white hover:bg-blue-600 ",
  default:
    "bg-white text-gray-900 rounded-md border border-gray-300 hover:border-gray-50",
  outline:
    "border bg-transparent border-gray-600 border-2 text-gray-900 rounded-md",
};

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

export type ButtonProps = React.ComponentPropsWithRef<"button"> & {
  as?: React.ElementType;
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  className?: string;
  children?: React.ReactNode;
};
export const Button: React.FC<ButtonProps> = forwardRef(
  (
    {
      as: Component = "button",
      variant = "default",
      size = "md",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={twMerge(
          clsx(
            baseStyles,
            variantClasses[variant],
            sizeClasses[size],
            className
          )
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";
