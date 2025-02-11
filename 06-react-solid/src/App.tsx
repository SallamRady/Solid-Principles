import "./App.css";
import ProductsPage from "./pages/products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UsersPage from "./pages/users";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsPage />
      <UsersPage />
    </QueryClientProvider>
  );
}

export default App;
