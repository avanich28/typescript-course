import { FeaturedProducts, Hero } from "@/components";
import { type ProductsResponse, customFetch } from "@/utils";
import { type LoaderFunction, useLoaderData } from "react-router-dom";

const url = "/products?featured=true";

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);

  return { ...response.data };
};

function Landing() {
  const result = useLoaderData() as ProductsResponse;
  console.log(result);

  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export default Landing;
