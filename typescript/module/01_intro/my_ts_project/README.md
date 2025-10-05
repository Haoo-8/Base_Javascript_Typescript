Đây là hướng dẫn về cách bạn có thể thực hiện bài tập cho nội dung module 1 (TypeScript Cơ bản) và cách tổ chức thư mục mã nguồn.

Mục tiêu chính là thực hành ba khái niệm bạn vừa học: **TypeScript là gì**, **thiết lập `tsconfig.json`**, và **tùy chọn trình biên dịch**.

-----

## 1\. Cấu trúc Thư mục Thực hành 📁

Bạn nên tạo một thư mục mới cho mã nguồn thực hành của mình, tách biệt với thư mục tài liệu (`01-intro`).

```
.
├── 01-intro/          # <-- Thư mục tài liệu (giữ nguyên)
│   ├── ...
├── my-ts-project/     # <-- Thư mục DỰ ÁN thực hành của bạn
│   ├── src/           # <-- Nơi chứa mã nguồn TypeScript (.ts)
│   │   └── index.ts
│   ├── dist/          # <-- Nơi chứa mã JavaScript đã biên dịch (.js)
│   ├── package.json
│   └── tsconfig.json  # <-- Tệp cấu hình
└── ...
```

-----

## 2\. Các Bước Thực hiện Bài tập 🛠️

Thực hiện các bước sau trong thư mục **`my-ts-project`**:

### Bước 1: Khởi tạo Project và Cài đặt TypeScript

1.  **Khởi tạo Node.js Project:**
    ```bash
    npm init -y
    ```
2.  **Cài đặt TypeScript:**
    ```bash
    npm install typescript --save-dev
    ```

### Bước 2: Thiết lập `tsconfig.json` (Áp dụng `setup-tsconfig.md`)

Bạn sử dụng công cụ `tsc` để tạo tệp cấu hình cơ sở:

1.  **Tạo tệp `tsconfig.json`:**

    ```bash
    npx tsc --init
    ```

2.  **Cấu hình cơ bản:** Mở tệp **`tsconfig.json`** vừa được tạo và tùy chỉnh các tùy chọn theo nội dung bạn đã học.

      * Thiết lập **đầu ra** và **module** (xem Bước 3).
      * Thêm `include` và `exclude`.

    <!-- end list -->

    ```json
    {
      "compilerOptions": {
        // ... các tùy chọn mặc định
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true
      },
      "include": ["src/**/*"]
    }
    ```

### Bước 3: Áp dụng Tùy chọn Biên dịch (Áp dụng `compiler-options.md`)

Trong `tsconfig.json`, điều chỉnh các tùy chọn cốt lõi để xem chúng ảnh hưởng như thế nào:

1.  **Thiết lập `target` và `module`:**

      * Đổi `"target"` thành **`"es5"`** (để đảm bảo khả năng tương thích cũ).
      * Đổi `"module"` thành **`"commonjs"`**.

2.  **Kiểm tra tính Nghiêm ngặt:**

      * Đảm bảo `"strict"` được đặt thành **`true`**.

3.  **Tạo mã nguồn (TypeScript):**

      * Tạo thư mục `src` và tệp **`src/index.ts`**.
      * Viết một hàm đơn giản và cố tình tạo ra lỗi kiểu dữ liệu để thấy TypeScript hoạt động.

    <!-- end list -->

    ```typescript
    // src/index.ts

    // Ví dụ về Static Typing (từ what-is-typescript.md)
    function greet(name: string, age: number): string {
      return `Hello, ${name}. You are ${age} years old.`;
    }

    console.log(greet("Minh", 30));

    // Lỗi sẽ xảy ra nếu bạn thử:
    // greet(25, "Binh"); // <-- TypeScript sẽ báo lỗi ngay!

    // Thử tính năng strictNullChecks
    let username: string | null = "An";
    // Nếu strictNullChecks: true, bạn sẽ không thể làm điều này:
    // let otherName: string = username;
    ```

### Bước 4: Biên dịch Mã nguồn

1.  **Thêm Script Biên dịch:** Thêm một lệnh vào `package.json` để dễ dàng biên dịch:

    ```json
    // package.json
    "scripts": {
      "build": "tsc"
    },
    ```

2.  **Chạy Biên dịch:**

    ```bash
    npm run build
    ```

3.  **Kiểm tra Đầu ra:**

      * Kiểm tra thư mục **`dist/`**. Bạn sẽ thấy tệp **`dist/index.js`** được tạo ra.
      * Mở `dist/index.js` và so sánh cú pháp JavaScript với tệp `src/index.ts` gốc. Cụ thể, kiểm tra xem việc đặt `"target": "es5"` có làm cho mã JS đầu ra sử dụng `var` hoặc cú pháp cũ hơn không.

-----

## 3\. Tổng kết

Bằng cách thực hiện bài tập này, bạn đã:

  * ✅ **Cài đặt** và **khởi tạo** một dự án TypeScript thực tế.
  * ✅ Hiểu và **cấu hình** tệp **`tsconfig.json`**.
  * ✅ Trực tiếp thấy các **tùy chọn trình biên dịch** (như `target` và `strict`) ảnh hưởng đến quá trình phát triển và mã đầu ra như thế nào.