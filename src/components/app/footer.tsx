import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Noomfood</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Gia vị thô toàn phần - Sản phẩm địa phương bền vững
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Sản Phẩm</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Dầu Ép Lạnh
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Xà Bông Tự Nhiên
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Gia Vị Thô
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Hạt Dinh Dưỡng
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-4">Thông Tin</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Về Noom
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tiêu Chuẩn Chất Lượng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Quy Trình Sản Xuất
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Chính Sách
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Liên Hệ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                Hotline:{" "}
                <a
                  href="tel:0934660152"
                  className="hover:text-primary transition-colors"
                >
                  0934660152
                </a>
              </li>
              <li>Email: info@noomfood.com</li>
              <li className="leading-relaxed">Địa chỉ: Việt Nam</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Noomfood. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
