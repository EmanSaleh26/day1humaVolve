interface PaginationProps {
    page: number; // 1-based current page
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null;
  
    return (
      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>
  
        <span className="px-2 text-sm text-neutral-600">
          Page {page} of {totalPages}
        </span>
  
        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    );
  }
  