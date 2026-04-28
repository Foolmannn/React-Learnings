https://redux.js.org/

https://redux-toolkit.js.org/


Got it — I’ll give you a **complete picture**:

* 🔹 **Redux (background, simple)**
* 🔹 **React-Redux (how React connects)**
* 🔥 **Redux Toolkit (deep, detailed — main focus)**

---

# 🧠 1. Redux (Simple Background)

Redux is a **state management library**.

### Core idea:

👉 One **global store** holds your app state

---

## 🔁 Flow

```text
UI → dispatch(action) → reducer → store updates → UI updates
```

---

## 🧩 Key concepts

### 1. Store

* Central state container

### 2. Action

```js
{ type: "ADD_TODO", payload: {...} }
```

### 3. Reducer

```js
function reducer(state, action) {
  switch(action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
  }
}
```

---

## ⚠️ Problems with old Redux

* Too much boilerplate
* Manual action types
* Switch-case mess
* Immutable updates are hard

👉 That’s why Redux Toolkit was created.

---

# ⚛️ 2. React-Redux (Bridge)

React Redux connects Redux with React.

---

## 🧩 Main tools

### 1. `<Provider>`

```js
import { Provider } from "react-redux";

<Provider store={store}>
  <App />
</Provider>
```

👉 Makes store available everywhere

---

### 2. `useSelector`

```js
const data = useSelector((state) => state.someData);
```

👉 Read data from store

---

### 3. `useDispatch`

```js
const dispatch = useDispatch();
dispatch(addTodo());
```

👉 Send actions

---

👉 That’s it. React-Redux is just a **connector layer**.

---

# 🔥 3. Redux Toolkit (DETAILED)

Redux Toolkit is the **modern way to use Redux**.

---

# 🧠 3.1 Philosophy

RTK solves Redux problems by:

✔ Reducing boilerplate
✔ Writing less code
✔ Using best practices by default
✔ Making reducers easier

---

# ⚙️ 3.2 Core APIs (You MUST know these)

---

## ✅ 1. `configureStore()`

Creates store with best defaults.

```js
import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenseSlice";

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
});
```

---

### 🧠 Internally it adds:

* Redux DevTools
* Thunk middleware
* Good defaults

---

## 🔥 2. `createSlice()` (MOST IMPORTANT)

This replaces:

* actions
* action types
* reducers

---

### Example:

```js
import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",

  initialState: {
    transactions: [],
  },

  reducers: {
    addExpense: (state, action) => {
      state.transactions.push(action.payload);
    },

    deleteExpense: (state, action) => {
      state.transactions = state.transactions.filter(
        (t) => t.id !== action.payload
      );
    },
  },
});
```

---

## 🎯 Output of `createSlice`

### 1. Actions auto-generated

```js
expenseSlice.actions.addExpense()
```

---

### 2. Reducer auto-created

```js
export default expenseSlice.reducer;
```

---

### 3. Cleaner code (no switch-case)

---

# 🧠 3.3 IMMUTABILITY MAGIC (VERY IMPORTANT)

Redux requires:

❌ Don’t mutate state
✔ Always return new state

---

### But RTK lets you write:

```js
state.transactions.push(data);
```

### Why it works?

Because of:
👉 Immer

---

### Internally:

```js
state.transactions.push(data);
```

becomes:

```js
return {
  ...state,
  transactions: [...state.transactions, data]
};
```

---

# 🔁 3.4 Complete Flow (Step-by-step)

When you do:

```js
dispatch(addExpense({ id: 1, amount: 500 }));
```

---

### Step 1: Action created

```js
{
  type: "expense/addExpense",
  payload: { id: 1, amount: 500 }
}
```

---

### Step 2: Goes to reducer

RTK finds matching reducer:

```js
addExpense: (state, action) => { ... }
```

---

### Step 3: State updated via Immer

---

### Step 4: Store updates

---

### Step 5: React re-renders (`useSelector`)

---

# 📦 3.5 Structuring (VERY IMPORTANT for your app)

For your **MeroHisab**:

```text
src/
 ├── app/
 │    └── store.js
 ├── features/
 │    ├── expense/
 │    │     ├── expenseSlice.js
 │    │     ├── ExpenseList.jsx
 │    │     └── ExpenseForm.jsx
```

---

# 🔄 3.6 Async Logic → `createAsyncThunk`

Used for API calls.

---

## Example:

```js
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchExpenses = createAsyncThunk(
  "expense/fetchExpenses",
  async () => {
    const res = await fetch("/api/expenses");
    return res.json();
  }
);
```

---

## Handle states:

```js
extraReducers: (builder) => {
  builder
    .addCase(fetchExpenses.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchExpenses.fulfilled, (state, action) => {
      state.loading = false;
      state.transactions = action.payload;
    })
    .addCase(fetchExpenses.rejected, (state) => {
      state.loading = false;
    });
}
```

---

# ⚡ 3.7 Middleware (simple idea)

Middleware = code between dispatch & reducer

RTK includes:

* thunk (for async)
* logger (devtools)

---

# 🚀 3.8 RTK Query (Advanced)

Built-in API fetching system.

```js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
```

👉 Handles:

* caching
* loading
* errors

---

# ⚠️ 3.9 Common Mistakes

❌ Mutating outside slice
❌ Wrong selector path
❌ Too much Redux usage
❌ Forgetting Provider

---

# 🧠 4. When to use what

---

## ✅ Use Redux Toolkit for:

* global state
* large apps
* shared data (expenses, user)

---

## ❌ Don’t use for:

* simple inputs
* local UI state
* small apps

---

# 🔥 5. Final Mental Model

👉 Think like this:

```text
Redux Toolkit = Brain (store)
React-Redux = Nerves (connection)
React Components = Body (UI)
```

---

---

# 🧠 1. Why Redux Toolkit exists

Old Redux had problems:

* Too much boilerplate
* Manual action types
* Switch-case reducers
* Immutable updates were painful

👉 So Redux Toolkit (RTK) was created to:

✔ simplify Redux
✔ reduce boilerplate
✔ enforce best practices
✔ make code cleaner + safer

---

# ⚙️ 2. Core idea of Redux (quick recap)

Redux = **central store**

```
UI → dispatch(action) → reducer → store updates → UI re-renders
```

---

# 🔥 3. Redux Toolkit Core APIs

You mainly use 3 things:

---

## 1. `configureStore()`

Creates the store (no manual setup needed)

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

👉 Replaces:

* `createStore`
* middleware setup
* devtools config

---

## 2. `createSlice()` (MOST IMPORTANT)

This is where magic happens.

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },

  reducers: {
    increment: (state) => {
      state.value += 1; // looks mutable, but isn't
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
```

---

### 🧠 What’s happening internally?

RTK uses **Immer**

👉 So this:

```js
state.value += 1
```

Actually becomes:

```js
return { ...state, value: state.value + 1 }
```

✔ No mutation
✔ Cleaner syntax

---

## 3. React integration (`react-redux`)

### Provider

```js
import { Provider } from "react-redux";
import { store } from "./store";

<Provider store={store}>
  <App />
</Provider>
```

---

### Hooks

#### `useSelector`

```js
import { useSelector } from "react-redux";

const value = useSelector((state) => state.counter.value);
```

👉 Reads data from store

---

#### `useDispatch`

```js
import { useDispatch } from "react-redux";
import { increment } from "./counterSlice";

const dispatch = useDispatch();

dispatch(increment());
```

👉 Sends actions

---

# 🔁 4. Complete flow (IMPORTANT)

When you click a button:

```js
dispatch(increment());
```

### Internally:

1. Action created:

```js
{ type: "counter/increment" }
```

2. Sent to reducer

3. Reducer updates state (via Immer)

4. Store updates

5. React re-renders via `useSelector`

---

# 📦 5. Folder structure (for your project)

For **MeroHisab**, use:

```
src/
 ├── app/
 │    └── store.js
 ├── features/
 │    ├── expense/
 │    │     ├── expenseSlice.js
 │    │     └── ExpenseComponent.jsx
 │    └── user/
 │          └── userSlice.js
```

---

# 🧩 6. Example: Expense Slice (your app)

```js
import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    transactions: [],
  },

  reducers: {
    addExpense: (state, action) => {
      state.transactions.push(action.payload);
    },

    deleteExpense: (state, action) => {
      state.transactions = state.transactions.filter(
        (t) => t.id !== action.payload
      );
    },
  },
});

export const { addExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
```

---

# 🔄 7. Async logic → `createAsyncThunk`

For API calls:

```js
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async () => {
    const res = await fetch("/api/data");
    return res.json();
  }
);
```

---

### In slice:

```js
extraReducers: (builder) => {
  builder
    .addCase(fetchData.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
}
```

---

# ⚡ 8. Why Redux Toolkit is powerful

✔ Less boilerplate
✔ Built-in best practices
✔ Easy debugging
✔ Scalable
✔ Clean code

---

# 🚨 9. Common beginner mistakes

❌ Mutating outside slice
❌ Wrong selector path
❌ Forgetting Provider
❌ Overusing Redux for small state

---

# 🧠 10. When NOT to use Redux

Don’t use it for:

* simple forms
* local component state
* small apps

👉 Use React state instead

---

# 🔥 11. Real-world insight (important)

For your **MeroHisab**:

Use Redux for:

* global transactions
* user auth
* analytics data

Don’t use Redux for:

* modal open/close
* form inputs

---


