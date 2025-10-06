# any, unknown, và never: Các Kiểu Dữ liệu Đặc biệt

Đây là ba kiểu dữ liệu đặc biệt được sử dụng để xử lý các tình huống mà kiểu dữ liệu không rõ ràng, không an toàn hoặc không bao giờ xảy ra.

---

## 1. `any` (Kiểu Tùy ý)

`any` là kiểu dữ liệu cho phép một biến có thể chứa **bất kỳ giá trị nào** và bạn có thể thực hiện **bất kỳ hành động nào** với nó mà không có sự kiểm tra kiểu nào.

* **Tính năng:** Tắt hoàn toàn kiểm tra kiểu cho biến đó.
* **Hạn chế:** Khi sử dụng `any`, bạn mất đi lợi ích cốt lõi của TypeScript. **Nên hạn chế tối đa.**


```typescript
let data: any = 10;
data = "Hello";
data.nonExistentMethod(); // KHÔNG có lỗi biên dịch (nhưng sẽ lỗi khi chạy)
```
---
## 2. `unknown` (Kiểu Không rõ)
`unknown` là một kiểu dữ liệu an toàn hơn `any`. Nó cũng cho phép chứa bất kỳ giá trị nào, nhưng **bạn phải kiểm tra kiểu** trước khi sử dụng nó.

**Tính năng:** Yêu cầu **Type Narrowing** (kiểm tra kiểu) trước khi thực hiện bất kỳ hoạt động nào.

**Lợi ích:** Tăng cường tính an toàn của mã nguồn. **Đây là lựa chọn tốt hơn** `any` khi bạn không biết kiểu dữ liệu đến.

```typescript
let value: unknown = "Hello TypeScript";

// console.log(value.toUpperCase()); // Lỗi: Bạn phải kiểm tra kiểu trước

if (typeof value === "string") {
    console.log(value.toUpperCase()); // Hợp lệ sau khi kiểm tra kiểu
}
```

---
## 3. `never` (Kiểu Không bao giờ)
`never` là kiểu dữ liệu cho các giá trị **không bao giờ quan sát được** hoặc **không bao giờ xảy ra**. Thường được sử dụng trong hai tình huống:

**Hàm luôn ném ngoại lệ (throw error)**

```typescript
function raiseError(message: string): never {
    throw new Error(message); // Hàm không bao giờ trả về giá trị bình thường
}
```

**Vòng lặp vô hạn**
```typescript
function infiniteLoop(): never {
    while (true) {
        // ...
    }
}
```

**Exhaustiveness Checking (Kiểm tra bao quát)**

Dùng để đảm bảo bạn đã xử lý tất cả các trường hợp trong một khối `switch/case` hoặc `if/else` với Union Types.

```typescript
type Shape = "circle" | "square";

function getArea(shape: Shape) {
    switch (shape) {
        case "circle":
            // ...
            break;
        case "square":
            // ...
            break;
        default:
            // Nếu có một kiểu mới được thêm vào Shape nhưng chưa xử lý ở đây,
            // TypeScript sẽ báo lỗi vì 'shape' sẽ là 'never'
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
```