
---

# 🧠 Big Picture (Architecture)

You have 3 parts:

1. **`App.jsx`** → Main logic (state + conversion)
2. **`InputBox.jsx`** → Reusable UI component
3. **`useCurrencyInfo.js`** → Custom hook (fetch API data)

👉 This is a clean separation:

* UI → component
* Logic → App
* Data fetching → hook

---

# 🔷 1) `App.jsx` (Main Brain)

## 🔹 State Variables

```js
const [amount, setamount] = useState(0)
const [from, setfrom] = useState("usd")
const [to, setto] = useState("npr")
const [convertedAmount, setconvertedAmount] = useState(0)
```

### What each does:

| State             | Meaning                 |
| ----------------- | ----------------------- |
| `amount`          | User input value        |
| `from`            | Source currency         |
| `to`              | Target currency         |
| `convertedAmount` | Result after conversion |

👉 React re-renders UI whenever state changes.

---

## 🔹 Custom Hook Usage

```js
const currencyInfo = useCurrencyInfo(from)
```

👉 This fetches exchange rates for the **selected "from" currency**.

Example response:

```json
{
  "usd": {
    "inr": 83,
    "npr": 133,
    ...
  }
}
```

So:

```js
currencyInfo["npr"] → rate
```

---

## 🔹 Currency Options

```js
const options = Object.keys(currencyInfo)
```

👉 Converts object keys into array:

```js
["usd", "inr", "npr", ...]
```

Used in dropdown.

---

## 🔹 Swap Function

```js
const swap = () => {
  setfrom(to)
  setto(from)
  setconvertedAmount(amount)
  setamount(convertedAmount)
}
```

### ⚠️ Important Concept: Async State

React state updates are **asynchronous**, so this can behave unexpectedly.

Better version:

```js
const swap = () => {
  setfrom(prev => to)
  setto(prev => from)
  setamount(convertedAmount)
  setconvertedAmount(amount)
}
```

👉 Or even safer using temp variables.

---

## 🔹 Convert Function

```js
const convert = () => {
  setconvertedAmount(amount * currencyInfo[to])
}
```

👉 Logic:

```
converted = amount × exchange_rate
```

---

## 🔹 Form Submit

```js
<form onSubmit={(e) => {
  e.preventDefault();
  convert()
}}>
```

👉 Prevents page reload and runs conversion.

---

# 🎨 JSX UI Breakdown

You’re using **Tailwind CSS** (good choice 👍)

### Background

```js
style={{
  backgroundImage: `url(...)`
}}
```

👉 Inline styling for background image.

---

### Input Components

You reuse `InputBox` twice:

```js
<InputBox ... />
```

This is called **component reusability** — very important in React.

---

# 🔷 2) `InputBox.jsx` (Reusable Component)

## 🔹 Props

```js
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisable = false,
})
```

👉 Props = data passed from parent (`App`)

---

## 🔹 useId()

```js
const amountInputId = useId()
```

👉 Generates unique ID (for accessibility)

Used here:

```js
<label htmlFor={amountInputId}>
<input id={amountInputId} />
```

---

## 🔹 Controlled Input

```js
value={amount}
onChange={(e) => onAmountChange(Number(e.target.value))}
```

👉 This is a **controlled component**

* React controls input value
* Not the DOM

---

## 🔹 Optional Callback Pattern

```js
onAmountChange && onAmountChange(...)
```

👉 Means:

> Only call function if it exists

---

## 🔹 Dropdown

```js
<select
  value={selectCurrency}
  onChange={(e)=> onCurrencyChange(e.target.value)}
>
```

### Dynamic options:

```js
{currencyOptions.map((currency) => (
  <option key={currency} value={currency}>
    {currency}
  </option>
))}
```

👉 This is **list rendering in React**

---

# 🔷 3) `useCurrencyInfo.js` (Custom Hook)

## 🔹 Why Custom Hook?

To **separate API logic** from UI.

---

## 🔹 State

```js
const [data, setdata] = useState({})
```

---

## 🔹 useEffect

```js
useEffect(() => {
  fetch(...)
    .then(res => res.json())
    .then(res => setdata(res[currency]))
}, [currency])
```

### Key concept:

👉 `useEffect` runs when `currency` changes

---

### Flow:

1. User changes currency
2. `currency` updates
3. `useEffect` runs
4. API fetch happens
5. `data` updates
6. UI re-renders

---

## 🔹 API URL

```js
https://cdn.jsdelivr.net/.../${currency}.json
```

Dynamic request like:

```
usd.json
inr.json
```

---

## 🔹 Return Data

```js
return data
```

So in `App`:

```js
currencyInfo[to]
```

---

# 🔁 Data Flow (Very Important)

```
User Input → App State → Props → InputBox

Currency Change → App State → Hook → API → App State → UI
```

👉 This is **unidirectional data flow** (core React concept)

---

# ⚠️ Improvements You Should Make

## 1) Handle undefined rates

```js
const convert = () => {
  if(currencyInfo[to]) {
    setconvertedAmount(amount * currencyInfo[to])
  }
}
```

---

## 2) Fix naming consistency

Use camelCase:

```js
setAmount
setFrom
setTo
```

---

## 3) Loading state (important UX)

Add:

```js
const [loading, setLoading] = useState(true)
```

---

## 4) Better swap logic

```js
const swap = () => {
  const temp = from
  setfrom(to)
  setto(temp)
}
```

---

# 🧠 What You Learned (Core React Concepts)

This project covers:

* ✅ useState (state management)
* ✅ useEffect (side effects)
* ✅ Custom hooks
* ✅ Controlled components
* ✅ Props
* ✅ Reusable components
* ✅ API handling
* ✅ Event handling
* ✅ Conditional rendering (partially)

---

# 🚀 Next Level (If you want)

I can help you upgrade this into:

1. 🔥 **Professional-level app**

   * Loading spinner
   * Error handling
   * Debounce input

2. 📊 Add chart of currency trends

3. 🌍 Add flags + country names

4. ⚡ Optimize performance (useMemo, useCallback)

---


