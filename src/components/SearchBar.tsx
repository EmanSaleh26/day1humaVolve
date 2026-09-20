import { useEffect, useState } from "react";

interface SearchBarProps {
  value: string; // the "committed" search term that's actually driving the query
  onSearch: (value: string) => void;
}

export function SearchBar({ value, onSearch }: SearchBarProps) {
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(draft);
    }, 400);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draft]);

  return (
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="Search products…"
        className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
      />
      {draft && (
        <button
          type="button"
          onClick={() => setDraft("")}
          aria-label="Clear search"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
        >
          ✕
        </button>
      )}
    </div>
  );
}
