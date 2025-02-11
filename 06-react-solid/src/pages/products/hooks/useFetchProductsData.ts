import { useQuery } from "@tanstack/react-query";
import fetchProductsData from "../../../utils/api/fetchProducts";

export default function useFetchProductsData() {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchProductsData,
  });
}
