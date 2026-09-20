import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";

interface UseProductsParams {
  page: number; // 1-based page number, easier to reason about than raw skip
  limit: number;
  search: string;
}

/**
 * Wraps fetchProducts() in useQuery.
 *
 * The most important part here is the `queryKey`:
 * ["products", { page, limit, search }]
 *
 * React Query treats the queryKey as a cache key. Whenever page, limit,
 * or search changes, the key changes, so React Query automatically:
 *  - fires a new request
 *  - caches the result under that key
 *  - re-serves the cached result instantly if you go back to a
 *    page/search you've already fetched (no network call).
 *
 * That's what gives us "caching" for free without touching useState.
 */
export function useProducts({ page, limit, search }: UseProductsParams) {
  const skip = (page - 1) * limit;

  return useQuery({
    queryKey: ["products", { page, limit, search }],
    queryFn: () => fetchProducts({ limit, skip, search }),
    // Keeps showing the previous page's data while the next page loads,
    // instead of flashing a loading spinner on every click — much
    // smoother UX for pagination.
    placeholderData: keepPreviousData,
    staleTime: 60 * 1000, // data is "fresh" for 1 minute, avoids refetch spam
  });
}
