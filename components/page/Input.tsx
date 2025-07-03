import { clsx } from "clsx";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const variantClasses = {
  default: "bg-white text-gray-900 rounded-md border border-gray-300 ",
  filled:
    "bg-gray-200 rounded-sm text-gray-700 focus:border-none focus:ring-0 border-none ",
  ghost:
    "border-none bg-transparent border-gray-600 border-2 text-gray-900 rounded-md focus:ring-0 focus:border-none",
} as const;

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
} as const;
export type InputProps = React.ComponentPropsWithRef<"input"> & {
  as?: React.ElementType;
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  className?: string;
};

export const Input: React.FC<InputProps> = forwardRef(
  (
    {
      as: Component = "input",
      variant = "default",
      size = "md",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={twMerge(
          clsx(
            variantClasses[variant],
            sizeClasses[size as keyof typeof sizeClasses],
            className
          )
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
