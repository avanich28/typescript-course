import { Filters, PaginationContainer, ProductsContainer } from "@/components";
import {
  customFetch,
  type ProductsResponse,
  type ProductsResponseWithParams,
} from "../utils";
import { type LoaderFunction } from "react-router-dom";

const url = "/products";

// https://reactrouter.com/en/main/components/form
export const loader: LoaderFunction = async ({
  request, // IMPT
}): Promise<ProductsResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(request.url);
  console.log(params);

  const response = await customFetch<ProductsResponse>(url, {
    params,
  });

  console.log(response.data);

  return { ...response.data, params };
};

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

export default Products;
