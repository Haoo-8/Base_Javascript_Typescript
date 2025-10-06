```markdown
# Enums và Tuples

Enums và Tuples là hai cấu trúc dữ liệu bổ sung giúp tạo ra các kiểu dữ liệu có cấu trúc hơn.
```

---

## 1. Enums (Enumerations)

**Enums** là cách để định nghĩa một tập hợp các hằng số được đặt tên. Chúng giúp mã nguồn dễ đọc và dễ bảo trì hơn bằng cách cung cấp các tên có ý nghĩa thay vì các "số ma thuật" (magic numbers).

### a) Numeric Enums (Enum Số)

* Mặc định, các thành viên được gán giá trị số bắt đầu từ **0**.

```typescript
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

let userMove: Direction = Direction.Up;
console.log(userMove); // Output: 0
```

### b) String Enums (Enum Chuỗi)
* Bạn phải gán giá trị chuỗi cho từng thành viên.
* Lợi ích: Khả năng đọc tốt hơn trong quá trình gỡ lỗi (debug) và chạy (runtime).

```typescript
enum Status {
    Success = "SUCCESS",
    Failure = "FAILURE",
    Pending = "PENDING",
}

let currentStatus: Status = Status.Success;
console.log(currentStatus); // Output: "SUCCESS"`
```
---
## 2. Tuples
**Tuples** cho phép bạn biểu diễn một mảng với **số lượng phần tử cố định,** trong đó mỗi phần tử có một **kiểu dữ liệu đã biết** và **vị trí cụ thể.**
```typescript
// Kiểu dữ liệu cho một Tuple (string, number, boolean)
type UserInfo = [string, number, boolean];

// Khai báo và khởi tạo
let userA: UserInfo = ["Alice", 30, true];

// userA = [30, "Bob", true]; // Lỗi: Kiểu dữ liệu ở vị trí 0 phải là string

// Truy cập các phần tử
console.log(userA[0]); // "Alice" (kiểu string)
console.log(userA[1]); // 30 (kiểu number)
```
**Ứng dụng của Tuples**
Tuples rất hữu ích khi bạn có một hàm cần trả về một tập hợp các giá trị có kiểu khác nhau và vị trí quan trọng (ví dụ: một hàm trả về tọa độ `[x: number, y: number]` hoặc một cặp key-value `[key: string, value: any]`).