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
  const getPages = () => {
    const pages: (number | string)[] = [];
    const total = Math.max(1, Math.ceil(totalPages));

    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(total - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < total - 2) pages.push("...");
      pages.push(total);
    }

    return pages;
  };

  return (
    <div className="flex items-center gap-2 p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-full shadow-lg">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        Prev
      </button>

      <div className="flex items-center gap-1">
        {getPages().map((page, idx) =>
          typeof page === "number" ? (
            <button
              key={idx}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 rounded-full text-xs font-bold transition-all flex items-center justify-center ${
                currentPage === page
                  ? "bg-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.5)] scale-110"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"
              }`}
            >
              {page}
            </button>
          ) : (
            <span
              key={idx}
              className="px-1 text-slate-400 dark:text-slate-500 text-xs font-mono select-none"
            >
              ...
            </span>
          )
        )}
      </div>

      <button
        onClick={() =>
          onPageChange(Math.min(Math.ceil(totalPages), currentPage + 1))
        }
        disabled={currentPage >= Math.ceil(totalPages)}
        className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
