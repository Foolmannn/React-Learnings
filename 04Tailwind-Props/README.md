**Props in React** are how components **receive data from their parent**. Think of them like **function parameters**, but for UI components.

---

# 🧠 1. What are props (concept)

In React, every component is just a function:

```jsx
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}
```

Here:

* `props` = input object
* `props.name` = value passed from parent

---

# 🧩 2. How props flow (VERY IMPORTANT)

React follows **one-way data flow**:

👉 Parent → Child
❌ Child cannot directly change parent data

```jsx
function App() {
  return <Welcome name="Suman" />;
}
```

```jsx
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}
```

---

# 🔍 3. Props are read-only (immutable)

You **must NOT modify props**

❌ Wrong:

```jsx
props.name = "Ram"; // ❌
```

✅ Correct:

* Use state if you need to change data

---

# 🧱 4. Types of props

### (a) Simple props

```jsx
<User name="Suman" age={20} />
```

---

### (b) String vs JS expression

```jsx
title="Hello"      // string
count={10}         // number
isLoggedIn={true}  // boolean
```

---

### (c) Passing objects

```jsx
const user = { name: "Suman", age: 20 };

<User data={user} />
```

---

### (d) Passing arrays

```jsx
<List items={[1, 2, 3]} />
```

---

### (e) Passing functions (VERY IMPORTANT)

Used for communication from child → parent

```jsx
function App() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return <Button onClick={handleClick} />;
}
```

```jsx
function Button(props) {
  return <button onClick={props.onClick}>Click</button>;
}
```

---

# 👶 5. Props with destructuring (clean way)

Instead of:

```jsx
function User(props) {
  return <h1>{props.name}</h1>;
}
```

Use:

```jsx
function User({ name }) {
  return <h1>{name}</h1>;
}
```

---

# 🧬 6. Default props

If no value is passed:

```jsx
function User({ name = "Guest" }) {
  return <h1>{name}</h1>;
}
```

---

# 📦 7. Special prop: children

`props.children` = content inside component

```jsx
<Card>
  <h1>Hello</h1>
</Card>
```

```jsx
function Card(props) {
  return <div>{props.children}</div>;
}
```

---

# 🔄 8. Props vs State (IMPORTANT difference)

| Props              | State                    |
| ------------------ | ------------------------ |
| Passed from parent | Managed inside component |
| Read-only          | Mutable                  |
| External data      | Internal data            |

---

# ⚙️ 9. Real-world example

```jsx
function Product({ name, price, onBuy }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
      <button onClick={onBuy}>Buy</button>
    </div>
  );
}

function App() {
  return (
    <Product
      name="Laptop"
      price={1000}
      onBuy={() => alert("Purchased")}
    />
  );
}
```

---

# ⚠️ 10. Common mistakes

### ❌ Mutating props

```jsx
props.count++;
```

### ❌ Wrong naming

```jsx
<User username="Suman" />
// but using props.name → undefined
```

### ❌ Forgetting curly braces

```jsx
age="20" // string, not number
```

---

# 🧠 Mental model (remember this)

* Component = function
* Props = input
* JSX = output UI

👉 Same as:

```js
function add(a, b) {
  return a + b;
}
```

---

# 🚀 Final clarity

Props are the **foundation of component communication** in React:

* Pass data down
* Pass events up (via functions)
* Keep components reusable

---



---

# 🧩 1. Passing an object as props

```jsx
const user = {
  name: "Suman",
  age: 20,
  address: {
    city: "Kathmandu"
  }
};

function App() {
  return <User data={user} />;
}
```

---

# 🔍 2. Accessing object props in child

### Basic way:

```jsx
function User(props) {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <p>{props.data.age}</p>
    </div>
  );
}
```

👉 `props.data` = your object
👉 `props.data.name` = access property

---

# ✨ 3. Using destructuring (clean & recommended)

Instead of writing `props.data` again and again:

```jsx
function User({ data }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.age}</p>
    </div>
  );
}
```

---

# 🚀 4. Deep destructuring (very useful)

```jsx
function User({ data: { name, age, address } }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{address.city}</p>
    </div>
  );
}
```

---

# 🧠 5. Even cleaner (best practice)

Destructure at top:

```jsx
function User({ data }) {
  const { name, age, address } = data;

  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{address.city}</p>
    </div>
  );
}
```

---

# 🔥 6. Passing object properties directly (better design)

Instead of passing full object:

```jsx
<User data={user} />
```

You can pass only what you need:

```jsx
<User name={user.name} age={user.age} />
```

Then:

```jsx
function User({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
}
```

👉 This makes components more reusable and cleaner

---

# ⚠️ 7. Common mistakes

### ❌ Forgetting object path

```jsx
props.name  // ❌ undefined
```

Correct:

```jsx
props.data.name
```

---

### ❌ Accessing undefined nested values

```jsx
props.data.address.city // 💥 error if address is undefined
```

✅ Safe way:

```jsx
props.data.address?.city
```

---

### ❌ Mutating object props

```jsx
props.data.name = "Ram"; // ❌ never do this
```

---

# 🎯 8. Real example (with function inside object)

```jsx
const user = {
  name: "Suman",
  greet: () => alert("Hello!")
};

function App() {
  return <User data={user} />;
}

function User({ data }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <button onClick={data.greet}>Greet</button>
    </div>
  );
}
```

---

# 🧠 Final mental model

* Object props = just a JS object
* Access with `.` or destructuring
* Never modify it
* Extract only what you need

---



---

# 🧩 1. Passing multiple props

```jsx
function App() {
  return (
    <User 
      name="Suman" 
      age={20} 
      city="Kathmandu" 
    />
  );
}
```

👉 Here you are passing **3 props at once**

---

# 🔍 2. Receiving multiple props

### Method 1: using `props`

```jsx
function User(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.city}</p>
    </div>
  );
}
```

---

# ✨ 3. Best way: destructuring

```jsx
function User({ name, age, city }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{city}</p>
    </div>
  );
}
```

👉 Cleaner and most commonly used

---

# 🔥 4. Mixing different types of props

You can pass **anything**:

```jsx
function App() {
  const handleClick = () => alert("Clicked");

  return (
    <User 
      name="Suman"
      age={20}
      isStudent={true}
      hobbies={["coding", "gaming"]}
      onClick={handleClick}
    />
  );
}
```

```jsx
function User({ name, age, isStudent, hobbies, onClick }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{isStudent ? "Student" : "Not Student"}</p>
      <ul>
        {hobbies.map((hobby, i) => (
          <li key={i}>{hobby}</li>
        ))}
      </ul>
      <button onClick={onClick}>Click</button>
    </div>
  );
}
```

---

# 🧠 5. Passing many props using spread operator

If you already have an object:

```jsx
const user = {
  name: "Suman",
  age: 20,
  city: "Kathmandu"
};
```

You can pass all at once:

```jsx
<User {...user} />
```

👉 Same as:

```jsx
<User name="Suman" age={20} city="Kathmandu" />
```

---

# 📦 6. Combining object + multiple props

```jsx
<User 
  name="Suman"
  details={{ age: 20, city: "Kathmandu" }}
/>
```

```jsx
function User({ name, details }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{details.age}</p>
      <p>{details.city}</p>
    </div>
  );
}
```

---

# ⚠️ 7. Common mistakes

### ❌ Missing prop

```jsx
<User name="Suman" />
// but using age → undefined
```

---

### ❌ Wrong destructuring

```jsx
function User({ props }) { } // ❌ wrong
```

Correct:

```jsx
function User(props) { } 
// OR
function User({ name }) { }
```

---

### ❌ Too many unnecessary props

If you pass too many unrelated props → messy component

👉 Better:

* Group logically (object)
* Or split components

---

# 🎯 8. Clean design rule (important)

* Pass only what the component needs
* Keep props **simple and meaningful**
* Avoid dumping huge objects unless needed

---

# 🧠 Final mental model

Multiple props =
👉 multiple inputs to a component
👉 just like a function with many parameters

```js
function add(a, b, c) {}
```

Same idea:

```jsx
<Component a={1} b={2} c={3} />
```

---

