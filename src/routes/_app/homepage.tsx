import { ShopByCategory } from "@/components/app/homepage/shop-by-category";
import { ProductGrid } from "@/components/app/product/product-grid";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/homepage")({
  component: RouteComponent,
  preload: true,
  preloadStaleTime: 10_000,
});

function RouteComponent() {
  return (
    <div className="p-4 flex flex-col gap-2">
      <ShopByCategory />
      <ProductGrid />
    </div>
  );
}
