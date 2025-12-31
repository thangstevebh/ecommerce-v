"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FilterSidebarProps {
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "gia-vi-tho", name: "Gia Vị Thô", count: 24 },
  { id: "dau-ep-lanh", name: "Dầu Ép Lạnh Nguyên Chất", count: 18 },
  { id: "xa-phong", name: "Xà Phòng Tự Nhiên", count: 12 },
  { id: "hat-dinh-duong", name: "Hạt Dinh Dưỡng", count: 15 },
  { id: "nuoc-tuong", name: "Nước Tương Tự Nhiên", count: 6 },
];

const priceRanges = [
  { id: "under-100k", label: "Dưới 100,000₫" },
  { id: "100k-200k", label: "100,000₫ - 200,000₫" },
  { id: "200k-500k", label: "200,000₫ - 500,000₫" },
  { id: "above-500k", label: "Trên 500,000₫" },
];

export function FilterSidebar({
  selectedCategories,
  onCategoryChange,
}: FilterSidebarProps) {
  return (
    <aside className="w-full space-y-6">
      {/* Category Filter */}
      <div className="border rounded-lg p-6 bg-card">
        <h3 className="font-semibold text-lg mb-4">Danh Mục Sản Phẩm</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => onCategoryChange(category.id)}
              />
              <Label
                htmlFor={category.id}
                className="text-sm font-normal cursor-pointer flex-1 flex justify-between"
              >
                <span>{category.name}</span>
                <span className="text-muted-foreground">
                  ({category.count})
                </span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="border rounded-lg p-6 bg-card">
        <h3 className="font-semibold text-lg mb-4">Lọc Theo Giá</h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <div key={range.id} className="flex items-center space-x-2">
              <Checkbox id={range.id} />
              <Label
                htmlFor={range.id}
                className="text-sm font-normal cursor-pointer"
              >
                {range.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Product Status */}
      <div className="border rounded-lg p-6 bg-card">
        <h3 className="font-semibold text-lg mb-4">Tình Trạng</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="in-stock" />
            <Label
              htmlFor="in-stock"
              className="text-sm font-normal cursor-pointer"
            >
              Còn hàng
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="on-sale" />
            <Label
              htmlFor="on-sale"
              className="text-sm font-normal cursor-pointer"
            >
              Đang giảm giá
            </Label>
          </div>
        </div>
      </div>
    </aside>
  );
}
