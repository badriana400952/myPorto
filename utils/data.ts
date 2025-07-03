export const inputpenggunaan = `<Input
    type="text"
    id="first_name"
    className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Badriana"
    required
/>
  <Input
    type="text"
    id="first_name"
    className="w-full  bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Badriana"
    variant="filled"
    required
/>
<Input
    type="text"
    id="first_name"
    className="w-full"
    placeholder="John"
    variant="ghost"
    required
/>;
};`;

export const Tables = `import clsx from "clsx";
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
              "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
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
`;
export const tabelPenggunaan = `<Table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <Thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <Tr className="bg-gray-100 dark:bg-gray-600">
            <Th scope="col" className="px-6 py-3">
            Product name
            </Th>
            <Th scope="col" className="px-6 py-3">
            Color
            </Th>
            <Th scope="col" className="px-6 py-3">
            Category
            </Th>
            <Th scope="col" className="px-6 py-3">
            Price
            </Th>
        </Tr>
    </Thead>
    <TabelBody>
        <Tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <Th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
            Apple MacBook Pro
            </Th>
            <Td className="px-6 py-4">Silver</Td>
            <Td className="px-6 py-4">Laptop</Td>
            <Td className="px-6 py-4">$2999</Td>
        </Tr>
        <Tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <Th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
            Microsoft Surface Pro
            </Th>
            <Td className="px-6 py-4">White</Td>
            <Td className="px-6 py-4">Laptop PC</Td>
            <Td className="px-6 py-4">$1999</Td>
        </Tr>
        <Tr className="bg-white dark:bg-gray-800">
            <Th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
            Magic Mouse 2
            </Th>
            <Td className="px-6 py-4">Black</Td>
            <Td className="px-6 py-4">Accessories</Td>
            <Td className="px-6 py-4">$99</Td>
        </Tr>
    </TabelBody>
</Table>`;
