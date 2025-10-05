// Ví dụ về Static Typing (từ what_is_typescript.md)
function greet(name: string, age: number): string {
    return `Hello, ${name}. You are ${age} years old.`;
}

console.log(greet("Minh", 30));

// Lỗi sẽ xảy ra nếu bạn nhập thử: 
// greet(25, "Minh"); // <-- TypeScript sẽ báo lỗi ngay!

// Thử tính năng strictNullChecks 
let username: string | null = "An";
// Nếu strictNullChecks: true, bạn sẽ không thể làm được điều này:
// let otherName: string = username;