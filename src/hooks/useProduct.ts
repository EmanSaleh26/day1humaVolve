import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../api/products";

/**
 * Fetches one product by id for the details page.
 * queryKey includes the id so each product id gets its own cache entry —
 * e.g. navigating between product 1 and product 2 and back to 1 will
 * re-use the cached product 1 instantly.
 */
export function useProduct(id: string | undefined) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id as string),
    enabled: Boolean(id), // don't fire the request until we actually have an id
    staleTime: 60 * 1000,
  });
}
