# Các tùy chọn Trình biên dịch (Compiler Options)

Phần **`compilerOptions`** trong tệp `tsconfig.json` là nơi bạn tinh chỉnh cách trình biên dịch TypeScript (**`tsc`**) chuyển đổi mã TypeScript thành JavaScript.

Dưới đây là các tùy chọn phổ biến và quan trọng nhất:

---

## 🎯 Đầu ra của Biên dịch (Output Target)

| Tùy chọn | Mô tả | Giá trị phổ biến |
| :--- | :--- | :--- |
| **`target`** | Phiên bản ECMAScript mà mã JavaScript đầu ra sẽ nhắm tới. | `"es2020"`, `"es5"` (cho khả năng tương thích cũ hơn) |
| **`module`** | Hệ thống module sẽ được sử dụng trong mã JavaScript đầu ra. | `"commonjs"` (Node.js), `"esnext"` (cho các module hiện đại) |
| **`outDir`** | Thư mục đầu ra để đặt các tệp JavaScript đã biên dịch. | `"./dist"` |
| **`rootDir`** | Thư mục gốc chứa các tệp nguồn TypeScript. Giúp đảm bảo cấu trúc thư mục đầu ra giống với đầu vào. | `"./src"` |

Để hiểu rõ hơn về sự khác biệt giữa `target` và `module`, xem [so sánh chi tiết tại đây](../../comparisons/target_vs_module.md).

---

## 🔒 Kiểm tra kiểu nghiêm ngặt (Strict Type Checking)

Các tùy chọn này giúp kích hoạt các quy tắc kiểm tra kiểu nghiêm ngặt hơn, giúp cải thiện chất lượng mã:

| Tùy chọn | Mô tả |
| :--- | :--- |
| **`strict`** | Bật một loạt các cờ kiểm tra nghiêm ngặt cùng một lúc (bao gồm `noImplicitAny`, `strictNullChecks`, v.v.). **Nên bật.** |
| **`noImplicitAny`** | Báo lỗi khi TypeScript không thể suy luận ra kiểu dữ liệu và mặc định là `any`. |
| **`strictNullChecks`** | Khi bật, `null` và `undefined` chỉ được gán cho các biến đã được khai báo rõ ràng để chấp nhận chúng. Ngăn chặn các lỗi phổ biến về `null`/`undefined`. |
| **`forceConsistentCasingInFileNames`** | Đảm bảo rằng việc sử dụng chữ hoa/thường trong đường dẫn import khớp chính xác với tên tệp trên đĩa. |

---

## 🤝 Tương tác Module (Module Interoperability)

| Tùy chọn | Mô tả |
| :--- | :--- |
| **`esModuleInterop`** | Cho phép tương tác giữa các module CommonJS và ES Modules, khắc phục các vấn đề về import/export mặc định. **Nên bật.** |
| **`resolveJsonModule`** | Cho phép nhập các tệp `.json` dưới dạng module. |
| **`baseUrl`** | Định nghĩa thư mục cơ sở để giải quyết các import module không tương đối. Hữu ích cho các import đường dẫn tuyệt đối. |

---

## 🗺️ Tùy chọn khác hữu ích

| Tùy chọn | Mô tả |
| :--- | :--- |
| **`sourceMap`** | Tạo các tệp map nguồn (`.map`) để công cụ gỡ lỗi có thể ánh xạ mã JavaScript đã biên dịch trở lại mã TypeScript ban đầu. |
| **`declaration`** | Tạo các tệp khai báo (`.d.ts`) cho các module TypeScript của bạn, hữu ích khi xuất bản thư viện. |
| **`removeComments`** | Xóa tất cả các chú thích (comment) khỏi mã JavaScript đầu ra. |



