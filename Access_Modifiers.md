## Introduction: 
Access modifiers are used to control the accessibility of class properties and methods. They define where we can access class members or modify them.

## Main types of Access Modifiers:

1. Public: Public members can be accessed from anywhere, including inside the class, outside the class, and child classes. It is the default access modifier.

2. Private: Private members can only be accessed inside their own class. We cannot access them from outside the class or child classes.

3. Protected: Protected members can be accessed inside their own class and child classes. But we cannot access them directly from outside the class.

4. Readonly: Readonly properties can be assigned a value only when they are declared or inside the constructor. After that, their values cannot be changed.

## Why we use them: 
Access modifiers help us control data access and protect class properties and methods. They also help us implement encapsulation and write organized code.

## Conclusion:
Access modifiers are important features of TypeScript. They help us control how class members are accessed and modified. Using them properly makes our code more organized, secure, and maintainable.