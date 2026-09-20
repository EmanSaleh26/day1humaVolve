import { Link, useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";

export function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { data: product, isPending, isError, error } = useProduct(id);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link to="/products" className="mb-6 inline-block text-sm text-neutral-500 hover:text-neutral-900">
        ← Back to products
      </Link>

      {isPending && (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="aspect-square animate-pulse rounded-xl bg-neutral-100" />
          <div className="space-y-3">
            <div className="h-6 w-2/3 animate-pulse rounded bg-neutral-100" />
            <div className="h-4 w-1/3 animate-pulse rounded bg-neutral-100" />
            <div className="h-20 animate-pulse rounded bg-neutral-100" />
          </div>
        </div>
      )}

      {isError && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-6 text-center text-red-700">
          <p className="font-medium">Couldn't load this product.</p>
          <p className="text-sm">{error.message}</p>
        </div>
      )}

      {product && (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full rounded-xl border border-neutral-200 object-cover"
          />

          <div>
            <p className="text-sm uppercase text-neutral-400">{product.category}</p>
            <h1 className="mt-1 text-2xl font-bold">{product.title}</h1>

            <div className="mt-3 flex items-center gap-3">
              <span className="text-2xl font-semibold">${product.price}</span>
              <span className="flex items-center gap-1 text-neutral-600">
                ★ {product.rating.toFixed(1)}
              </span>
            </div>

            <p className="mt-4 leading-relaxed text-neutral-700">{product.description}</p>

            <dl className="mt-6 grid grid-cols-2 gap-y-2 text-sm">
              <dt className="text-neutral-400">Brand</dt>
              <dd>{product.brand}</dd>
              <dt className="text-neutral-400">Stock</dt>
              <dd>{product.stock} units</dd>
              <dt className="text-neutral-400">Discount</dt>
              <dd>{product.discountPercentage}%</dd>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
