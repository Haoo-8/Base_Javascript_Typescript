```markdown
# Type Alias (Kiểu Bí danh) và Interface (Giao diện)

**Type Aliases** và **Interfaces** là hai cách để định nghĩa hình dạng (shape) của các đối tượng (object) hoặc các hàm (function).
```
---

## 1. Interface (Giao diện)

* Sử dụng từ khóa **`interface`**.
* **Mục đích chính:** Định nghĩa hình dạng của **Objects** và **Classes**.
* **Đặc điểm nổi bật:** **Declaration Merging** (Hợp nhất khai báo). Bạn có thể khai báo cùng một interface nhiều lần, và TypeScript sẽ tự động hợp nhất chúng.

```typescript
interface User {
    id: number;
    name: string;
}

// Declaration Merging: TypeScript sẽ hợp nhất hai khai báo này
interface User {
    email: string;
}

const u: User = { id: 1, name: "A", email: "a@example.com" };
```

## 2. Type Alias (Kiểu Bí danh)
* Sử dụng từ khóa `type`.

* **Mục đích chính:** Tạo tên mới cho bất kỳ kiểu dữ liệu nào, bao gồm các kiểu cơ bản, Union/Intersection, Tuple, và hình dạng của Objects.

* **Đặc điểm nổi bật:** Khả năng định nghĩa các kiểu phức tạp như Union và Intersection. **Không hỗ trợ Declaration Merging.**

```typescript
type ID = string | number; // Định nghĩa Union Type

type Point = {
    x: number;
    y: number;
};

// type Point = { z: number }; // Lỗi: Không thể khai báo lại Type Alias

type Result = Success | Failure; // Hợp nhất các kiểu khác (Union)
```

---
## 3. So sánh và Khi nào sử dụng? 
|Tính năng	|Interface	|Type Alias|
|-----------|-----------|----------|
|**Định nghĩa Object**	|Có (Mục đích chính)	|Có |
|**Định nghĩa Union/Intersection**	|Không	|Có (Tính năng cốt lõi) |
|**Hợp nhất Khai báo**	|Có (Declaration Merging)	|Không |
|**Extends/Implements**	|Dùng từ khóa `extends` |	Dùng Intersection `&` |

**Quy tắc chung:**

* **Sử dụng** `interface` khi bạn đang định nghĩa hình dạng của **Objects** (đặc biệt nếu bạn muốn khả năng mở rộng/hợp nhất).

* **Sử dụng** `type` khi bạn cần định nghĩa các **Union Types, Literal Types,** hoặc tạo bí danh cho bất kỳ kiểu dữ liệu nào khác không phải object.