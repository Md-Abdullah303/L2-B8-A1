# Difference Between Type Alias and Interface in TypeScript

## Introduction

For declare a object structure we use type alias and interface, but one question arrive when we should use type and interface? there are many differences between the type alias and interface, we talk about some of them :

## Detailed Body Paragraphs with Code Examples

An `interface` is specifically designed for defining object structures. One major benefit of interfaces is that they can be extended easily using the `extends` keyword. Furthermore, if you declare two interfaces with the identical name in the same scope, TypeScript automatically merges their properties together.

```typescript
interface Employee {
  id: number;
  name: string;
}
interface Employee {
  department: string;
}

const employee: Employee = {
  id: 2,
  name: "Abdullah",
  department: "developer",
};
```

or

A `type alias` is not limited to object structures. We can use it for primitive values, union types (|), intersection types (&), tuples, and complex type logic. Unlike interfaces, a type alias cannot be reopened or merged once defined.

```typescript
type Status = "pending" | "success" | "failed";
type ID = string | number;
```

## Conclusion

In summary, use interface when defining standard object contracts, especially in libraries or reusable modules where declaration merging is advantageous. Choose type aliases when defining unions, primitives, or complex type compositions.
