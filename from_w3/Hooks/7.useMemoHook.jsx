// React useMemo Hook
// The React useMemo Hook returns a memoized value.

// Think of memoization as caching a value so that it does not need to be recalculated.

// The useMemo Hook only runs when one of its dependencies update.

// This can improve performance.

// The useMemo and useCallback Hooks are similar:

// useMemo returns a memoized value.

// useCallback returns a memoized function.

// Learn more about useCallback in the useCallback chapter.

// Without useMemo
// The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.

// In this example, we have an expensive function that runs on every render.

// When changing the count or adding a todo, you will notice a delay in execution.

// Example:Get your own React.js Server
// A poor performing function. The expensiveCalculation function runs on every render:

// Use useMemo
// To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. This will cause the function to only run when needed.

// We can wrap the expensive function call with useMemo.

// The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.

// In the following example, the expensive function will only run when count is changed and not when todo's are added.

// Example:
// Performance example using the useMemo Hook: