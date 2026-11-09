# type vs interface

## Introduction:
Both type and interface are used to define custom types. We can create object structure using any of them. But there are some important differences.

## Main differences:

1. Multiple interfaces with the same name can be merged automatically but type aliases cannot be declared multiple times with the same name.

2. Type aliases are more flexible. They can define premative types, union types, intersection types and tuples. Interfaces cannot directly represent these types.

3. Interfaces use the extends keyword to inherit properties from other interfaces. But type aliases use the (&) operator to combine multiple types.

## When we should use them:
Generally, interface is a good choice for defining object structure and class. Where type aliases are more suitable for defining unions, tuples, primitive types.

## Conclution:
Both type and interface are important features of TypeScript. Choosing between them depends on project requirements, coding style, and the specific use case. Neither is better than the other.Both are useful.