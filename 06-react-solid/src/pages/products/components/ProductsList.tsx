import { Product } from "../../../types/Product.type";
import ProductCard from "./ProductCard";

type ProductsListProps = {
  products: Product[];
};

/**
 * Responsile for taking list of products and rerendering thiem as `ProductCard`s
 * 
 * - responsible for passing `product` props to ProductCard component
 */
export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
