React Hooks are a core feature of React that let you use state, lifecycle features, and more inside functional components—without writing class components.

Instead of thinking in terms of lifecycle methods like `componentDidMount`, Hooks let you think in terms of **state + effects + logic reuse**.

---

# 🔹 Why Hooks exist

Before Hooks:

* Only **class components** could use state and lifecycle methods
* Logic reuse was messy (HOCs, render props)
* Code was harder to read and maintain

Hooks solve this by:

* Bringing **state to functional components**
* Allowing **logic reuse via custom hooks**
* Making components **cleaner and more modular**

---

# 🔹 Rules of Hooks (VERY IMPORTANT)

1. Call Hooks **only at the top level**
2. Call Hooks **only inside React functions** (components or custom hooks)

```js
// ❌ Wrong
if (condition) {
  useState(0);
}

// ✅ Correct
const [count, setCount] = useState(0);
```

---

# 🔹 Core Hooks (Must Know)

## 1. `useState` → State management

Used to store and update values.

```js
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

👉 Key points:

* `useState(initialValue)`
* Returns `[state, setState]`
* Re-render happens when state updates

---

## 2. `useEffect` → Side effects

Handles things like:

* API calls
* DOM updates
* timers

```js
import { useEffect } from "react";

useEffect(() => {
  console.log("Component mounted");

  return () => {
    console.log("Cleanup");
  };
}, []);
```

👉 Dependency array:

* `[]` → runs once (on mount)
* `[count]` → runs when `count` changes
* no array → runs on every render

---

## 3. `useRef` → DOM & persistent values

Stores values without causing re-render.

```js
import { useRef } from "react";

const inputRef = useRef(null);

function focusInput() {
  inputRef.current.focus();
}
```

👉 Uses:

* Access DOM
* Store mutable values

---

## 4. `useContext` → Global state

Avoids prop drilling.

```js
const value = useContext(MyContext);
```

👉 Used with:

```js
<MyContext.Provider value={data}>
```

---

## 5. `useMemo` → Optimization

Memoizes a computed value.

```js
const expensiveValue = useMemo(() => {
  return computeHeavy(data);
}, [data]);
```

👉 Prevents unnecessary recalculation

---

## 6. `useCallback` → Function memoization

Prevents function recreation.

```js
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

👉 Useful when passing functions to child components

---

## 7. `useReducer` → Advanced state management

Alternative to `useState`.

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

👉 Best for:

* Complex state logic
* Multiple state transitions

---

# 🔹 Custom Hooks (Very Powerful 🚀)

You can create your own hooks.

```js
function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData);
  }, [url]);

  return data;
}
```

Usage:

```js
const data = useFetch("/api/data");
```

👉 Benefits:

* Reusable logic
* Cleaner components

---

# 🔹 Lifecycle mapping (Important for understanding)

| Class Lifecycle      | Hook Equivalent             |
| -------------------- | --------------------------- |
| componentDidMount    | useEffect(() => {}, [])     |
| componentDidUpdate   | useEffect(() => {}, [dep])  |
| componentWillUnmount | return cleanup in useEffect |

---

# 🔹 Common Mistakes

❌ Updating state incorrectly:

```js
setCount(count + 1); // may cause stale state
```

✅ Better:

```js
setCount(prev => prev + 1);
```

---

❌ Missing dependencies:

```js
useEffect(() => {
  console.log(count);
}, []); // wrong
```

---

# 🔹 Mental Model (Very Important)

Think like this:

* `useState` → data
* `useEffect` → side effects
* `useMemo/useCallback` → optimization
* `useRef` → persistence without render

---

# 🔹 When to use what

* Simple state → `useState`
* Complex logic → `useReducer`
* API calls → `useEffect`
* Avoid re-renders → `useMemo/useCallback`
* DOM access → `useRef`

---

# 🔹 Final Insight

Hooks shift React from:
👉 "Lifecycle thinking"
to
👉 "Data flow + side effects thinking"

---

