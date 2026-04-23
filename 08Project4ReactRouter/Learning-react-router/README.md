React Router is the standard library for handling **navigation (routing)** in React apps. It lets you build **single-page applications (SPA)** where pages change without full reloads.


---

# 🚦 What is React Router?

Normally in websites:

* Clicking a link → browser reloads page → server sends new HTML

In React apps:

* We want **no reload**
* Just swap components dynamically

That’s what **React Router** does.

---

# 🧠 Core idea

Instead of “pages”, React Router uses:

👉 **Routes → Components mapping**

Example:

* `/` → Home component
* `/about` → About component
* `/contact` → Contact component

---

# 📦 Installation

```bash
npm install react-router-dom
```

---

# 🧱 Basic Setup (v6+)

Wrap your app:

```jsx
import { BrowserRouter } from "react-router-dom";

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

# 🧭 Defining Routes

Inside `App.jsx`:

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
```

---

# 🔗 Navigation (important)

## 1. Using `<Link>` (NO page reload)

```jsx
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">About</Link>
```

👉 Better than `<a>` tag

❌ `<a href="/about">` → reloads page
✅ `<Link to="/about">` → SPA navigation

---

## 2. Programmatic navigation

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

navigate("/about");
```

Example (button click):

```jsx
<button onClick={() => navigate("/about")}>
  Go About
</button>
```

---

# 📂 Nested Routes (very important)

Used for layouts like dashboard:

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

Inside `Dashboard.jsx`:

```jsx
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
```

👉 `Outlet` = where child routes appear

---

# 🔁 URL Params (dynamic routes)

Example: user profile pages

```jsx
<Route path="/user/:id" element={<User />} />
```

Inside component:

```jsx
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return <h1>User ID: {id}</h1>;
}
```

URL:

```
/user/123 → shows 123
/user/999 → shows 999
```

---

# 🔍 Query Params (filters, search)

Example URL:

```
/products?category=shoes
```

Use:

```jsx
import { useSearchParams } from "react-router-dom";

const [searchParams] = useSearchParams();

const category = searchParams.get("category");
```

---

# 🧠 Protected Routes (auth system)

Used in login systems:

```jsx
function ProtectedRoute({ children }) {
  const isLoggedIn = false;

  return isLoggedIn ? children : <Navigate to="/login" />;
}
```

Usage:

```jsx
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

---

# 🧭 404 Page (Not Found route)

```jsx
<Route path="*" element={<NotFound />} />
```

👉 catches all invalid URLs

---

# ⚡ Key Hooks Summary

| Hook                | Use                       |
| ------------------- | ------------------------- |
| `useNavigate()`     | redirect programmatically |
| `useParams()`       | dynamic URL values        |
| `useLocation()`     | current URL info          |
| `useSearchParams()` | query strings             |

---

# 🧩 Mental model (very important)

Think of React Router like:

👉 “URL controls which component is shown”

Not:

* “pages load”

But:

* “components switch based on URL”

---

# 🔥 Common mistakes

### ❌ Using `<a href>`

→ reloads page

### ❌ Not wrapping with BrowserRouter

→ routes won’t work

### ❌ Wrong route nesting without `<Outlet>`

→ child routes won’t show

---

# 🚀 If you want next level
