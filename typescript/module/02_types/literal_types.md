# Literal Types

**Literal Types** (Kiểu chữ nghĩa/Kiểu hằng) cho phép bạn xác định một kiểu dữ liệu chính xác bằng **giá trị cụ thể** của nó, thay vì một loại chung như `string` hoặc `number`.

Đây là một cách để biến các giá trị JavaScript thành các kiểu dữ liệu, làm cho việc kiểm tra kiểu trở nên cực kỳ chính xác.

---

## 1. String Literal Types

Biến một chuỗi thành kiểu. Chỉ chuỗi ký tự đó mới hợp lệ.

```typescript
type Direction = "north" | "south" | "east" | "west";

function move(dir: Direction) {
    // dir chỉ có thể là 4 chuỗi cụ thể này
    console.log(`Moving to ${dir}`);
}

move("north"); // Hợp lệ
// move("up"); // Lỗi: "up" không phải là kiểu Direction
```

## 2. Numeric Literal Types
Tương tự, biến một số thành kiểu.
```typescript
type HttpStatusCode = 200 | 404

let status: HttpStatusCode = 200; // Hợp lệ
// status = 201; // Lỗi: 201 không phải kiểu HttpStatusCode
```

---
## 3. Boolean Literal Types
Ít phổ biến hơn, nhưng có thể xác định 1 biến phải luông là `true` hoặc `false`.

```typescript
let mustBeTrue: true = true;
// mustBeTrue = false; // Lỗi: false không phải là kiểu true.
```
---
# Kết hợp với Union Types
Literal Types thường được kết hợp với Union Types để tạo ra các **kiểu tập hợp (set types)** mạnh mẽ. Đây là cơ sở cho mô hình **Discriminant Unions** (Sẽ học sau) giúp làm việc với các kiểu phức tạp hơn.

```typescript
interface SuccessResponse {
    status: "success"; // Literal Type
    data: any;
}

interface ErrorResponse {
    status: "error";   // Literal Type
    message: string;
}

// Response là hoặc SuccessResponse hoặc ErrorResponse
type Response = SuccessResponse | ErrorResponse;
```
