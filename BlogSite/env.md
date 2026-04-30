Environment variables (**env**) are one of those things that feel confusing at first, but once you see the pattern, they become *very powerful*.

Let’s break it down clearly 👇

---

# 🧠 1. What are Environment Variables?

Environment variables are **external configuration values** that your app can read.

Instead of hardcoding values like:

```js
const API_URL = "https://api.myapp.com";
```

You do:

```js
const API_URL = process.env.REACT_APP_API_URL;
```

👉 So the value is **not inside your code**, it's stored outside.

---

# 🤔 2. Why use env variables?

### ✅ 1. Different environments (main reason)

You usually have:

* Development (local)
* Production (live)
* Testing

Each may need different values:

| Environment | API URL         |
| ----------- | --------------- |
| Dev         | localhost:5000  |
| Prod        | api.realapp.com |

Instead of changing code, you just change `.env`.

---

### ✅ 2. Security (kind of…)

You don’t want to hardcode things like:

* API keys
* Tokens
* URLs

⚠️ BUT IMPORTANT:
Frontend env variables are **NOT truly secret** (anyone can inspect them in browser).

---

### ✅ 3. Cleaner code

Keeps your app flexible and configurable.

---

# ⚙️ 3. How env works (Core Idea)

1. You create a `.env` file
2. Add variables
3. Framework reads them
4. You access them in code

---

# ⚛️ 4. In Create React App (CRA)

### 📁 File:

```
.env
```

### ✍️ Example:

```
REACT_APP_API_URL=https://api.example.com
```

### 📌 Rule:

👉 MUST start with `REACT_APP_`

Otherwise it won’t work.

---

### 📦 Usage:

```js
const url = process.env.REACT_APP_API_URL;
```

---

### ❗ Important:

* Restart server after changing `.env`
* Values are embedded at build time

---

# ⚡ 5. In Vite (Modern React)

### 📁 File:

```
.env
```

### ✍️ Example:

```
VITE_API_URL=https://api.example.com
```

### 📌 Rule:

👉 MUST start with `VITE_`

---

### 📦 Usage:

```js
const url = import.meta.env.VITE_API_URL;
```

---

### 🚀 Bonus:

Vite also gives built-ins:

```js
import.meta.env.MODE       // development / production
import.meta.env.BASE_URL
```

---

# 🔥 6. In Next.js (VERY IMPORTANT)

Next.js has **two types of env variables**

---

## 🟢 Public (frontend)

```
NEXT_PUBLIC_API_URL=https://api.com
```

Usage:

```js
process.env.NEXT_PUBLIC_API_URL
```

---

## 🔴 Private (backend only)

```
SECRET_KEY=123456
```

Usage:

```js
process.env.SECRET_KEY
```

👉 Only accessible in:

* API routes
* Server-side code

❌ NOT accessible in browser

---

# ⚡ 7. Key Differences (SUPER IMPORTANT)

| Feature     | CRA                | Vite            | Next.js      |
| ----------- | ------------------ | --------------- | ------------ |
| Prefix      | REACT_APP_         | VITE_           | NEXT_PUBLIC_ |
| Access      | process.env        | import.meta.env | process.env  |
| Backend env | ❌                  | ❌               | ✅            |
| Modern      | ❌ (deprecated-ish) | ✅               | ✅            |

---

# ⚠️ 8. Common Mistakes

### ❌ Forgetting prefix

```env
API_URL=abc   // won't work
```

---

### ❌ Not restarting dev server

Changes won’t apply.

---

### ❌ Thinking it's secure

Frontend env variables are visible in:

* DevTools
* Built JS

---

# 🧩 9. Real-life Example

```env
VITE_API_URL=https://api.merohisab.com
VITE_APP_NAME=MeroHisab
```

```js
fetch(`${import.meta.env.VITE_API_URL}/expenses`)
```

---

# 🧠 10. Mental Model (IMPORTANT)

Think like this:

> Env variables = **Settings outside your code**

Instead of changing code → you change config.

---

# 🚀 Quick Summary

* Env variables = external config
* Used for flexibility across environments
* Prefix is required (differs per framework)
* Not truly secure on frontend
* Next.js supports real backend secrets

---
