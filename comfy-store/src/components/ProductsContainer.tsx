import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { LayoutGrid, List } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { type ProductsResponse } from "@/utils";
import ProductsList from "./ProductsList";
import ProductsGrid from "./ProductsGrid";

export default function ProductsContainer() {
  const { meta } = useLoaderData() as ProductsResponse;
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  return (
    <>
      <section>
        <div className="flex justify-between items-center mt-8">
          <h4 className="font-medium text-md">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
          <div className="flex gap-x-4">
            <Button
              onClick={() => setLayout("grid")}
              variant={layout === "grid" ? "default" : "ghost"}
              size="icon"
            >
              <LayoutGrid />
            </Button>
            <Button
              onClick={() => setLayout("list")}
              size="icon"
              variant={layout === "list" ? "default" : "ghost"}
            >
              <List />
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>

      <div>
        {totalProducts === 0 ? (
          <h5>Sorry, no products matched your search...</h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
}
