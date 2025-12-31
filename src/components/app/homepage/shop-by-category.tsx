import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";

const categories = [
  {
    name: "Gia Vị Thô",
    image: "/category-spices.jpg",
    href: "/gia-vi-tho",
  },
  {
    name: "Dầu Ép Lạnh",
    image: "/category-oils.jpg",
    href: "/dau-ep-lanh",
  },
  {
    name: "Xà Phòng Tự Nhiên",
    image: "/category-soap.jpg",
    href: "/xa-phong",
  },
  {
    name: "Hạt Dinh Dưỡng",
    image: "/category-nuts.jpg",
    href: "/hat-dinh-duong",
  },
  {
    name: "Nước Tương",
    image: "/category-sauce.jpg",
    href: "/nuoc-tuong",
  },
  {
    name: "Mật Ong",
    image: "/category-honey.jpg",
    href: "/mat-ong",
  },
  {
    name: "Nấm Khô",
    image: "/category-mushrooms.jpg",
    href: "/nam-kho",
  },
  {
    name: "Trái Cây Sấy",
    image: "/category-dried-fruit.jpg",
    href: "/trai-cay-say",
  },
];

export function ShopByCategory() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Mua Sắm Theo Danh Mục
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="flex flex-col items-center group"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-secondary transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-3 text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
