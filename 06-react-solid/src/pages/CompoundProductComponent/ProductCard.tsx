import { createContext, PropsWithChildren, useContext } from "react";
import { Product } from "../../types/Product.type";

// 1 - create context
type ProductCartCxtType = {
  product: Product;
};

const ProductCartCxt = createContext<ProductCartCxtType | undefined>(undefined);

// 2 create custom hook to fasilitate react to context
const useProductCartCxt = () => {
  const context = useContext(ProductCartCxt);
  if (!context) {
    throw Error("useProductCartCxt must be within ProductCard");
  }
  return context;
};

// 4 send children in props
type ProductCardProps = PropsWithChildren & {
  product: Product;
};
export default function ProductCard(props: ProductCardProps) {
  const { product, children } = props;
  return (
    <ProductCartCxt.Provider value={{ product }}>
      <div>{children}</div>
    </ProductCartCxt.Provider>
  );
}

// 3 make our component to parts used named function
ProductCard.Title = function ProductCardTitle() {
  const { product } = useProductCartCxt();
  return <h2>{product.title}</h2>;
};

ProductCard.Description = function ProductCardDescription() {
  const { product } = useProductCartCxt();
  return <p>{product.description}</p>;
};

ProductCard.Category = function ProductCardCategory() {
  const { product } = useProductCartCxt();
  return <p>Category {product.category}</p>;
};

ProductCard.Actions = function ProductCardActions() {
  return (
    <div>
      <button>Read More</button>
      <button>Comments</button>
    </div>
  );
};
