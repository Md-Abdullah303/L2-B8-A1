# Understanding How Type Narrowing Works in TypeScript

## Introduction

In typescript : a variable can a value like as `string | number` or multiple type . In this situation when we need a specific type for execution our code that time we use type narrowing, it help to narrow down to a specific type like : "number", "string", null, void or something else, that's why I can easily use our logic for narrowing, for different type we can make different logic.

## Detailed Explanation & Code Examples

Mainly we can do Narrowing for find our specific type for specific execution. We can control Narrowing type by 3 operator typeof, instanceof and in operator. Now let show the example:

### 1. Narrowing with `typeof`

The `typeof` operator checks primitive types in runtime. Like string, number or other primitive type.

```typescript
const printValue = (value: string | number): string => {
  if (typeof value === "string") {
    return value.toUpperCase(); // where only come the string
  } else {
    return value.toFixed(2); // where only come the number because in primitive we only receive string and number
  }
};
```

### 2. Narrowing with instanceof

The instanceof is use check the class are an instance of a specific class. For this we can narrow down specific class

```typescript
class Person {
  name: string;
}
class Student extends Person {
  roll: number;
}
const handleInstance = (student: Student | Person) => {
  if (student instanceof Student) {
    console.log(student.roll); // here we make sure it's a class from Student
  } else {
    console.log(student.name); // here we make sure it's come from Person
  }
};
```

### 3. Narrowing with in

`in` operator use for checking the property are include an object. For the we can perform perfect distinguishing between custom interfaces.

```typescript
interface Admin {
  role: string;
}

interface User {
  email: string;
}

const verifyAccount = (account: User | Admin) => {
  if ("role" in account) {
    console.log(account.role); // Narrowing to the Admin
  } else {
    console.log(account.email); // Narrowing to the email
  }
};
```

## Conclusion

Type narrowing is an essential in typescript, it help use to narrow down in runtime for type-safety. By typeof, instanceof and in operator we narrow down the multiple type into a fixed specific type that we want. It help us to make code more clean and bug-free while using with flexible union types.
