import { Product } from "../../types/Product.type";

export default async function fetchProductsData() {
  const response = await fetch(`https://fakestoreapi.com/products`);
  const data = await response.json();
  return data as Product[];
}
