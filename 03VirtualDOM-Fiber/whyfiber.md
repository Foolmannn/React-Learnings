**Virtual DOM + architecture**.

---

# 🧠 What is React Fiber (in simple terms)

React Fiber is the **new internal engine (reconciler)** of React introduced in v16.

👉 It is a **complete rewrite of how React updates the UI**.

* Old React → synchronous (blocking)
* Fiber → **asynchronous, interruptible, prioritized**

---

# 🔹 What is a “Fiber”?

👉 A **fiber = a unit of work**

Technically:

* It’s just a **JavaScript object**
* Represents a **component in the tree**
* Stores info like:

  * state
  * props
  * parent/child relation

👉 Think of it like:

> “Each component = one task React can process”

---

# 🔹 Why Fiber was needed (important 🔥)

Before Fiber:

* React used **Stack Reconciler**
* It was **synchronous**
* Once rendering started → **cannot stop**

❌ Problem:

* UI freezes during heavy updates
* Bad for animations & large apps

---

# 🔹 What Fiber solves

Fiber introduces:

### ✅ 1. Incremental Rendering

Break big work into **small chunks**
👉 React doesn’t block the UI anymore ([Swiftorial][1])

---

### ✅ 2. Prioritization

React can decide:

* urgent → render first (e.g., typing)
* less important → delay (e.g., data loading)

---

### ✅ 3. Pause / Resume / Abort

React can:

* pause work
* resume later
* cancel unnecessary updates ([OpenReplay Blog][2])

---

### ✅ 4. Better UX

* smoother animations
* responsive UI

---

# 🔹 How Fiber fits with Virtual DOM

You already know:

👉 Virtual DOM = representation of UI

Now:

👉 Fiber = **how React processes updates to that Virtual DOM**

---

### Flow:

1. You update state
2. React creates new Virtual DOM
3. Fiber compares (diffing)
4. Decides what to update
5. Applies changes to real DOM

---

# 🔹 Two Phases of Fiber (VERY IMPORTANT)

## 1. Render Phase (Reconciliation)

* Builds new tree (called **work-in-progress tree**)
* Can be:

  * paused
  * stopped
  * resumed

👉 This is where React **thinks**

---

## 2. Commit Phase

* Applies changes to real DOM
* **Synchronous (cannot stop)**

👉 This is where React **acts**

---

# 🔹 Fiber Tree Concept

React maintains:

* **Current tree** → what’s on screen
* **Work-in-progress tree** → new version

👉 After processing:

* React swaps them

---

# 🔹 Key Idea (this is the core insight)

> Fiber turns rendering into a **manageable scheduling problem**

Instead of:

```
Do everything at once
```

React now:

```
Do a little → pause → continue → prioritize
```

---

# 🔥 Simple Analogy

Imagine:

### Old React:

* Like doing homework in one sitting (no break)

### Fiber:

* Break homework into tasks
* Do important ones first
* Pause if needed

---

# 🔹 Connection to Hooks (important for you)

Hooks rely on Fiber:

* React tracks hooks using **fiber nodes**
* That’s why:

  * hooks must be called in same order

👉 Fiber = memory system behind hooks

---

# 🚀 Final Summary (exam-ready)

* React Fiber = new reconciliation engine
* Fiber = unit of work (JS object)
* Enables:

  * incremental rendering
  * prioritization
  * async rendering
* Works in 2 phases:

  * render (async)
  * commit (sync)
* Improves:

  * performance
  * responsiveness
  * scalability

---


[1]: https://www.swiftorial.com/tutorials/web_development/react/advanced_concepts/react_fiber/?utm_source=chatgpt.com "React Fiber | Advanced Concepts | React Tutorial"
[2]: https://blog.openreplay.com/react-fiber-explained/?utm_source=chatgpt.com "React Fiber explained"
