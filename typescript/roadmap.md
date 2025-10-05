# Typescript structure

```
typescript/
├── 01-intro/
│ ├── what-is-typescript.md
│ ├── setup-tsconfig.md
│ └── compiler-options.md
├── 02-types/
│ ├── primitive-types.md
│ ├── union-intersection.md
│ ├── literal-types.md
│ ├── any-unknown-never.md
│ ├── type-alias-vs-interface.md
│ ├── enums-tuples.md
│ └── generics.md
├── 03-functions/
│ ├── function-types.md
│ ├── optional-default-params.md
│ ├── rest-params.md
│ └── overloads.md
├── 04-objects-classes/
│ ├── object-types.md
│ ├── class-basics.md
│ ├── access-modifiers.md
│ ├── inheritance.md
│ ├── abstract-classes.md
│ └── static-properties.md
├── 05-advanced-types/
│ ├── type-inference.md
│ ├── type-guards.md
│ ├── conditional-types.md
│ ├── mapped-types.md
│ ├── keyof-infer.md
│ ├── template-literal-types.md
│ └── utility-types.md
├── 06-modules-namespaces/
│ ├── import-export.md
│ ├── ambient-declarations.md
│ ├── namespaces.md
│ └── declaration-merging.md
├── 07-tooling/
│ ├── tsconfig-deep-dive.md
│ ├── eslint-prettier.md
│ ├── bundlers-vite-webpack.md
│ └── type-checking-tools.md
├── 08-testing/
│ ├── jest-vitest.md
│ ├── mocking.md
│ └── ts-node-testing.md
├── 09-real-world-patterns/
│ ├── discriminated-unions.md
│ ├── dependency-injection.md
│ ├── plugin-architecture.md
│ └── api-client-typing.md
└── README.md

```

---

## Roadmap from basic to advance

### 🔰 Giai đoạn 1: Làm quen & Cú pháp cơ bản

- Cài đặt TypeScript, hiểu `tsconfig.json`
- Kiểu dữ liệu cơ bản: `string`, `number`, `boolean`, `any`, `unknown`, `void`
- Interface vs Type Alias ### 🧠 Giai đoạn 2: Làm chủ kiểu dữ liệu
- Union, Intersection, Literal types
- Generics: `Array<T>`, `Promise<T>`, `Record<K,V>`
- Enums, Tuples

### 🧱 Giai đoạn 3: Lập trình hướng đối tượng

- Class, kế thừa, abstract, static
- Access modifiers: `private`, `protected`, `public`
- Implements interface

### 🧬 Giai đoạn 4: Kiểu nâng cao & inference

- Type Guards: `typeof`, `instanceof`, custom guards
- Conditional Types: `T extends U ? X : Y`
- Mapped Types: `Partial<T>`, `Readonly<T>`, `Pick<T>`
- Template Literal Types: `${string}-${number}`
- Utility Types: `Record`, `Exclude`, `Extract`, `ReturnType`

### 🧩 Giai đoạn 5: Module hóa & tổ chức code

- Import/Export chuẩn ES - Ambient Declarations (`declare`)
- Namespaces & Declaration Merging

### 🧪 Giai đoạn 6: Testing & Tooling

- Jest, Vitest cho TypeScript
- ESLint + Prettier
- Bundlers: Vite, Webpack
- Type Checking Tools: `tsc`, `ts-node`, `type-check`

### 🚀 Giai đoạn 7: Patterns thực chiến

- Discriminated Unions
- Dependency Injection
- Plugin Architecture
- API Client Typing (Axios, Fetch)

---

## 🎯 Phương pháp truyền tải tốt hơn 
Ngoài cấu trúc cây & roadmap, có thể bổ sung thêm:

1. **Mind Map trực quan**: vẽ cây kỹ năng bằng Mermaid hoặc công cụ như Excalidraw, để nhìn toàn cục.
2. **Progress Tracker**: checklist ✅ để đánh dấu module đã học xong.
3. **Flashcards**: câu hỏi/đáp nhanh cho phần Advanced Types (rất hợp để luyện).
4. **Project-based Learning**: mỗi module gắn với 1 mini-project thực tế (VD: API client typing → viết wrapper Axios có type).
5. **Cheat Sheet PDF**: tóm tắt syntax & utility types thông dụng.

---

## 📌 Gợi ý cách học hiệu quả

- Học **theo module** → mỗi thư mục 1 buổi/1 tuần.
- Mỗi khi xong 1 module, viết **blog note** hoặc làm video ngắn giải thích.
- Luôn gắn kiến thức với **real-world project**: từ TODO app, API client, đến plugin nhỏ.
- Cuối mỗi giai đoạn, review bằng **mini quiz** hoặc flashcards.

---
