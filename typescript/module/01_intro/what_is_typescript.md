# `TypeScript là gì?`

**TypeScript** là một **siêu tập hợp (superset)** của **JavaScript** có kiểu dữ liệu tĩnh (statically typed). Nó được phát triển bởi Microsoft và biên dịch (compile) thành JavaScript thuần túy.

---

## Các tính năng cốt lõi

1.  **Kiểu dữ liệu tĩnh (Static Typing):**
    * Đây là tính năng quan trọng nhất. TypeScript cho phép bạn khai báo và kiểm tra kiểu dữ liệu của biến, tham số hàm, và giá trị trả về **trong quá trình phát triển** (trước khi chạy - compile time).
    * Ví dụ: `let name: string = "Alice";`.
    * Điều này giúp **bắt lỗi sớm** và làm cho mã nguồn dễ bảo trì hơn, đặc biệt trong các dự án lớn.

2.  **Hỗ trợ Lập trình Hướng đối tượng (OOP):**
    * TypeScript hỗ trợ đầy đủ các tính năng OOP như **Interface**, **Class**, **Generics**, và **Decorators** – những thứ mà JavaScript (trước ES6) thiếu hoặc chỉ có một phần.

3.  **Công cụ tuyệt vời (Great Tooling):**
    * Do có thông tin về kiểu dữ liệu, các trình soạn thảo mã (như VS Code) cung cấp tính năng **IntelliSense** (tự động hoàn thành), refactoring, và điều hướng mã tốt hơn nhiều.

4.  **Tương thích với JavaScript:**
    * Bất kỳ mã JavaScript hợp lệ nào cũng là mã TypeScript hợp lệ. Bạn có thể dần dần áp dụng TypeScript vào các dự án JavaScript hiện có.

---

## Quá trình Biên dịch (Compilation)

Mã TypeScript (`.ts`) không thể chạy trực tiếp trong trình duyệt hoặc Node.js. Nó cần phải được biên dịch thành mã JavaScript (`.js`) bằng trình biên dịch **`tsc` (TypeScript Compiler)**.

* **Đầu vào:** Tệp `.ts` (TypeScript)
* **Trình biên dịch:** `tsc`
* **Đầu ra:** Tệp `.js` (JavaScript)

---
# `Mini Quiz: `
1. **TypeScript là gì?**.
    - [ ] A. Một framework JavaScript
    - [ ] B. Một ngôn ngữ lập trình kiểu động
    - [ ] C. Một ngôn ngữ lập trình mở rộng từ JavaScript với kiểu tĩnh
    - [ ] D. Một công cụ kiểm tra lỗi cú pháp
2. **Lợi ích chính của TypeScript là gì?**
    - [ ] A. Giúp chạy nhanh hơn
    - [ ] B. Tự động tối ưu hóa code
    - [ ] C. Cung cấp kiểm tra kiểu tĩnh và hỗ trợ IDE tốt hơn
    - [ ] D. Thay thế hoàn toàn JavaScript