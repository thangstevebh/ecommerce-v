"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Minus, Plus, ShoppingCart, Star, Heart, Share2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { toast } from "sonner";
import { ProductCard } from "./product-card";
import { products } from "@/lib/product-data";

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  variants?: boolean;
  outOfStock?: boolean;
  sale?: boolean;
  category?: string;
  description?: string;
  ingredients?: string;
  usage?: string;
  rating?: number;
  reviewCount?: number;
}

const reviews = [
  {
    id: 1,
    author: "Nguyễn Thị Mai",
    rating: 5,
    date: "15/12/2024",
    comment:
      "Sản phẩm rất tốt, chất lượng cao. Tôi rất hài lòng với mùi thơm tự nhiên và bao bì đẹp.",
    verified: true,
  },
  {
    id: 2,
    author: "Trần Văn Nam",
    rating: 4,
    date: "10/12/2024",
    comment:
      "Dầu thơm và nguyên chất. Giá hơi cao nhưng xứng đáng với chất lượng.",
    verified: true,
  },
  {
    id: 3,
    author: "Lê Thị Hương",
    rating: 5,
    date: "5/12/2024",
    comment:
      "Đã mua nhiều lần, sản phẩm luôn đảm bảo chất lượng. Giao hàng nhanh.",
    verified: true,
  },
];

export function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    toast.success(`Đã thêm ${quantity} x ${product.name} vào giỏ hàng`);
  };

  const recommendedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const rating = product.rating || 4.5;
  const reviewCount = product.reviewCount || 28;

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <Link to="/" className="hover:text-primary transition-colors">
              Sản phẩm
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted/30">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="object-cover"
              />
              {product.sale && (
                <Badge className="absolute top-4 right-4 bg-red-500 hover:bg-red-600">
                  Giảm giá
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {rating} ({reviewCount} đánh giá)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold text-primary">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>

              {product.outOfStock ? (
                <Badge
                  variant="outline"
                  className="text-red-500 border-red-500"
                >
                  Hết hàng
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="text-green-600 border-green-600"
                >
                  Còn hàng
                </Badge>
              )}
            </div>

            <Separator />

            {/* Description */}
            <div>
              <p className="text-muted-foreground leading-relaxed">
                {product.description ||
                  "Sản phẩm thiên nhiên 100%, được sản xuất từ nguyên liệu hữu cơ cao cấp. Đảm bảo chất lượng và an toàn cho sức khỏe."}
              </p>
            </div>

            <Separator />

            {/* Quantity & Add to Cart */}
            {!product.outOfStock && (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Số lượng:</span>
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    className="flex-1"
                    size="lg"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Thêm vào giỏ hàng
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 bg-transparent"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart
                      className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`}
                    />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 bg-transparent"
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            )}

            <Separator />

            {/* Product Meta */}
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="text-muted-foreground">Danh mục:</span>
                <span className="font-medium">
                  {product.category || "Gia vị"}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">Mã sản phẩm:</span>
                <span className="font-medium">
                  SP{product.id.toString().padStart(4, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="description"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                >
                  Mô tả
                </TabsTrigger>
                <TabsTrigger
                  value="ingredients"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                >
                  Thành phần
                </TabsTrigger>
                <TabsTrigger
                  value="usage"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                >
                  Cách sử dụng
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                >
                  Đánh giá ({reviewCount})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <div className="prose prose-sm max-w-none">
                  <p>
                    {product.description ||
                      "Sản phẩm được sản xuất từ nguyên liệu thiên nhiên 100%, không chứa chất bảo quản hay phẩm màu nhân tạo. Quy trình sản xuất khép kín đảm bảo vệ sinh an toàn thực phẩm."}
                  </p>
                  <h4 className="font-semibold mt-4 mb-2">Đặc điểm nổi bật:</h4>
                  <ul>
                    <li>100% nguyên liệu tự nhiên, hữu cơ</li>
                    <li>Không chứa chất bảo quản</li>
                    <li>Được kiểm định chất lượng nghiêm ngặt</li>
                    <li>Bao bì thân thiện với môi trường</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="ingredients" className="mt-6">
                <div className="prose prose-sm max-w-none">
                  <p>
                    {product.ingredients ||
                      "Thành phần: 100% nguyên liệu tự nhiên được chọn lọc kỹ càng."}
                  </p>
                  <h4 className="font-semibold mt-4 mb-2">
                    Giá trị dinh dưỡng:
                  </h4>
                  <ul>
                    <li>Giàu vitamin và khoáng chất</li>
                    <li>Chứa chất chống oxi hóa tự nhiên</li>
                    <li>Không cholesterol</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="usage" className="mt-6">
                <div className="prose prose-sm max-w-none">
                  <p>
                    {product.usage ||
                      "Sử dụng theo nhu cầu cá nhân. Bảo quản nơi khô ráo, tránh ánh nắng trực tiếp."}
                  </p>
                  <h4 className="font-semibold mt-4 mb-2">
                    Hướng dẫn bảo quản:
                  </h4>
                  <ul>
                    <li>Bảo quản ở nơi khô ráo, thoáng mát</li>
                    <li>Tránh ánh nắng trực tiếp</li>
                    <li>Đậy kín nắp sau khi sử dụng</li>
                    <li>Sử dụng trong vòng 6 tháng sau khi mở nắp</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {/* Overall Rating */}
                  <div className="flex items-start gap-8 pb-6 border-b">
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">{rating}</div>
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {reviewCount} đánh giá
                      </div>
                    </div>

                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-3">
                          <span className="text-sm w-8">{star} sao</span>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400"
                              style={{
                                width: `${star === 5 ? 70 : star === 4 ? 20 : 10}%`,
                              }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground w-12 text-right">
                            {star === 5 ? 70 : star === 4 ? 20 : 10}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="border-b pb-6 last:border-0"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">
                                {review.author}
                              </span>
                              {review.verified && (
                                <Badge variant="outline" className="text-xs">
                                  Đã mua hàng
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {review.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Recommended Products */}
        {recommendedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Sản phẩm liên quan</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {recommendedProducts.map((product) => (
                <Link
                  to={`/product/$productId`}
                  params={{ productId: `${product.id}` }}
                  key={product.id}
                >
                  <ProductCard key={product.id} product={product} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
