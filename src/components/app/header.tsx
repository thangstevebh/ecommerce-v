"use client";

import { ShoppingCart, Search, Menu, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

export function Header() {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY >= 1 && currentScrollY <= 100) {
        setIsNavVisible(true);
      } else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        // Scrolling down past 100px
        setIsNavVisible(false);
      } else if (currentScrollY === 0) {
        // At the top
        setIsNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const productCategories = [
    { name: "Gia Vị Thô", href: "/gia-vi-tho" },
    { name: "Dầu Ép Lạnh Nguyên Chất", href: "/dau-ep-lanh-nguyen-chat" },
    { name: "Xà Phòng Tự Nhiên", href: "/xa-phong-tu-nhien" },
    { name: "Hạt Dinh Dưỡng", href: "/hat-dinh-duong" },
    { name: "Nước Tương Tự Nhiên", href: "/nuoc-tuong-tu-nhien" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/99">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/homepage" className="flex items-center gap-2 shrink-0">
            <div className="text-2xl font-bold text-primary">Noomfood</div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full px-4 py-2.5 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Cart and Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden lg:flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
              <span className="font-medium">0934660152</span>
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          className={`border-t transition-all duration-300 ${
            isNavVisible
              ? "max-h-12 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="hidden md:flex items-center justify-center gap-8 h-12">
            <a
              href="/homepage"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Trang Chủ
            </a>
            <a
              href="/homepage"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Giới Thiệu
            </a>
            <div
              className="relative"
              onMouseEnter={() => setIsProductDropdownOpen(true)}
              onMouseLeave={() => setIsProductDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors h-12">
                Sản Phẩm
                <ChevronDown className="h-4 w-4" />
              </button>

              {isProductDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-background border rounded-lg shadow-lg py-2">
                  {productCategories.map((category) => (
                    <Link
                      to={category.name}
                      href={category.href}
                      className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Hướng Dẫn
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Liên Hệ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
