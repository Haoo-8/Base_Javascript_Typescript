---
# Union Types và Intersection Types

Union và Intersection là hai cách mạnh mẽ để kết hợp các kiểu dữ liệu, tạo ra các kiểu phức tạp và linh hoạt hơn.

---

## 🤝 Union Types (`|`)

**Union Type** cho phép một biến có thể mang **một trong số các kiểu** được liệt kê.

* Sử dụng ký hiệu **dấu sổ dọc (`|`)**.
* Giá trị phải thoả mãn **ÍT NHẤT MỘT** trong các kiểu đã cho.

```typescript
type Result = number | string;

let output: Result;
output = 100;      // Hợp lệ (là number)
output = "Error";  // Hợp lệ (là string)

// output = true; // Lỗi: boolean không thuộc kiểu Result

function printId(id: number | string) {
    // Để làm việc với biến union, bạn cần kiểm tra kiểu (type narrowing)
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}
```
---

## Intersection Types
**Intersection Type** kết hợp nhiều kiều thành **một kiểu duy nhất**, yêu cầu một biến phải thỏa mãn **TẤT CẢ** các kiểu đã cho.
* Sử dụng ký hiệu **dấu và (&)**.
* Giá trị phải thỏa mãn **TẤT CẢ** các thuộc tính kiểu.

```typescript
interface HasName  {
    name: string;
}

interface HasAge {
    age: number;
}

// Kiểu Person là tập hợp của HasName và HasAge
type Person = HasName & HasAge;
const user: Person = {
    name: "John",
    age: 30;
};

// const incompleteUser: Person = { name: "Doe" }; Lỗi: thiếu thuộc tính 'age'
```

## Khi nào sử dụng

|Kiểu               |Ý nghĩa                            |Ký hiệu|
|-------------------|-----------------------------------|-------|
|**Union**          |OR (Hoặc) - Giá trị là **A hoặc B**|   `   |
|**Intersection**   |AND (và) - Giá trị là **A và B**   |`&`    |