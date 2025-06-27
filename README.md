# 🔧 JavaScript Practice Programs

This repository contains beginner-to-advanced JavaScript programs that demonstrate core concepts such as variables, operators, functions, loops, objects, async handling, and even basic Node.js server creation. Each file includes detailed explanations, expected output, and real-world use cases to help you revise and understand JavaScript deeply.

---

## 📁 Files Overview

| File Name                         | Topics Covered                                      |
| --------------------------------- | --------------------------------------------------- |
| 1st hello world.js                | console.log, variables, shadowing                   |
| 2nd arithemtic.js                 | Arithmetic operators, increment/decrement, coercion |
| 3rd assignment.js                 | Compound assignment (`+=`, `*=`, etc.)              |
| 4th compare.js        | Comparison and logical operators                    |
| 5th conditional.js                 | if, if-else, nested if, else-if ladder              |
| 6th functions.js                  | Function definition, return, usage                  |
| 7th loop.js                      | while, do-while, for, break, continue               |
| 8th arrow function and objects.js        | Arrow functions, objects, object methods            |
| 9th array.js       | Array methods, arrays of objects                    |
| 10th map.js                | Array `map()` usage                                 |
| 11th class and strings.js       | Classes, constructors, string methods               |
| 12th switch and numb.js      | `toFixed()`, `toString()`, switch-case              |
| 13th async and promises.js      | `setTimeout()`, callbacks, Promises, .then/.catch   |
| 14th async\_await.js       | Async/await usage with Promises                     |
| 15b event\_loop.js | JavaScript event loop and 0ms timeout               |
| 16th simple\_http\_server.js      | Basic Node.js HTTP server with `http` module        |

---

## 📘 Detailed Explanations Per File

### 1️⃣ `1st hello world.js`

This file demonstrates the basics of output using `console.log()`, declaring and reassigning variables using `var`, type checking with `typeof`, and the function-scoped nature of `var`. Shadowing inside blocks is highlighted, showing how inner declarations override outer ones.

**Concepts Covered:** `console.log`, `typeof`, `var` redeclaration, shadowing

**Sample Output:**

```
Hello karthik hi
hello world
11 18
11+18
11 'number'
Koushik 'string'
10
20
20
```

---

### 2️⃣ `2nd arithemtic.js`

This file dives into arithmetic operations like addition, subtraction, multiplication, division, modulus, and exponentiation. It also shows how JavaScript coerces string data types to numbers during arithmetic.

**Key Concepts:** Arithmetic operators, increment/decrement, type coercion

**Sample Output:**

```
7
1
12
64
1.333...
1
6
1
11
string
6 number
```

---

### 3️⃣ `3rd assignment.js`

Learn how compound assignment operators simplify arithmetic updates to variables. Covers `+=`, `-=`, `*=`, `/=`, `%=` and `**=`.

**Sample Output:**

```
7
4
12
6
2
27
```

**Real-World Use:** Commonly used in loops and calculations.

---

### 4️⃣ `4th comparison_logical.js`

Illustrates how JavaScript evaluates comparison operators (`==`, `===`, `!=`, etc.) and logical operators (`&&`, `||`, `!`). Emphasizes difference between loose equality (`==`) and strict equality (`===`).

**Sample Output:**

```
false
true
false
false
true
true
true
false
false
true
true
```

**Concepts Covered:** Boolean logic, equality checks, logical combinations

---

### 5️⃣ `5th conditions.js`

Covers various types of conditional statements including `if`, `if-else`, nested `if`, and `else-if` ladder structures. Demonstrates how control flows based on conditions.

**Sample Output:**

```
even
odd
odd
Second
Fourth
Hello
30 is greater number
```

**Use Case:** Basic conditional decision-making in user input or business logic

---

### 6️⃣ `6th functions.js`

Introduces functions for modular coding. Includes functions with parameters, return values, and use of function return values inside expressions.

**Sample Output:**

```
The file is created to know about the functions
11 x 1 = 11
...
sum : 25
18
11 + 18
```

---

### 7️⃣ `7th loop.js`

Covers loop control structures: `while`, `for`, `do-while`, `break`, and `continue`. Demonstrates logic control and table generation using loops.

**Sample Output:**

```
Hello
World 0
...
The loop is ended now only
```

**Concepts Covered:** Iteration, flow control, loop exits

---

### 8️⃣ `8th arrow_and_objects.js`

Covers ES6 arrow functions and working with objects. Shows method usage, property access, and `this` keyword basics.

**Sample Output:**

```
Knowing Arrray
18
object properties
{...}
koushik
B koushik
```

---

### 9️⃣ `9th arrays_and_objects.js`

Manipulate arrays with `push`, `pop`, `sort`, `reverse`, and `slice`. Work with array of objects and access nested properties.

**Sample Output:**

```
[ 'karthika', ... ]
koushik
[ 'lord ram', ... ]
...
6
```

---

### 🔟 `10th array_map.js`

Demonstrates the powerful `map()` function to transform arrays. Shows how the original array remains unchanged.

**Sample Output:**

```
[3,5,6,8]
[6,10,12,16]
["ram", ...]
["lord ram", ...]
```

---

### 1️⃣1️⃣ `11th class_and_strings.js`

Teaches basic class syntax, constructors, and string manipulation methods (`slice`, `trim`, `toUpperCase`).

**Sample Output:**

```
koushik B
...
Knowing about the strings is  interesting 41
...
```

**Use Case:** Building user models or structured objects in OOP

---

### 1️⃣2️⃣ `12th numbers_and_switch.js`

Explore number formatting with `toFixed()`, type conversion using `toString()`, and multi-case handling using `switch` statements.

**Sample Output:**

```
11.18
1811 string
hi
bye
good evening
```

---

### 1️⃣3️⃣ `13th async_and_promises.js`

Covers callback functions, Promises, `setTimeout()`, and async control using `.then()` and `.catch()`.

**Sample Output:**

```
hello!
hey2
hey4
hey3
Logged In
hello koushik
ok! task completed
Done
```

---

### 1️⃣4️⃣ `14th async_await_login.js`

Demonstrates how to use `async/await` for cleaner asynchronous code. Includes custom login and data-fetch simulation using Promises.

**Sample Output:**

```
Login is working
displaying the data
hello koushik
```

---

### 1️⃣5️⃣ `15b event_loop_zero_timeout.js`

Shows how JavaScript handles `setTimeout(..., 0)` using the event loop.

**Sample Output:**

```
hey
hey2
hey4
hey3
```

**Concepts Covered:** Event loop, task queue, non-blocking execution

---

### 1️⃣6️⃣ `16th simple_http_server.js`

Create a basic HTTP server using Node.js `http` module. Responds with plain text.

**Access at:** [http://localhost:8080](http://localhost:8080)
**Response:**

```
welcome back!
```

**Use Case:** Foundational for creating REST APIs or servers

---

## 🚀 How to Run

Make sure you have Node.js installed. Run any JavaScript file using:

```bash
node filename.js
```

> You can download Node.js here: [https://nodejs.org](https://nodejs.org)

---

## 👨‍💻 Author

Developed by [@bkoushik11](https://github.com/bkoushik11) as part of a comprehensive self-practice series to learn, revise, and apply JavaScript in real-world style coding.

---

## 📄 License

This project is licensed under the MIT License — free to use, learn, and remix.

---

Happy Coding! 🚀
