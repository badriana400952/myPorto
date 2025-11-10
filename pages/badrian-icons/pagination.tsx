import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
const generatePages = () => {
  const pages: (number | string)[] = [];

  // ✅ pastikan totalPages dan currentPage bulat
  const total = Math.ceil(totalPages); // biar nggak ada desimal
  const current = Math.floor(currentPage);

  if (total <= 10) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    const left = Math.max(2, current - 2);
    const right = Math.min(total - 1, current + 2);

    pages.push(1);
    if (left > 2) pages.push("...");
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < total - 1) pages.push("...");
    pages.push(total);
  }

  return pages;
};


  const pages = generatePages();

  return (
    <div className="flex items-center gap-2">
      {pages.map((p, idx) => (
        <button
          key={idx}
          disabled={p === "..."}
          onClick={() => typeof p === "number" && onPageChange(p)}
          className={`px-3 py-1 rounded-md border ${
            currentPage === p
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-black hover:bg-gray-100"
          } ${p === "..." ? "cursor-default border-none" : "cursor-pointer"}`}
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
