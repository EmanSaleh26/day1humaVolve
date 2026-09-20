import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden py-0 transition-shadow hover:shadow-md">
      <div className="aspect-square w-full bg-neutral-100">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <CardHeader className="pt-4">
        <CardTitle>{product.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex items-center justify-between text-sm">
        <span className="text-lg font-semibold">${product.price}</span>
        <span className="flex items-center gap-1 text-neutral-600">
          ★ {product.rating.toFixed(1)}
        </span>
      </CardContent>

      <CardFooter className="pb-4">
        <Link
          to={`/products/${product.id}`}
          className="w-full rounded-md bg-neutral-900 px-3 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          View details
        </Link>
      </CardFooter>
    </Card>
  );
}
