import { Image } from "@unpic/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  variants?: boolean;
  outOfStock?: boolean;
  sale?: boolean;
  category?: string;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="relative aspect-square overflow-hidden bg-secondary/30">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.outOfStock && (
            <div className="absolute top-2 right-2 bg-muted text-muted-foreground px-2 py-1 text-xs font-medium rounded">
              Hết hàng
            </div>
          )}
        </div>

        <div className="p-3 md:p-4 space-y-2 flex flex-col grow">
          <h3 className="font-medium text-sm md:text-base leading-snug hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>

          <div className="flex items-baseline gap-2 flex-wrap">
            {product.originalPrice && (
              <span className="text-xs md:text-sm text-muted-foreground line-through">
                {product.originalPrice}
              </span>
            )}
            <span className="text-sm md:text-base font-semibold text-primary">
              {product.price}
            </span>
          </div>

          <div className="grow">
            {product.variants && (
              <p className="text-xs text-muted-foreground min-h-6 line-clamp-3">
                Sản phẩm này có nhiều biến thể. Các tùy chọn có thể được chọn
                trên trang sản phẩm Sản phẩm này có nhiều biến thể. Các tùy chọn
                có thể được chọn trên trang sản phẩm
              </p>
            )}

            {product.category && (
              <p className="text-xs text-muted-foreground mt-3">
                Danh mục: {product.category}
              </p>
            )}
          </div>

          <Button
            className="w-full text-xs md:text-sm mt-auto"
            variant={product.outOfStock ? "outline" : "default"}
            size="sm"
            disabled={product.outOfStock}
          >
            {product.outOfStock ? "Đọc tiếp" : "Lựa chọn tùy chọn"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
