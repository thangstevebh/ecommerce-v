"use client";

import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "./product-card";
import { FilterSidebar } from "../filter-sidebar";

const products = [
  {
    id: 1,
    name: "Dầu Mè Gừng",
    price: "110,000₫ – 270,000₫",
    image: "/dau-me-gung.jpg",
    variants: true,
    category: "dau-ep-lanh",
  },
  {
    id: 2,
    name: "Dầu Đương Quy",
    price: "140,000₫ – 350,000₫",
    image: "/dau-duong-quy.jpg",
    variants: true,
    category: "dau-ep-lanh",
  },
  {
    id: 3,
    name: "Bộ Dầu Dinh Dưỡng – Chiên Xào",
    price: "3,450,000₫",
    originalPrice: "3,975,000₫",
    image: "/bo-dau-dinh-duong.jpg",
    sale: true,
    category: "bo-dau",
  },
  {
    id: 4,
    name: "Bộ Dầu Dưỡng Da Mặt Và Toàn Thân",
    price: "1,040,000₫",
    originalPrice: "1,235,000₫",
    image: "/bo-dau-duong-da.jpg",
    sale: true,
    category: "bo-dau",
  },
  {
    id: 5,
    name: "Dầu Macca Ép Lạnh",
    price: "175,000₫ – 5,700,000₫",
    image: "/dau-macca.jpg",
    variants: true,
    category: "dau-ep-lanh",
  },
  {
    id: 6,
    name: "Dầu Bơ Ép Lạnh",
    price: "200,000₫ – 5,500,000₫",
    image: "/dau-bo.jpg",
    variants: true,
    category: "dau-ep-lanh",
  },
  {
    id: 7,
    name: "Dầu Dừa Ép Lạnh",
    price: "90,000₫ – 2,000,000₫",
    image: "/dau-dua.jpg",
    variants: true,
    category: "dau-ep-lanh",
  },
  {
    id: 8,
    name: "Dầu Mè Đen Ép Lạnh",
    price: "160,000₫ – 4,600,000₫",
    image: "/dau-me-den.jpg",
    variants: true,
    category: "dau-ep-lanh",
  },
  {
    id: 9,
    name: "Dầu Sacha Inchi Ép Lạnh",
    price: "250,000₫ – 875,000₫",
    image: "/dau-sacha-inchi.jpg",
    variants: true,
    category: "dau-ep-lanh",
  },
  {
    id: 10,
    name: "Dầu Hạt Điều Ép Lạnh",
    price: "300,000₫ – 9,200,000₫",
    image: "/dau-hat-dieu.jpg",
    variants: true,
    category: "dau-ep-lanh",
  },
  {
    id: 11,
    name: "Dầu Mù U Ép Lạnh",
    price: "65,000₫ – 1,250,000₫",
    image: "/dau-mu-u.jpg",
    variants: true,
    category: "dau-ep-lanh",
  },
  {
    id: 12,
    name: "Dầu Mè Nghệ",
    price: "120,000₫",
    image: "/dau-me-nghe.jpg",
    variants: true,
    outOfStock: true,
    category: "dau-ep-lanh",
  },
];

export function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(8); // lg screens
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(6); // md screens
      } else {
        setItemsPerPage(10); // sm screens
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((product) =>
          selectedCategories.includes(product.category || "dau-ep-lanh"),
        )
      : products;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Filter and Sort Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4 border-b">
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Hiển thị {startIndex + 1}–
              {Math.min(endIndex, filteredProducts.length)} của{" "}
              {filteredProducts.length} kết quả
            </p>
          </div>
          <select className="px-4 py-2 border rounded text-sm bg-background cursor-pointer hover:border-primary transition-colors">
            <option>Sắp xếp mặc định</option>
            <option>Sắp xếp theo mức độ phổ biến</option>
            <option>Sắp xếp theo xếp hạng trung bình</option>
            <option>Sắp xếp theo mới nhất</option>
            <option>Sắp xếp theo giá: thấp đến cao</option>
            <option>Sắp xếp theo giá: cao đến thấp</option>
          </select>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Grid - Left Side */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {currentProducts.map((product) => (
                <Link
                  to={`/product/$productId`}
                  params={{ productId: `${product.id}` }}
                  key={product.id}
                >
                  <ProductCard key={product.id} product={product} />
                </Link>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 border rounded hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`min-w-10 h-10 px-3 rounded border transition-colors ${
                          currentPage === page
                            ? "bg-primary text-primary-foreground border-primary"
                            : "hover:bg-accent"
                        }`}
                      >
                        {page}
                      </button>
                    ),
                  )}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 border rounded hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Filter Sidebar - Right Side */}
          <div className="lg:w-80">
            <FilterSidebar
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
