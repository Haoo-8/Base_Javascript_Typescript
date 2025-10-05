Sự khác biệt giữa `target` và `module` trong cấu hình TypeScript nằm ở **mục tiêu biên dịch** và **cách tổ chức mã nguồn**. Cùng phân tích chi tiết nhé:

---

### 🎯 `target`: Phiên bản ECMAScript đầu ra

- **Ý nghĩa**: Chỉ định phiên bản JavaScript mà TypeScript sẽ biên dịch sang.
- **Tác động**: Ảnh hưởng đến cú pháp và tính năng được sử dụng trong mã JavaScript đầu ra.

| Giá trị `target` | Mô tả | Ví dụ tính năng hỗ trợ |
|------------------|-------|-------------------------|
| `"es5"`          | Tương thích với trình duyệt cũ | Không hỗ trợ `async/await`, `let/const`, `class` |
| `"es6"` / `"es2015"` | Hỗ trợ ES6 | Có `let`, `const`, `arrow function`, `class` |
| `"es2020"`       | Hỗ trợ các tính năng mới hơn | `optional chaining`, `nullish coalescing`, `BigInt` |

📌 **Ví dụ**: Nếu bạn dùng `target: "es5"`, thì `let` sẽ được chuyển thành `var`, và `async/await` sẽ được chuyển thành promise-based code.

---

### 📦 `module`: Hệ thống module được sử dụng

- **Ý nghĩa**: Chỉ định cách TypeScript xử lý `import` và `export`.
- **Tác động**: Ảnh hưởng đến cách mã được đóng gói và chạy trong môi trường như Node.js hoặc trình duyệt.

| Giá trị `module` | Mô tả | Môi trường sử dụng |
|------------------|-------|--------------------|
| `"commonjs"`     | Module phổ biến trong Node.js | Dùng `require()` và `module.exports` |
| `"esnext"`       | Module hiện đại theo chuẩn ES | Dùng `import`/`export`, hỗ trợ tree-shaking |
| `"amd"`          | Dùng trong trình duyệt với RequireJS | `define()` |
| `"system"`       | Dùng với SystemJS | `System.register()` |

📌 **Ví dụ**: Nếu bạn dùng `module: "commonjs"`, thì TypeScript sẽ biên dịch `import` thành `require()` — phù hợp với Node.js. Nếu dùng `"esnext"`, thì vẫn giữ nguyên `import`/`export` để dùng với bundler như Webpack hoặc chạy trực tiếp trong trình duyệt hiện đại.

---

### ✅ Tóm lại:
- `target` quyết định **cú pháp và tính năng JavaScript** mà TypeScript sẽ biên dịch sang.
- `module` quyết định **cách tổ chức và đóng gói mã** để chạy trong môi trường cụ thể.