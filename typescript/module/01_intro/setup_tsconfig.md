# Thiết lập tsconfig.json

Tệp **`tsconfig.json`** là tệp cấu hình trung tâm cho bất kỳ dự án TypeScript nào. Sự hiện diện của nó trong một thư mục cho biết thư mục đó là thư mục gốc của dự án TypeScript.

Nó định nghĩa các **tệp nguồn** và các **tùy chọn trình biên dịch (compiler options)** cần thiết để biên dịch dự án.

---

## 📁 Cấu trúc cơ bản

Một tệp `tsconfig.json` tối thiểu trông như sau:

```json
{
  "compilerOptions": {
    /* Tùy chọn biên dịch chính */
    "target": "es2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",

    /* Tùy chọn kiểm tra nghiêm ngặt (Strictness) */
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

---
## Các trường chính

1. **compilerOptions** (Bắc buộc):
    * Chứa tất cả các tùy chọn định nghĩa cach mã TypeScript được biên dịch thành JavaScript.
2. **include** (Tùy chọn):
    * Một mảng các mẫu glob (glob patterns) chỉ định các tệp nào nên được bao gồm trong quá trình biên dịch.
    * _Ví dụ_: `"src/**/*"` bao gồm tất cả các tệp trong thư mục `src` và các thư mục con.
3. **exclude** (Tùy chọn):
    * Một mảng các mẫu glob chỉ định các tệp nào nên được loại trừ, ngay cả khi chúng nằm trong danh sách `include`.
    * _Mặc định_: Thường loại trừ `node_modules` và các thư mục đầu ra.
4. **files** (Tùy chọn):
    * Một mảng các đường dẫn tệp cụ thể để bao gồm. Nếu được chỉ định, chỉ các tệp này mới được biên dịch (thường ít được sử dụng hơn `include`).

5. **extends** (Tùy chọn):
    * Cho phép kế thừa cấu hình từ một tệp cấu hình khác. Rất hữu ích khi sử dụng các cấu hình cơ sở (base configurations) tiêu chuẩn như `@tsconfig/node16/tsconfig.json.`

---
# `Mini Quiz`

1. **Lệnh nào dùng để tạo file tsconfig.json?**
    - [ ] A. `tsc --build`
    - [ ] B. `tsc --init`
    - [ ] C. `npm init typescript`
    - [ ] D. `tsconfig create`
2. **Mục đích của `include` trong `tsconfig.json` là gì?**
    - [ ] A. Chỉ định file đầu ra
    - [ ] B. Chỉ định thư mục chứa file cấu hình
    - [ ] C. Chỉ định các file cần biên dịch
    - [ ] D. Chỉ định các file cần loại trừ