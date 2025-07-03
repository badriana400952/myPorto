import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  className?: string;
  children?: React.ReactNode;
}
export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <table
        ref={ref}
        className={
          (twMerge(
            clsx(
              `w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400`
            )
          ),
          className)
        }
        {...props}
      >
        {children}
      </table>
    );
  }
);

Table.displayName = "Table";

interface TheadProps extends React.HtmlHTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode;
  className?: string;
}
export const Thead: React.FC<TheadProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <thead
      className={twMerge(
        clsx(
          "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",
          className
        )
      )}
      {...props}
    >
      {children}
    </thead>
  );
};

interface TabelBodyProps
  extends React.HtmlHTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode;
  className?: string;
}
export const TabelBody: React.FC<TabelBodyProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <tbody className={twMerge(clsx(className))} {...props}>
      {children}
    </tbody>
  );
};

interface TrProps extends React.HtmlHTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  className?: string;
  scope?: string;
}
export const Tr: React.FC<TrProps> = ({ className, children, ...props }) => {
  return (
    <tr
      className={twMerge(
        clsx(
          "bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200",
          className
        )
      )}
      {...props}
    >
      {children}
    </tr>
  );
};

interface ThProps extends React.HtmlHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  className?: string;
  scope?: string;
}

export const Th: React.FC<ThProps> = ({
  children,
  className,
  scope,
  ...props
}) => {
  return (
    <th
      className={twMerge(clsx("px-6 py-3", className))}
      scope={scope}
      {...props}
    >
      {children}
    </th>
  );
};

export const Td: React.FC<React.HtmlHTMLAttributes<HTMLTableCellElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <td className={twMerge(clsx(className))} {...props}>
      {children}
    </td>
  );
};
