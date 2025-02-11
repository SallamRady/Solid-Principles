import ErrorComponent from "./components/Error";
import LoadingComponent from "./components/Loading";
import ProductsList from "./components/ProductsList";
import useFetchProductsData from "./hooks/useFetchProductsData";

export default function ProductsPage() {
  const { data: products, isLoading, isError } = useFetchProductsData();

  console.log("productsproductsproducts", products);
  return (
    <div>
      <h1>Products List</h1>
      {isLoading && <LoadingComponent />}
      {isError && <ErrorComponent />}
      {products && <ProductsList products={products} />}
    </div>
  );
}
