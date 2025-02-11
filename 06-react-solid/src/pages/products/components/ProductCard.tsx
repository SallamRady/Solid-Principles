import { Product } from "../../../types/Product.type";

type ProductCardProps = {
  product: Product;
};
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <hr />
    </div>
  );
}
