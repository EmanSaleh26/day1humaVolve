import type { Product, ProductsResponse } from "../types/product";

const BASE_URL = "https://dummyjson.com/products";

/**
 * Small helper so every function below doesn't repeat the same
 * "check res.ok, otherwise throw" logic.
 */
async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);

  if (!res.ok) {
    // Throwing here is what lets React Query catch it and give us
    // `isError` / `error` in the component — no try/catch needed there.
    throw new Error(`Request failed (${res.status}): ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

export interface FetchProductsParams {
  limit: number;
  skip: number;
  search?: string; // when present, we hit the /search endpoint instead
}

/**
 * Fetches a page of products. If `search` is a non-empty string it uses
 * DummyJSON's dedicated search endpoint, otherwise it uses plain pagination.
 * This is the ONLY function the "products list" hook needs to call.
 */
export function fetchProducts({
  limit,
  skip,
  search,
}: FetchProductsParams): Promise<ProductsResponse> {
  const trimmed = search?.trim();

  const url = trimmed
    ? `${BASE_URL}/search?q=${encodeURIComponent(trimmed)}&limit=${limit}&skip=${skip}`
    : `${BASE_URL}?limit=${limit}&skip=${skip}`;

  return fetchJson<ProductsResponse>(url);
}

/** Fetches a single product by id, for the details page. */
export function fetchProductById(id: string | number): Promise<Product> {
  return fetchJson<Product>(`${BASE_URL}/${id}`);
}
