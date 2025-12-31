import { Product } from "@/components/app/product/product-card";
import { ProductDetailClient } from "@/components/app/product/product-detail";
import { products } from "@/lib/product-data";
import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/product/$productId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { productId: id } = Route.useParams();
  const product: Product | undefined = products.find(
    (p) => p.id === Number(id),
  );

  if (!product) {
    notFound();
  }
  if (!product) return <div>Product not found</div>;

  return <ProductDetailClient product={product} />;
}
