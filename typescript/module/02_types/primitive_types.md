# Primitive Types trong TypeScript

## Giới thiệu 
TypeScript cung cấp các kiểu dữ liệu cơ bản (primitive types) tương tự JavaScript, nhưng với khả năng kiểm tra kiểu tĩnh.

## Các Kiểu Primitive Cơ bản

### 1. string
```typescript
let firstName: string = "John";
let lastName: string = 'Doe';
let fullName: string = `${firstName} ${lastName}`;
let message: string = "Hello, TypeScript!";
```

---

### 2. number
```typescript
let interger: number = 42;
let decimal: number = 3.14;
let binary: number = 0b1010; // 10 trong hệ thập phân
let octal: number = 0o744; // 484 trong hệ thập phân
let hexadecimal: number = 0xFF; // 255 trong hệ thập phân
```

---

### 3. boolean

```typescript
let isActive: boolean = true;
let isComplete: boolean = false;
let hasPermission: boolean = Boolean(1); // true
```
---
### 4. null và undefined

```typescript
let emptyValue: null = null;
let notDefined: undefined = undefined;

// Trong strict mode, cần khai báo union types 
let maybeString: string | null = null;
let possibleNumber: number | undefined = undefined;
```
---

### 5. symbol
Dùng cho việc tạo ra một giá trị duy nhất và bất biến (immutable). Thường được sử dụng làm khóa cho thuộc tính đối tượng.

```typescript
const uniqueKey: symbol = Symbol('description');
```

