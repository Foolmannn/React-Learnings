---

#  Big Picture

Hooks in React fall into categories:

1. **State & Rendering**
2. **Side Effects**
3. **References & DOM**
4. **Performance Optimization**
5. **Context & Advanced**

---

# 🔹 1. `useState` → Local State

This is the most basic and important hook.

```jsx
const [count, setCount] = useState(0);
```

### How it works:

* `count` → current state
* `setCount` → function to update it
* Triggers **re-render** when updated

### Important detail:

```jsx
setCount(count + 1); // ❌ can be wrong sometimes
setCount(prev => prev + 1); // ✅ safe
```

 Why? Because state updates can be **batched**.

---

# 🔹 2. `useEffect` → Side Effects

Used for things outside rendering:

* API calls
* timers
* DOM updates

```jsx
useEffect(() => {
  console.log("runs after render");

  return () => {
    console.log("cleanup");
  };
}, []);
```

### Dependency Array Behavior:

| Dependency | Behavior               |
| ---------- | ---------------------- |
| `[]`       | Run once (mount)       |
| `[value]`  | Run when value changes |
| no array   | Run every render       |

### Important insight:

React runs effects **after painting UI** → non-blocking

---

# 🔹 3. `useRef` → Persistent Mutable Value

```jsx
const ref = useRef(null);
```

### Uses:

1. Access DOM

```jsx
<input ref={ref} />
```

2. Store value without re-render

```jsx
ref.current = 10;
```

 Changing `ref.current` does **NOT re-render**

---

# 🔹 4. `useContext` → Global State Access

Used with Context API:

```jsx
const value = useContext(MyContext);
```

 Avoids “prop drilling” (passing props deeply)

---

# 🔹 5. `useMemo` → Memoized Value

Used to **avoid expensive recalculations**

```jsx
const result = useMemo(() => {
  return expensiveFunction(data);
}, [data]);
```

### When to use:

* Heavy computation
* Prevent unnecessary recalculation

 Not for everything—only optimization

---

# 🔹 6. `useCallback` → Memoized Function

```jsx
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

### Why?

Functions get recreated on every render → can cause:

* unnecessary child re-renders

 `useCallback` keeps the same function reference

---

# 🔹 7. `useReducer` → Complex State Logic

Alternative to `useState` for complex cases

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

Example:

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
  }
}
```

 Best for:

* multiple related states
* complex updates

---

# 🔹 8. `useLayoutEffect` → Sync Effect (advanced)

Works like `useEffect` but runs **before paint**

```jsx
useLayoutEffect(() => {
  // runs before browser paints
}, []);
```

 Use only when needed (e.g., measuring DOM)

---

# 🔹 9. `useImperativeHandle` (rare)

Used with `forwardRef` to control what parent can access

---

# 🔹 10. `useId` → Unique IDs

```jsx
const id = useId();
```

 Useful for accessibility (forms, labels)

---

# 🔥 Key Differences (Important for Exams)

### `useMemo` vs `useCallback`

| Hook        | Returns  |
| ----------- | -------- |
| useMemo     | value    |
| useCallback | function |

---

### `useRef` vs `useState`

| Feature   | useRef | useState |
| --------- | ------ | -------- |
| Re-render | ❌ No   | ✅ Yes    |
| Mutable   | ✅ Yes  | ❌ No     |

---

### `useEffect` vs `useLayoutEffect`

| Hook            | Timing       |
| --------------- | ------------ |
| useEffect       | After paint  |
| useLayoutEffect | Before paint |

---

# ⚠️ Rules of Hooks (VERY IMPORTANT)

1. Only call hooks at top level
2. Only call hooks inside React functions
3. Order must stay same

---

# 🧩 Real Insight (this is what most miss)

Hooks are not independent—they work together:

Example:

* `useState` → holds data
* `useEffect` → reacts to change
* `useMemo` → optimizes calculation

 Think of them as a **system, not tools**

---

# 🚀 Final Mental Model

Instead of thinking:

> “Which hook do I use?”

Think:

* Need memory? → `useState`
* Need side effect? → `useEffect`
* Need persistent value? → `useRef`
* Need optimization? → `useMemo` / `useCallback`
* Complex logic? → `useReducer`

---


