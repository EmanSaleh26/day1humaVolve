// Shape of a single product exactly as DummyJSON returns it.
// We only type the fields we actually use — no need to model every field.
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }
  
  // Shape of GET /products and /products/search — both return this same envelope.
  export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }
  