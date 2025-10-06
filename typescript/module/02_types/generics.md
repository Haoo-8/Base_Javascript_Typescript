# Generics (Kiểu Chung)

**Generics** là một công cụ mạnh mẽ trong TypeScript, cho phép bạn viết các thành phần (components) có thể làm việc với **nhiều kiểu dữ liệu** mà vẫn giữ được tính kiểm tra kiểu (type checking) và an toàn kiểu (type safety).

Generics cho phép bạn định nghĩa các hàm, class hoặc interfaces mà không cần xác định kiểu dữ liệu cho đến khi chúng được sử dụng.

---

## 1. Hàm với Generics

Sử dụng ký hiệu **`<T>`** (thường là chữ cái hoa T, viết tắt của Type) để biểu thị kiểu chung.

### Ví dụ: Hàm `identity`

Hàm này đơn giản là trả về bất cứ thứ gì được truyền vào, nhưng nó cần phải biết kiểu của giá trị đó.

```typescript
// T là một biến kiểu (Type Variable)
function identity<T>(arg: T): T {
    return arg;
}

// Khi sử dụng, T được thay thế bằng kiểu cụ thể
let output1 = identity<string>("myString"); // T = string. output1 là string
let output2 = identity<number>(100);       // T = number. output2 là number

// Hoặc TypeScript có thể tự động suy luận kiểu
let output3 = identity(true); // T được suy luận là boolean
```

---
## 2. Interface với Generics
Generics có thể được sử dụng để định nghĩa hình dạng của các cấu trúc dữ liệu chung. 

```typescript
// T xác định kiểu dữ liệu của phần tử trong danh sách
interface List<T> {
    items: T[];
    addItem(item: T): void;
}

// Danh sách các chuỗi
let stringList: List<string> = {
    items: [],
    addItem(item) { this.items.push(item); }
};

stringList.addItem("Apple");
// stringList.addItem(123); // Lỗi: item phải là string
```
---
## 3. Ràng buộc Generics (Constraints)
Đôi khi bạn muốn Generics chỉ làm việc với các kiểu có một tập hợp thuộc tính tối thiểu nào đó. Bạn có thể sử dụng từ khóa `extend`.

```typescript
// T phải là một kiểu có thuộc tính 'length'
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // Hợp lệ, vì T được ràng buộc bởi Lengthwise
    return arg;
}

loggingIdentity("hello"); // Hợp lệ (chuỗi có thuộc tính length)
// loggingIdentity(10); // Lỗi: number không có thuộc tính length
```
