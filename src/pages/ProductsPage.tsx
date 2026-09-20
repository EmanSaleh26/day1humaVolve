import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "../components/ProductCard";
import { SearchBar } from "../components/SearchBar";
import { Pagination } from "../components/Pagination";

const LIMIT = 12;

export function ProductsPage() {
  // These two are the only pieces of "server-request parameters" state
  // we own locally. They are NOT the data itself — React Query owns that.
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, isPending, isError, error, isFetching } = useProducts({
    page,
    limit: LIMIT,
    search,
  });

  const totalPages = data ? Math.ceil(data.total / LIMIT) : 0;

  function handleSearch(term: string) {
    setSearch(term);
    setPage(1); // always reset to page 1 when the search term changes
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">Products</h1>
        <SearchBar value={search} onSearch={handleSearch} />
      </div>

      {/* Loading state — first load only, no cached data to show yet */}
      {isPending && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: LIMIT }).map((_, i) => (
            <div
              key={i}
              className="aspect-[3/4] animate-pulse rounded-xl bg-neutral-100"
            />
          ))}
        </div>
      )}

      {/* Error state */}
      {isError && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-6 text-center text-red-700">
          <p className="font-medium">Couldn't load products.</p>
          <p className="text-sm">{error.message}</p>
        </div>
      )}

      {/* Empty search result state */}
      {data && data.products.length === 0 && (
        <div className="rounded-md border border-neutral-200 px-4 py-12 text-center text-neutral-500">
          No products found for "{search}".
        </div>
      )}

      {/* Success state */}
      {data && data.products.length > 0 && (
        <>
          <div
            className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ${
              isFetching ? "opacity-60" : ""
            }`}
          >
            {data.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8">
            <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
          </div>
        </>
      )}
    </div>
  );
}
