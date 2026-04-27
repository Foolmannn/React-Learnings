
Local Storage is one of the simplest but most useful browser features—especially for apps like your **MeroHisab expense tracker**.

---

# 🔹 What is Local Storage?

**Local Storage** is a browser API that lets you store data **persistently** in the user’s browser.

* Data stays even after refresh or closing the browser
* Stored as **key-value pairs**
* Only stores **strings**

---

## 🔸 Key Characteristics

* ✅ Persistent (no expiration)
* ✅ Simple API
* ❌ Only strings (objects must be converted)
* ❌ Max ~5MB (varies by browser)
* ❌ Not secure (don’t store passwords)

---

# 🔹 Basic Methods

### 1. Save Data

```js
localStorage.setItem("key", "value");
```

### 2. Get Data

```js
const data = localStorage.getItem("key");
```

### 3. Remove Data

```js
localStorage.removeItem("key");
```

### 4. Clear All

```js
localStorage.clear();
```

---

# 🔹 Important: Storing Objects

Local Storage only stores strings → use JSON

### Save Object

```js
const user = { name: "Suman", age: 20 };

localStorage.setItem("user", JSON.stringify(user));
```

### Retrieve Object

```js
const user = JSON.parse(localStorage.getItem("user"));
```

---

# 🔥 Using Local Storage in React (Proper Way)

React needs **state + side effects**

---

## 🔸 Example: Simple Counter with Persistence

```jsx
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(() => {
    // Load from localStorage initially
    const saved = localStorage.getItem("count");
    return saved ? JSON.parse(saved) : 0;
  });

  useEffect(() => {
    // Save whenever count changes
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
```

---

## 🔍 Why This Pattern?

### Lazy Initialization

```js
useState(() => {...})
```

✔ Runs only once
✔ Prevents unnecessary reads

---

### useEffect Sync

```js
useEffect(() => {
  localStorage.setItem(...)
}, [state])
```

✔ Keeps storage updated
✔ React-friendly way

---

# 🔥 Real Use Case (Your Expense Tracker)

You can store:

* Transactions
* User preferences (dark mode)
* Monthly summaries

---

## 🔸 Example: Saving Expenses

```jsx
const [expenses, setExpenses] = useState(() => {
  const saved = localStorage.getItem("expenses");
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}, [expenses]);
```

---

## Add Expense

```js
const addExpense = (expense) => {
  setExpenses(prev => [...prev, expense]);
};
```

---

# ⚠️ Common Mistakes

### ❌ 1. Forgetting JSON

```js
localStorage.setItem("data", {a:1}); // WRONG
```

---

### ❌ 2. Direct access without check

```js
JSON.parse(localStorage.getItem("data")); // can be null
```

✔ Fix:

```js
const data = JSON.parse(localStorage.getItem("data") || "[]");
```

---

### ❌ 3. Overusing localStorage

* Don’t store large data
* Don’t use for real database needs

---

# 🔹 Local Storage vs Session Storage

| Feature  | Local Storage | Session Storage  |
| -------- | ------------- | ---------------- |
| Lifetime | Forever       | Until tab closes |
| Scope    | All tabs      | Single tab       |
| Size     | ~5MB          | ~5MB             |

---

# 🔥 Pro Tip (Advanced)

Create a custom hook 👇

```jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```

### Usage:

```js
const [expenses, setExpenses] = useLocalStorage("expenses", []);
```

---

# 🚀 When Should You Use It?

Use localStorage when:

* You don’t want backend yet
* Data is small
* Data is user-specific

---

# ❗ When NOT to Use It

* Sensitive data (passwords, tokens)
* Large datasets
* Multi-user systems

---
